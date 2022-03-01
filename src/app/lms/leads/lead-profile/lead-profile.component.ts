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

  fruitCtrl = new FormControl();
  personCtrl = new FormControl();
  tagCtrl = new FormControl();

  allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];
  filteredFruits: Observable<string[]>;
  fruits: string[] = ['Lemon'];

  persons: any[] = [];
  allPerson = [];
  filteredPersons: Observable<string[]>;

  tags: Array<Tags> = [];
  allTag: Array<Tags> = [];
  filteredTags: Observable<Array<Tags>>;

  users: Array<User> = [];
  allUser: Array<User> = [];
  filteredUsers: Observable<Array<User>> = of();

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

  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
  @ViewChild('personInput') personInput: ElementRef<HTMLInputElement>;
  @ViewChild('tagInput') tagInput: ElementRef<HTMLInputElement>;

  detailForm: FormGroup;
  organizationForms: FormGroup;
  organizationPersonsForms: FormGroup;
  phoneForms: FormGroup;
  emailForms: FormGroup;
  followerForms: FormGroup;
  addressForm: FormGroup;
  activityForm: FormGroup;

  countries: Array<Country> = [];
  leadTypes: Array<LeadType> = [];
  organizationsAndJobs = [];

  contactType = [];
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
    this.allPerson = await this.lmsService.getPersons();
    this.allUser = await this.lmsService.getUsers();
    this.allFollowers = await this.lmsService.getPersons();
    this.allOrganizationPeoples = await this.lmsService.getPersons();
    this.countries = await this.lmsService.getCountry();
    this.leadTypes = await this.lmsService.getLeadTypes();
    this.contactType = await this.lmsService.getTypes();
    this.organizationsAndJobs = await this.lmsService.getOrganizations();

    this.initForm();
    this.filterActivity();

    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => (fruit ? this._filterFruit(fruit) : this.allFruits.slice())),
    );
    this.filteredPersons = this.personCtrl.valueChanges.pipe(
      startWith(null),
      map((person: string | null) => (person ? this._filterPerson(person) : this.allPerson.slice())),
    );
    this.filteredTags = this.tagCtrl.valueChanges.pipe(
      startWith(null),
      map((tag) => (tag ? this._filterTag(tag) : this.allTag.slice())),
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
    this.activityForm = this.fb.group({
      activity: ['call', Validators.required],
      title: ['', Validators.required],
      description: [''],
      startDate: [dateNow, Validators.required],
      startTime: [timeNow, Validators.required],
      endDate: [dateNow, Validators.required],
      endTime: [timeTo, Validators.required],
      participants: [''],
      collaborators: [''],
      isDone: [false]
    })

    if (this.leadProfileData.tags.length > 0) {
      for (const tag of this.leadProfileData.tags) {
        this.tags.push(tag);
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

  addFruit(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value && this.allFruits.includes(value)) {
      this.fruits.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.fruitCtrl.setValue(null);
  }

  removeFruit(fruit: string): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  selectedFruit(event: MatAutocompleteSelectedEvent): void {
    this.fruits.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }

  selectedFollower(event: MatAutocompleteSelectedEvent, index: number) {

  }

  addPerson(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.persons.push(value);
    }

    event.chipInput!.clear();

    this.personCtrl.setValue(null);
  }

  removePerson(fruit: string): void {
    const index = this.persons.indexOf(fruit);

    if (index >= 0) {
      this.persons.splice(index, 1);
    }
  }

  selectedPerson(event: MatAutocompleteSelectedEvent): void {
    this.persons.push(event.option.viewValue);
    this.personInput.nativeElement.value = '';
    this.personCtrl.setValue(null);
  }

  removeTag(id): void {
    const index = this.tags.findIndex(tag => tag.id == id);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  selectedTag(event: MatAutocompleteSelectedEvent): void {
    const tag: Tags = event.option.value;

    this.tags.push(tag);
    this.tagInput.nativeElement.value = '';
    this.tagCtrl.setValue(null);
  }

  // addCollaborator(event: MatChipInputEvent): void {
  //   const value = (event.value || '').trim();
  //   if (value) {
  //     this.users.push(value);
  //   }

  //   event.chipInput!.clear();

  //   this.tagCtrl.setValue(null);
  // }

  // removeCollaborator(fruit: string): void {
  //   const index = this.tags.indexOf(fruit);

  //   if (index >= 0) {
  //     this.users.splice(index, 1);
  //   }
  // }

  // selectedCollaborator(event: MatAutocompleteSelectedEvent): void {
  //   this.users.push(event.option.viewValue);
  //   this.tagInput.nativeElement.value = '';
  //   this.tagCtrl.setValue(null);
  // }

  private _filterFruit(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allFruits.filter(fruit => fruit.toLowerCase().includes(filterValue));
  }

  private _filterPerson(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allPerson.filter(person => person.toLowerCase().includes(filterValue));
  }

  private _filterTag(value): Array<Tags> {
    const filterValue = value.name ? value.name.toLowerCase() : value.toLowerCase();

    return this.allTag.filter(tag => tag.name.toLowerCase().includes(filterValue));
  }

  // private _filterCollaborator(value: string): string[] {
  //   const filterValue = value.toLowerCase();

  //   return this.allUser.filter(user => user.toLowerCase().includes(filterValue));
  // }

  private _filterFollower(value): Array<People> {
    const filterValue = value;

    return this.allFollowers.filter(follower => follower.name.toLowerCase().includes(filterValue));
  }

  private _filterOrganizationPersons(value): Array<People> {
    const filterValue = value;

    return this.allOrganizationPeoples.filter(person => person.name.toLowerCase().includes(filterValue));
  }

  private getProfileType() {
    if (this.router.url.includes('organization'))
      return 'organization';
    if (this.router.url.includes('people'))
      return 'people';
    if (this.router.url.includes('deal'))
      return 'deal';
  }

  getInitial(name) {
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

    console.log('taksOpen: ', this.tasksOpen);

  }

  openDealsModal(content) {
    this.modalService.open(content, { scrollable: true })
  }

  getNumber(ev) {
    console.log('number ev: ', ev);
  }

  hasError(ev) {
    console.warn('tel error: ', ev);
  }

  onCountryChange(ev) {
    console.log('on country change: ', ev);
  }

  telInputObject(ev) {
    console.log('ev: ', ev);
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

interface User {
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

interface People {
  id: number;
  name: string;
  organizations: Array<Organization>;
}

interface Pivot {
  personId: number;
  organizationId: number;
  jobTitle: string;
}

interface Organization {
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