import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { map, startWith } from 'rxjs/operators';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { LeadService } from '../lead.service';
import { ActivitiyRequest } from '../interfaces/add-activities-reqeust.interface';

@Component({
  selector: 'app-lead-profile',
  templateUrl: './lead-profile.component.html',
  styleUrls: ['./lead-profile.component.scss']
})
export class LeadProfileComponent implements OnInit {

  dateNow: string;
  minEndDate: string;

  public Editor = ClassicEditor;

  isLoadingDetails: boolean = true;
  isLoadingActivities: boolean = true;
  isLoading: boolean = true;
  submitClicked: boolean = false;

  collaboratorCtrl = new FormControl();
  participantCtrl = new FormControl();

  allCollaborators = [];
  filteredCollaborators;

  allParticipants = [];
  filteredParticipants;

  activityTypes;

  activityForm: FormGroup = this.fb.group({
    activity: ['1', Validators.required],
    title: ['', Validators.required],
    description: [''],
    startDate: ['', Validators.required],
    startTime: ['', Validators.required],
    endDate: ['', Validators.required],
    endTime: ['', Validators.required],
    participants: [''],
    collaborators: [''],
    markAsDone: [false]
  });

  allUser;
  leadProfileData;

  profileType: string;

  tasksTodo = [];
  tasksDone = [];
  tasksOpen = [];

  public id: number;

  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal,
    private router: Router,
    private leadService: LeadService
  ) {
  }

  async ngOnInit() {
    this.dateNow = this.minEndDate = moment().format('YYYY-MM-DD');
    this.id = Number(this.router.url.split("/").pop());
    this.profileType = this.getProfileType();
    this.activityTypes = await this.leadService.getActivityTypesListing().toPromise();

    this.leadService.getDetailsById(this.id, this.profileType).subscribe({
      next: (n) => {
        this.leadProfileData = n;
        this.initForm();
        this.isLoading = false;
        this.isLoadingDetails = false;
      }
    });

    this.populateLov();
    this.filterActivity();
  }

  initForm() {
    const dateNow = moment().format('YYYY-MM-DD');
    const timeNow = moment().format('HH:mm');
    const timeTo = moment().add(30, 'm').format('HH:mm');

    this.activityForm.patchValue({
      startDate: dateNow,
      startTime: timeNow,
      endDate: dateNow,
      endTime: timeTo,
      participants: [],
      collaborators: []
    });
  }

  saveActivity() {
    const dateNow = moment().format('YYYY-MM-DD');
    const timeNow = moment().format('HH:mm');
    const timeTo = moment().add(30, 'm').format('HH:mm');

    const formValue = this.activityForm.getRawValue();
    const formValid = this.activityForm.valid;

    this.submitClicked = true;

    if (!formValid) {
      return;
    }

    this.isLoadingActivities = true;

    const collaboratorIds = formValue.collaborators.map(collaborator => collaborator.id);
    const participantIds = formValue.participants.map(participant => participant.id);
    const payload: ActivitiyRequest = {
      activityTypeId: Number(formValue.activity),
      createdById: 43,
      description: formValue.description,
      title: formValue.title,
      statusId: formValue.markAsDone ? 12 : 11,
      contextableType: this.profileType == 'person' ? 'person' : 'organization',
      contextableId: this.id,
      collaboratorsIds: collaboratorIds,
      participantsIds: participantIds,
      startTime: formValue.startDate.concat(`T${formValue.startTime}`),
      startedAt: formValue.startDate,
      endTime: formValue.endDate.concat(`T${formValue.endTime}`),
      endedAt: formValue.endDate
    };

    this.leadService.addActivity(payload).subscribe({
      next: async (n) => {
        this.activityForm.reset({
          activity: '1',
          startDate: dateNow,
          startTime: timeNow,
          endDate: dateNow,
          endTime: timeTo,
          participants: [],
          collaborators: []
        });
        this.submitClicked = false;
        await this.filterActivity();
      }
    })
  }

  removeCollaborator(id: number): void {
    const collaborator = this.activityForm.get('collaborators').value;
    const newCollaborators = collaborator.filter(collaborator => collaborator.id != id);

    this.activityForm.get('collaborators').setValue(newCollaborators);
  }

  removeParticipant(id: number): void {
    const participants = this.activityForm.get('participants').value;
    const newParticipants = participants.filter(participant => participant.id != id);

    this.activityForm.get('participants').setValue(newParticipants);
  }

  onStartDateChange(ev) {
    this.activityForm.get('endDate').setValue(ev.target.value);
    this.minEndDate = ev.target.value;
  }

  markAsDone(id: number) {
    this.isLoadingActivities = true;
    this.leadService.markActivityAsDone(id).subscribe({
      next: (n) => {
        this.filterActivity();
      }
    });
  }

  deleteActivity(id: number) {
    this.isLoadingActivities = true;
    this.leadService.deleteActivity(id).subscribe({
      next: (n) => {
        this.filterActivity();
      }
    })
  }

  private _filterCollaborator(value: string) {
    const filterValue = value.toLowerCase();

    return this.allCollaborators.filter(collaborator => collaborator.fullName.toLowerCase().includes(filterValue));
  }

  private _filterParticipants(value: string) {
    const filterValue = value;

    return this.allParticipants.filter(person => person.name.toLowerCase().includes(filterValue));
  }

  private getProfileType() {
    if (this.router.url.includes('organization'))
      return 'organization';
    if (this.router.url.includes('people'))
      return 'person';
    if (this.router.url.includes('deal'))
      return 'deal';
  }

  getInitial(name: string) {
    if (name) {
      const fullName = name.split(' ');

      let initials: string;
      if (fullName.length > 1) {
        initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
      }
      else {
        initials = fullName.shift().charAt(0);
      }
      return initials.toUpperCase();
    }
    else {
      return 'AZ';
    }
  }

  private filterActivity() {
    this.tasksOpen = [];
    this.tasksDone = [];
    this.tasksTodo = [];

    this.leadService.getActivitiesListing(this.id, this.profileType).subscribe({
      next: (n: any) => {
        const activities = n;

        if (activities.length <= 0) {
          this.isLoadingActivities = false;
          return;
        }

        for (const activity of activities) {
          if (activity.status.name == 'status_todo') {
            this.tasksTodo.push(activity);
            this.tasksOpen.push(activity);
          }
          if (activity.status.name == 'status_done')
            this.tasksDone.push(activity);
        }

        this.isLoadingActivities = false;
      }
    })
  }

  public getIcon(task) {
    switch (task.activityType.id) {
      case 1: {
        return 'bx bx-phone-call';
        break;
      }
      case 2: {
        return 'bx bx-group';
        break;
      }
      case 3: {
        return 'bx bx-envelope';
        break;
      }
      case 4: {
        return 'bx bx-credit-card';
        break;
      }
      case 5: {
        return 'bx bx-calendar';
        break;
      }
      case 6: {
        return 'bx bx-chip';
        break;
      }
    }
  }

  openDealsModal(content) {
    this.modalService.open(content, { scrollable: true })
  }

  onBack(profileType: string) {
    const leadType = profileType == 'person' ? 'people' : 'organization';
    this.router.navigate([`/lms/leads/${leadType}`]);
  }

  getInitials2(firstName: string, lastName: string) {
    return firstName.split(' ').shift().charAt(0).toUpperCase() + lastName.split(' ').pop().charAt(0).toUpperCase();
  }

  public async syncDetails() {
    this.isLoading = true;
    this.leadProfileData = await this.leadService.getDetailsById(this.id, this.profileType).toPromise();
    this.isLoading = false;
  }

  private async populateLov() {
    this.leadService.getUsersListing().subscribe({
      next: (n: any) => {
        this.allCollaborators = n;
        this.filteredCollaborators = this.collaboratorCtrl.valueChanges.pipe(
          startWith(null),
          map((collaboratorName: string | null) => (collaboratorName ? this._filterCollaborator(collaboratorName) : this.allCollaborators.slice()))
        );
      }
    });
    this.leadService.getPeopleListing().subscribe({
      next: (n: any) => {
        this.allParticipants = n;
        this.filteredParticipants = this.participantCtrl.valueChanges.pipe(
          startWith(null),
          map((participantName: string) => (participantName ? this._filterParticipants(participantName) : this.allParticipants.slice()))
        );
      }
    });
  }
}
