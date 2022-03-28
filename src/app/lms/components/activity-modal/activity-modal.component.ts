import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { CommonService } from '../../common/common.service';
import { DealsService } from '../../deals/deals.service';
import { ACTIVITYTYPE } from '../../enum/lms-type.enum';
import { LeadService } from '../../leads/lead.service';
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
  @Input() pipelineViewId: string;
  @Input() dealId: number;

  isLoading: boolean = true;
  submitClicked: boolean = false;

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
  @ViewChild('CollaboratorSelect') collaboratorSelect: MatSelect;

  participants;
  allParticipants;
  filteredParticipants;
  selectedParticipants: any[] = [];
  @ViewChild('ParticipantSelect') participantSelect: MatSelect;

  peoples;
  allPeoples;
  filteredPeoples;

  organizations;
  allOrganizations;
  filteredOrganizations;

  dealData;
  deals: Array<any> = [];
  allDeals: Array<any> = [];
  filteredDeals: Observable<Array<any>>;

  activityForm: FormGroup = this.fb.group({
    id: [],
    activityTypeId: ['', Validators.required],
    title: ['', Validators.required],
    description: [],
    startedAt: ['', Validators.required],
    startTime: ['', Validators.required],
    endedAt: ['', Validators.required],
    endTime: ['', Validators.required],
    contextableType: ['', Validators.required],
    personsId: [],
    dealsId: [],
    organizationsId: [],
    participantsIds: [[]],
    collaboratorsIds: [[]],
    markAsDone: [false]
  });

  constructor(
    private fb: FormBuilder,
    public activeModal: NgbActiveModal,
    private lmsService: LMSService,
    private leadService: LeadService,
    private dealsService: DealsService,
    private activatedRoute: ActivatedRoute,
    public commonService: CommonService
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

    if (this.pipelineViewId) {
      this.getDealsListByPipelineId();
    } else {
      this.getDealsList();
    }

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
      this.getActivityById();
    }

    if (this.dealId) {
      this.activityForm.controls['contextableType'].setValue(ACTIVITYTYPE.DEAL);
      this.onContextableTypeChange();
    }
  }

  patchActivityDataToActivityForm() {
    let activityParticipantIds: string[] = [];
    this.activityData.participants.forEach(element => {
      activityParticipantIds.push(element.id + '');
    });

    let activityCollaboratorIds: string[] = [];
    this.activityData.collaborators.forEach(element => {
      activityCollaboratorIds.push(element.id + '');
    });

    this.activityForm.patchValue({
      id: this.activityData.id,
      activityTypeId: this.activityData.activityType.id + '',
      title: this.activityData.title ? this.activityData.title : '',
      description: this.activityData.description ? this.activityData.description : '',
      startedAt: this.activityData.startedAt,
      startTime: this.activityData.startTime,
      endedAt: this.activityData.endedAt,
      endTime: this.activityData.endTime,
      contextableType: this.activityData.contextableType,
      participantsIds: activityParticipantIds,
      collaboratorsIds: activityCollaboratorIds,
      markAsDone: this.activityData.markAsDone
    });

    this.onParticipantChange();
    this.onCollaboratorChange();
    this.onContextableTypeChange();

    let contextableType: ACTIVITYTYPE = this.activityForm.value.contextableType;

    if (contextableType == ACTIVITYTYPE.PERSON) {
      this.activityForm.controls['personsId'].setValue(this.activityData.contextableId + '');

    } else if (contextableType == ACTIVITYTYPE.ORGANIZATION) {
      this.activityForm.controls['organizationsId'].setValue(this.activityData.contextableId + '');

    } else if (contextableType == ACTIVITYTYPE.DEAL) {
      this.activityForm.controls['dealsId'].setValue(this.activityData.contextableId + '');
      this.getDeals();
    }
  }


  addMinutes(minutes: number) {
    const endedAtAfterAdd = moment().add('m', minutes).format('YYYY-MM-DD');
    const endTimeAfterAdd = moment().add('m', minutes).format('HH:mm');

    this.activityForm.patchValue({
      endedAt: endedAtAfterAdd,
      endTime: endTimeAfterAdd
    });
  }

  onCollaboratorChange() {
    let formCollaboratorIds: any[] = this.activityForm.value.collaboratorsIds;

    if (!formCollaboratorIds || !this.allCollaborators) {
      return;
    }

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

    if (!formCollaboratorIds || !this.allCollaborators) {
      return;
    }

    let id: number = formCollaboratorIds[index];
    this.collaboratorSelect.options.forEach((item: MatOption) => {
      if (item.value === id) {
        item.deselect();
      }
    });
  }

  onParticipantChange() {
    let formParticipantIds: any[] = this.activityForm.value.participantsIds;

    if (!formParticipantIds || !this.allParticipants) {
      return;
    }

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

    if (!formParticipantIds || !this.allParticipants) {
      return;
    }

    let id: number = formParticipantIds[index];
    this.participantSelect.options.forEach((item: MatOption) => {
      if (item.value === id) {
        item.deselect();
      }
    });
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

  onContextableTypeChange() {
    let contextableType: ACTIVITYTYPE = this.activityForm.value.contextableType;

    this.activityForm.get('personsId').clearValidators();
    this.activityForm.get('organizationsId').clearValidators();
    this.activityForm.get('dealsId').clearValidators();

    if (contextableType == ACTIVITYTYPE.PERSON) {
      this.activityForm.get('personsId').setValidators(Validators.required);
      this.activityForm.get('personsId').reset();

    } else if (contextableType == ACTIVITYTYPE.ORGANIZATION) {
      this.activityForm.get('organizationsId').setValidators(Validators.required);
      this.activityForm.get('organizationsId').reset();

    } else if (contextableType == ACTIVITYTYPE.DEAL) {
      this.activityForm.get('dealsId').setValidators(Validators.required);
      this.activityForm.get('dealsId').reset();

      if (this.dealId) {
        this.activityForm.controls['dealsId'].setValue(this.dealId + '');
        this.getDeals();
      }
    }
  }

  onSave() {
    this.submitClicked = true;

    if (this.activityForm.invalid) {
      return;
    }

    if (this.activityForm.value.id) {
      this.updateActivity();
    } else {
      this.addActiviy();
    }
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

  getActivityById() {
    this.leadService.getActivityById(this.activityData.id).subscribe({
      next: (n) => {
        this.activityData = n;
        this.patchActivityDataToActivityForm();
      },
      error: (e) => { },
      complete: () => { }
    })
  }

  addActiviy() {
    this.leadService.addActivity(this.activityForm.value).subscribe({
      next: (n) => {
        this.activeModal.close(true);
      },
      error: (e) => { },
      complete: () => { }
    })
  }

  updateActivity() {
    this.leadService.updateActivity(this.activityForm.value).subscribe({
      next: (n) => {
        this.activeModal.close(true);
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

  getDealsList() {
    this.dealsService.getDealsList().subscribe({
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

  getDeals() {
    this.dealData = {};
    let dealId = this.activityForm.value.dealsId;
    this.dealsService.getDealsById(dealId).subscribe({
      next: (n) => {
        this.dealData = n;
      },
      error: (e) => { },
      complete: () => { }
    })
  }
}
