import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ACTIVITIES } from '../../data/activities.data';
import { PERSON } from '../../data/person-data';
import { USER } from '../../data/user-data';
import { ALLDEALS } from '../../data/all-deals.data';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { LMSService } from '../../lms-service';

@Component({
  selector: 'app-activity-modal',
  templateUrl: './activity-modal.component.html',
  styleUrls: ['./activity-modal.component.scss']
})
export class ActivityModalComponent implements OnInit {

  @Input() activityData;
  @Input() dateString: string;
  @Input() isEdit: boolean = false;

  public person = PERSON;
  public userData = USER;
  public activitiesData = ACTIVITIES;
  public activities: string[] = ["Call", "Meeting", "Email", "Task", "Deadline", "Others"]
  public activityTypes: string[] = ["Deal", "Person", "Organization"]

  collaboratorCtrl = new FormControl();
  participantCtrl = new FormControl();
  personCtrl = new FormControl();
  organizationCtrl = new FormControl();
  dealCtrl = new FormControl();

  collaborators;
  allCollaborators;
  filteredCollaborators;

  participants;
  allParticipants;
  filteredParticipants;

  peoples;
  allPeoples;
  filteredPeoples;

  organizations;
  allOrganizations;
  filteredOrganizations;

  deals: Array<any> = [];
  allDeals: Array<any> = [];
  filteredDeals: Observable<Array<any>>;

  activityForm: FormGroup = this.fb.group({
    activity: ['call', Validators.required],
    title: ['', Validators.required],
    description: [],
    startDate: [],
    startTime: [],
    endDate: [],
    endTime: [],
    activityType: [],
    person: [],
    deal: [],
    organization: [],
    participants: [],
    collaborators: [],
    markAsDone: [false]
  });

  constructor(
    private fb: FormBuilder,
    public activeModal: NgbActiveModal,
    private lmsService: LMSService
  ) { }

  async ngOnInit() {
    this.allParticipants = await this.lmsService.getPersons();
    this.allCollaborators = await this.lmsService.getUsers();
    this.allPeoples = await this.lmsService.getPersons();
    this.allOrganizations = await this.lmsService.getOrganizations();
    this.allDeals = ALLDEALS;

    const dateNow = moment().format('YYYY-MM-DD');
    const timeNow = moment().format('HH:mm');
    const timeEnd = moment().add('m', 30).format('HH:mm');

    this.activityForm.patchValue({
      startDate: this.dateString ? this.dateString : dateNow,
      endDate: this.dateString ? this.dateString : dateNow,
      startTime: this.dateString ? '00:00' : timeNow,
      endTime: this.dateString ? '00:30' : timeEnd
    });

    if (this.isEdit) {
      this.activityForm.patchValue({
        activity: 'call',
        title: this.activityData.title ? this.activityData.title : '',
        description: this.activityData.description ? this.activityData.description : '',
        startDate: this.activityData.startedAt,
        startTime: this.activityData.startTime,
        endDate: this.activityData.endedAt,
        endTime: this.activityData.endTime,
        activityType: '',
        person: '',
        deal: '',
        organization: '',
        participants: '',
        collaborators: '',
        markAsDone: false
      });
    }

    this.filteredParticipants = this.participantCtrl.valueChanges.pipe(
      startWith(null),
      map((participantName: string) => (participantName ? this._filterParticipants(participantName) : this.allParticipants.slice()))
    );
    this.filteredCollaborators = this.collaboratorCtrl.valueChanges.pipe(
      startWith(null),
      map((collaboratorName: string | null) => (collaboratorName ? this._filterCollaborator(collaboratorName) : this.allCollaborators.slice()))
    );
    this.filteredPeoples = this.personCtrl.valueChanges.pipe(
      startWith(null),
      map((personName: string | null) => (personName ? this._filterPerson(personName) : this.allPeoples.slice()))
    );
    this.filteredOrganizations = this.organizationCtrl.valueChanges.pipe(
      startWith(null),
      map((organizationName: string | null) => (organizationName ? this._filterOrganization(organizationName) : this.allOrganizations.slice()))
    );
    this.filteredDeals = this.dealCtrl.valueChanges.pipe(
      startWith(null),
      map((dealName: string | null) => (dealName ? this._filterDeals(dealName) : this.allDeals.slice()))
    );
  }


  addMinutes(minutes: number) {
    const endDateAfterAdd = moment().add('m', minutes).format('YYYY-MM-DD');
    const endTimeAfterAdd = moment().add('m', minutes).format('HH:mm');

    this.activityForm.patchValue({
      endDate: endDateAfterAdd,
      endTime: endTimeAfterAdd
    });
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

  getInitials(name: string) {
    if (name) {
      const fullName = name.split(' ');

      let initials;
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

  onSave() {
    console.log('formValue: ', this.activityForm.value);

  }

  private _filterParticipants(value: string) {
    const filterValue = value;

    return this.allParticipants.filter(person => person.name.toLowerCase().includes(filterValue));
  }

  private _filterCollaborator(value: string) {
    const filterValue = value.toLowerCase();

    return this.allCollaborators.filter(collaborator => collaborator.fullName.toLowerCase().includes(filterValue));
  }

  private _filterPerson(value: string) {
    const filterValue = value.toLowerCase();

    return this.allPeoples.filter(people => people.name.toLowerCase().includes(filterValue));
  }

  private _filterOrganization(value: string): Array<any> {
    const filterValue = value.toLowerCase();

    return this.allOrganizations.filter(organization => organization.name.toLowerCase().includes(filterValue));
  }

  private _filterDeals(value: string): Array<any> {
    const filterValue = value.toLowerCase();

    return this.allDeals.filter(deal => deal.title.toLowerCase().includes(filterValue));
  }
}
