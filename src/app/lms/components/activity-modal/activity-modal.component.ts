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
import { LeadService } from '../../leads/lead.service';
import { DealsService } from '../../deals/deals.service';
import { ActivatedRoute } from '@angular/router';
import { ACTIVITYTYPE } from '../../enum/lms-type.enum';

@Component({
  selector: 'app-activity-modal',
  templateUrl: './activity-modal.component.html',
  styleUrls: ['./activity-modal.component.scss']
})
export class ActivityModalComponent implements OnInit {

  @Input() activityData;
  @Input() dateString: string;
  @Input() isEdit: boolean = false;
  @Input() pipelineViewId: string;

  // public person = PERSON;
  // public userData = USER;
  // public activitiesData = ACTIVITIES;
  // public activities: string[] = ["Call", "Meeting", "Email", "Task", "Deadline", "Others"]
  public activities;
  public activityTypes: string[] = [ACTIVITYTYPE.PERSON, ACTIVITYTYPE.ORGANIZATION, ACTIVITYTYPE.DEAL];

  collaboratorCtrl = new FormControl();
  participantCtrl = new FormControl();
  personCtrl = new FormControl();
  organizationCtrl = new FormControl();
  dealCtrl = new FormControl();

  collaborators;
  allCollaborators;
  filteredCollaborators;
  selectedCollaborators: any[] = [];

  participants;
  allParticipants;
  filteredParticipants;
  selectedParticipants: any[] = [];

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
    activityTypeId: ['', Validators.required],
    title: ['', Validators.required],
    description: [],
    startedAt: [],
    startTime: [],
    endedAt: [],
    endTime: [],
    contextableType: [],
    personsId: [],
    dealsId: [],
    organizationsId: [],
    participantsIds: [],
    collaboratorsIds: [],
    markAsDone: [false]
  });

  constructor(
    private fb: FormBuilder,
    public activeModal: NgbActiveModal,
    private lmsService: LMSService,
    private leadService: LeadService,
    private dealsService: DealsService,
    private activatedRoute: ActivatedRoute
  ) { }

  async ngOnInit() {
    // this.allParticipants = await this.lmsService.getPersons();
    // this.allCollaborators = await this.lmsService.getUsers();
    // this.allPeoples = await this.lmsService.getPersons();
    // this.allOrganizations = await this.lmsService.getOrganizations();
    // this.allDeals = ALLDEALS;

    this.getActivityTypesListing();
    this.getUsersList();
    this.getPersonList();
    this.getOrganizationList();
    this.getDealsListByPipelineId();

    const dateNow = moment().format('YYYY-MM-DD');
    const timeNow = moment().format('HH:mm');
    const timeEnd = moment().add('m', 30).format('HH:mm');

    this.activityForm.patchValue({
      startedAt: this.dateString ? this.dateString : dateNow,
      endedAt: this.dateString ? this.dateString : dateNow,
      startTime: this.dateString ? '00:00' : timeNow,
      endTime: this.dateString ? '00:30' : timeEnd
    });

    if (this.isEdit) {
      this.activityForm.patchValue({
        activityTypeId: '',
        title: this.activityData.title ? this.activityData.title : '',
        description: this.activityData.description ? this.activityData.description : '',
        startedAt: this.activityData.startedAt,
        startTime: this.activityData.startTime,
        endedAt: this.activityData.endedAt,
        endTime: this.activityData.endTime,
        contextableType: '',
        personsId: '',
        dealsId: '',
        organizationsId: '',
        participantsIds: '',
        collaboratorsIds: '',
        markAsDone: false
      });
    }
  }


  addMinutes(minutes: number) {
    const endDateAfterAdd = moment().add('m', minutes).format('YYYY-MM-DD');
    const endTimeAfterAdd = moment().add('m', minutes).format('HH:mm');

    this.activityForm.patchValue({
      endedAt: endDateAfterAdd,
      endTime: endTimeAfterAdd
    });
  }

  onCollaboratorChange() {
    let formCollaboratorIds: any[] = this.activityForm.value.collaboratorsIds;

    this.selectedCollaborators = []
    this.allCollaborators.forEach(collaborator => {
      formCollaboratorIds.forEach(formCollaboratorId => {
        if (collaborator.id == formCollaboratorId) {
          this.selectedCollaborators.push(collaborator);
        }
      });
    });
  }

  onCollaboratorRemove(index: number) {
    let formCollaboratorIds: any[] = this.activityForm.value.collaboratorsIds;

    formCollaboratorIds.splice(index, 1);
    this.selectedCollaborators.splice(index, 1);
    this.activityForm.patchValue({
      collaborators: formCollaboratorIds
    })
  }

  onParticipantChange() {
    let formParticipantIds: any[] = this.activityForm.value.participantsIds;

    this.selectedParticipants = []
    this.allParticipants.forEach(participant => {
      formParticipantIds.forEach(formParticipantId => {
        if (participant.id == formParticipantId) {
          this.selectedParticipants.push(participant);
        }
      });
    });
  }

  onParticipantRemove(index: number) {
    let formParticipantIds: any[] = this.activityForm.value.participantsIds;

    formParticipantIds.splice(index, 1);
    this.selectedParticipants.splice(index, 1);
    this.activityForm.patchValue({
      participants: formParticipantIds
    })
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
    this.addActiviy();
  }

  private _filterParticipants(value: string) {
    const filterValue = value;

    return this.allParticipants.filter(person => person.name.toLowerCase().includes(filterValue));
  }

  private _filterCollaborator(value: string) {
    const filterValue = value.toLowerCase();

    return this.allCollaborators.filter(collaborator => collaborator.firstName.toLowerCase().includes(filterValue));
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

  addActiviy() {
    this.lmsService.addActiviy(this.activityForm.value).subscribe({
      next: (n) => {
        this.activeModal.close();
      },
      error: (e) => { },
      complete: () => { }
    })
  }

  getUsersList() {
    this.lmsService.getUsersList().subscribe({
      next: (n) => {
        this.allCollaborators = n;

        this.filteredCollaborators = this.collaboratorCtrl.valueChanges.pipe(
          startWith(null),
          map((collaboratorName: string | null) => (collaboratorName ? this._filterCollaborator(collaboratorName) : this.allCollaborators.slice()))
        );
      },
      error: (e) => { },
      complete: () => { }
    })
  }

  getPersonList() {
    this.lmsService.getPersonList().subscribe({
      next: (n) => {
        this.allParticipants = n;
        this.allPeoples = n;

        this.filteredParticipants = this.participantCtrl.valueChanges.pipe(
          startWith(null),
          map((participantName: string) => (participantName ? this._filterParticipants(participantName) : this.allParticipants.slice()))
        );

        this.filteredPeoples = this.personCtrl.valueChanges.pipe(
          startWith(null),
          map((personName: string | null) => (personName ? this._filterPerson(personName) : this.allPeoples.slice()))
        );
      },
      error: (e) => { },
      complete: () => { }
    })
  }

  getActivityTypesListing() {
    this.leadService.getActivityTypesListing().subscribe({
      next: (n) => {
        this.activities = n;

        if (this.activities.length > 0) {
          this.activityForm.patchValue({
            activityTypeId: this.activities[0].id + ''
          });
        }
      },
      error: (e) => { },
      complete: () => { }
    })
  }

  getOrganizationList() {
    this.leadService.getOrganizationsListing().subscribe({
      next: (n) => {
        this.allOrganizations = n;

        this.filteredOrganizations = this.organizationCtrl.valueChanges.pipe(
          startWith(null),
          map((organizationName: string | null) => (organizationName ? this._filterOrganization(organizationName) : this.allOrganizations.slice()))
        );
      },
      error: (e) => { },
      complete: () => { }
    })
  }

  getDealsListByPipelineId() {
    this.dealsService.getDealsListByPipelineId(this.pipelineViewId).subscribe({
      next: (n) => {
        this.allDeals = n;

        this.filteredDeals = this.dealCtrl.valueChanges.pipe(
          startWith(null),
          map((dealName: string | null) => (dealName ? this._filterDeals(dealName) : this.allDeals.slice()))
        );
      },
      error: (e) => { },
      complete: () => { }
    })
  }
}
