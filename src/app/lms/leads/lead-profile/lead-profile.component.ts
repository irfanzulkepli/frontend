import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { map, startWith } from 'rxjs/operators';
import { FormControl, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LMSService } from '../../lms-service';
import { PEOPLE } from '../../data/people-data';
import { Router } from '@angular/router';
import { ORGANIZATION } from '../../data/organization-single.data';
import * as moment from 'moment';

@Component({
  selector: 'app-lead-profile',
  templateUrl: './lead-profile.component.html',
  styleUrls: ['./lead-profile.component.scss']
})
export class LeadProfileComponent implements OnInit {

  public Editor = ClassicEditor;

  collaboratorCtrl = new FormControl();
  participantCtrl = new FormControl();
  tagCtrl = new FormControl();
  tagChipCtrl = new FormControl([]);

  tags: Array<Tags> = [];
  allTag: Array<Tags> = [];
  filteredTags: Observable<Array<Tags>>;

  collaborators: Array<User> = [];
  allCollaborators: Array<User> = [];
  filteredCollaborators: Observable<Array<User>>;

  participants: Array<People> = [];
  allParticipants: Array<People> = [];
  filteredParticipants: Observable<Array<People>>;

  followerList: Array<People>;
  allFollowers: Array<People>;
  filteredFollowers = [];

  organizationPeoples: Array<People> = [];
  allOrganizationPeoples: Array<People> = [];
  filteredOrganizationPeoples = [];

  isEditDetails: boolean = false;
  isEditOrganization: boolean = false;
  isEditContact: boolean = false;
  isEditAddress: boolean = false;
  isEditCustomField: boolean = false;
  isEditFollower: boolean = false;

  @ViewChild('personInput') personInput: ElementRef<HTMLInputElement>;
  @ViewChild('tagInput') tagInput: ElementRef<HTMLInputElement>;
  @ViewChild('collaboratorInput') collaboratorInput: ElementRef<HTMLInputElement>;
  @ViewChild('participantInput') participantInput: ElementRef<HTMLInputElement>;

  detailForm: FormGroup;
  organizationForms: FormGroup;
  organizationPersonsForms: FormGroup;
  phoneForms: FormGroup;
  emailForms: FormGroup;
  followerForms: FormGroup;
  addressForm: FormGroup;
  activityForm: FormGroup = this.fb.group({
    activity: ['call', Validators.required],
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

  countries: Array<Country> = [];
  leadTypes: Array<LeadType> = [];
  organizationsAndJobs = [];

  contactType = [];
  allUser: Array<User> = [];
  leadProfileData;

  profileType: string;

  tasksTodo = [];
  tasksDone = [];
  tasksOpen = [];

  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal,
    private lmsService: LMSService,
    private router: Router
  ) {
  }

  async ngOnInit() {
    this.profileType = this.getProfileType();
    this.leadProfileData = this.profileType == 'people' ? PEOPLE : ORGANIZATION;
    this.allTag = await this.lmsService.getTags();
    this.allUser = await this.lmsService.getUsers();
    this.allFollowers = await this.lmsService.getPersons();
    this.allOrganizationPeoples = await this.lmsService.getPersons();
    this.countries = await this.lmsService.getCountry();
    this.allCollaborators = await this.lmsService.getUsers();
    this.leadTypes = await this.lmsService.getLeadTypes();
    this.contactType = await this.lmsService.getTypes();
    this.organizationsAndJobs = await this.lmsService.getOrganizations();
    this.allParticipants = await this.lmsService.getPersons();

    this.initForm();
    this.filterActivity();

    this.filteredParticipants = this.participantCtrl.valueChanges.pipe(
      startWith(null),
      map((participantName: string) => (participantName ? this._filterParticipants(participantName) : this.allParticipants.slice()))
    );
    this.filteredCollaborators = this.collaboratorCtrl.valueChanges.pipe(
      startWith(null),
      map((collaboratorName: string | null) => (collaboratorName ? this._filterCollaborator(collaboratorName) : this.allCollaborators.slice()))
    );
    this.filteredTags = this.tagCtrl.valueChanges.pipe(
      startWith(null),
      map((tag) => (tag ? this._filterTag(tag) : this.allTag.slice()))
    );
  }

  initForm() {
    const dateNow = moment().format('YYYY-MM-DD');
    const timeNow = moment().format('HH:mm');
    const timeTo = moment().add(30, 'm').format('HH:mm');

    this.detailForm = this.fb.group({
      name: [this.leadProfileData.name, Validators.required],
      leadGroup: [this.leadProfileData.contactType.id, Validators.required],
      owner: [this.leadProfileData.owner.id, Validators.required]
    });
    this.organizationForms = this.fb.group({
      organizations: this.fb.array([])
    });
    this.organizationPersonsForms = this.fb.group({
      organizationPersons: this.fb.array([])
    });
    this.phoneForms = this.fb.group({
      phones: this.fb.array([])
    });
    this.emailForms = this.fb.group({
      emails: this.fb.array([])
    });
    this.followerForms = this.fb.group({
      followers: this.fb.array([])
    });
    this.addressForm = this.fb.group({
      country: [this.leadProfileData.country ? this.leadProfileData.country.id : ''],
      area: [this.leadProfileData.area],
      city: [this.leadProfileData.city],
      state: [this.leadProfileData.state],
      zipcode: [this.leadProfileData.zipCode],
      address: [this.leadProfileData.address]
    });
    this.activityForm.patchValue({
      startDate: dateNow,
      startTime: timeNow,
      endDate: dateNow,
      endTime: timeTo
    });

    if (this.leadProfileData.tags.length > 0) {
      const tagList = [];
      for (const tag of this.leadProfileData.tags) {
        tagList.push(tag.id);
        this.tagChipCtrl.setValue(tagList);
      }
    }

    if (this.profileType == 'people') {
      if (this.leadProfileData.email.length > 0) {
        for (const email of this.leadProfileData.email) {
          const emailForm = this.fb.group({
            email: [email.value],
            emailType: [email.type ? email.type.id : '']
          });

          this.emails.push(emailForm);
        }
      }

      if (this.leadProfileData.phone.length > 0) {
        for (const phone of this.leadProfileData.phone) {
          const phoneForm = this.fb.group({
            contactNumber: [phone.value],
            contactType: [phone.type ? phone.type.id : '']
          });

          this.phones.push(phoneForm);
        }
      }
    }
  }

  onSaveAddress() {
    console.log('addressForm: ', this.addressForm.getRawValue());
    this.isEditAddress = !this.isEditAddress;
  }

  onCancelAddress() {
    this.addressForm.reset();
    this.isEditAddress = !this.isEditAddress;
  }

  saveActivity() {
    console.log('activityForm: ', this.activityForm.getRawValue());
  }

  addOrganization() {
    const organizationForm = this.fb.group({
      organizationName: ['', Validators.required],
      jobTitle: ['']
    });

    this.organizations.push(organizationForm);
  }

  deleteOrganization(index: number) {
    this.organizations.removeAt(index);
  }

  addOrganizationPersons() {
    const organizationPersonForm = this.fb.group({
      organizationPersons: ['', Validators.required],
      organizationPersonName: [''],
      jobTitle: ['']
    });

    this.organizationPersons.push(organizationPersonForm);
    this.manageOrganizationPersonFilter(this.organizationPersons.controls.length - 1);
  }

  manageOrganizationPersonFilter(index: number) {
    this.filteredOrganizationPeoples[index] = {};
    this.filteredOrganizationPeoples[index] = this.organizationPersons.at(index).get('organizationPersonName').valueChanges
      .pipe(
        startWith(null),
        map((value) => (value ? this._filterOrganizationPersons(value) : this.allOrganizationPeoples.slice())
        )
      );
  }

  deleteOrganizationPersons(index: number) {
    this.organizationPersons.removeAt(index);
    this.filteredOrganizationPeoples.slice(index, 1);
  }

  addPhone() {
    const contactForm = this.fb.group({
      contactNumber: ['', Validators.required],
      contactType: ['']
    });

    this.phones.push(contactForm);
  }

  deletePhone(index: number) {
    this.phones.removeAt(index);
  }

  addEmail() {
    const contactForm = this.fb.group({
      email: ['', Validators.required],
      emailType: ['']
    });

    this.emails.push(contactForm);
  }

  deleteEmail(index: number) {
    this.emails.removeAt(index);
  }

  addFollower() {
    const followerForm = this.fb.group({
      follower: ['', Validators.required],
      followerCtrlName: ['']
    });

    this.followers.push(followerForm);
    this.manageFollowerFilter(this.followers.controls.length - 1);
  }

  manageFollowerFilter(index: number) {
    this.filteredFollowers[index] = {};
    this.filteredFollowers[index] = this.followers.at(index).get('followerCtrlName').valueChanges
      .pipe(
        startWith(null),
        map((value) => (value ? this._filterFollower(value) : this.allFollowers.slice())
        )
      );
  }

  deleteFollower(index: number) {
    this.followers.removeAt(index);
    this.filteredFollowers.splice(index, 1);
  }

  removeCollaborator(id: number): void {
    const collaborator = this.activityForm.get('collaborators').value as Array<People>;
    const newCollaborators = collaborator.filter(collaborator => collaborator.id != id);

    this.activityForm.get('collaborators').setValue(newCollaborators);
  }

  selectedCollaborator(event: MatAutocompleteSelectedEvent): void {
    const collaborator: User = event.option.value;

    this.collaborators.push(collaborator);
    this.tagInput.nativeElement.value = '';
    this.tagCtrl.setValue(null);
  }

  removeParticipant(id: number): void {
    const participants = this.activityForm.get('participants').value as Array<People>;
    const newParticipants = participants.filter(participant => participant.id != id);

    this.activityForm.get('participants').setValue(newParticipants);
  }

  selectedParticipant(event: MatAutocompleteSelectedEvent): void {
    const paricipant: People = event.option.value;

    this.participants.push(paricipant);
    this.participantInput.nativeElement.value = '';
    this.participantCtrl.setValue(null);
  }

  removeTag(id): void {
    const tags = this.tagChipCtrl.value as Array<number>;
    const newTags = tags.filter(tagId => tagId !== id);

    this.tagChipCtrl.setValue(newTags);
  }

  selectedTag(event: MatAutocompleteSelectedEvent): void {
    const tag: Tags = event.option.value;

    this.tags.push(tag);
    this.tagInput.nativeElement.value = '';
    this.tagCtrl.setValue(null);
  }

  private _filterCollaborator(value: string): Array<User> {
    const filterValue = value.toLowerCase();

    return this.allCollaborators.filter(collaborator => collaborator.fullName.toLowerCase().includes(filterValue));
  }

  private _filterTag(value): Array<Tags> {
    const filterValue = value.name ? value.name.toLowerCase() : value.toLowerCase();

    return this.allTag.filter(tag => tag.name.toLowerCase().includes(filterValue));
  }

  private _filterFollower(value): Array<People> {
    const filterValue = value;

    return this.allFollowers.filter(follower => follower.name.toLowerCase().includes(filterValue));
  }

  private _filterOrganizationPersons(value): Array<People> {
    const filterValue = value;

    return this.allOrganizationPeoples.filter(person => person.name.toLowerCase().includes(filterValue));
  }

  private _filterParticipants(value: string): Array<People> {
    const filterValue = value;

    return this.allParticipants.filter(person => person.name.toLowerCase().includes(filterValue));
  }

  private getProfileType() {
    if (this.router.url.includes('organization'))
      return 'organization';
    if (this.router.url.includes('people'))
      return 'people';
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
    const activities = this.leadProfileData.activity;

    if (activities.length <= 0)
      return;

    for (const activity of activities) {
      if (activity.status.name == 'status_todo')
        this.tasksTodo.push(activity);
      if (activity.status.name == 'status_done')
        this.tasksDone.push(activity);
      if (activity.status.name == 'status_open')
        this.tasksOpen.push(activity);
    }
  }

  public getTag(id: number) {
    return this.allTag.find(tag => tag.id == id);
  }

  public getIcon(task) {
    switch (task.activityTypeId) {
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

  onCountryChange(ev) {
    console.log('on country change: ', ev);
  }

  onBack() {
    this.router.navigate(['/lms/leads/people']);
  }

  get hasAddressDetails(): boolean {
    return (this.leadProfileData.address || this.leadProfileData.area || this.leadProfileData.city || this.leadProfileData.zipCode || this.leadProfileData.state || this.leadProfileData.country)
  }

  get organizations() {
    return this.organizationForms.controls.organizations as FormArray;
  }

  get organizationPersons() {
    return this.organizationPersonsForms.controls.organizationPersons as FormArray;
  }

  get phones() {
    return this.phoneForms.controls.phones as FormArray;
  }

  get emails() {
    return this.emailForms.controls.emails as FormArray;
  }

  get followers() {
    return this.followerForms.controls.followers as FormArray;
  }
}

export interface Fruit {
  name: string;
}

interface Tags {
  id: number;
  name: string;
  colorCode: string;
}

interface Country {
  id: number;
  code: string;
  name: string;
}

interface LeadType {
  id: number;
  name: string;
  class: string;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  lastLoginAt: any;
  createdBy: number;
  statusId: number;
  invitationToken: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: any;
  fullName: string;
}

export interface People {
  id: number;
  name: string;
  organizations: Array<Organization>;
}

interface Pivot {
  personId: number;
  organizationId: number;
  jobTitle: string;
}

export interface Organization {
  id: number;
  name: string;
  address: string;
  contactTypeId: number;
  createdBy: number;
  ownerId: number;
  createdAt: string;
  updatedAt: string;
  countryId: number;
  area: string;
  state: string;
  city: string;
  zipCode: string;
  pivot: Pivot;
}