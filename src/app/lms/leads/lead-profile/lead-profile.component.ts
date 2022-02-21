import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { map, startWith } from 'rxjs/operators';
import { FormControl, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LMSService } from '../../lms-service';
import { PEOPLE } from '../../data/people-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lead-profile',
  templateUrl: './lead-profile.component.html',
  styleUrls: ['./lead-profile.component.scss']
})
export class LeadProfileComponent implements OnInit {

  public Editor = ClassicEditor;

  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl();
  personCtrl = new FormControl();
  tagCtrl = new FormControl();

  allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];
  filteredFruits: Observable<string[]>;
  fruits: string[] = ['Lemon'];

  persons: any[] = [];
  allPerson = [];
  filteredPersons: Observable<string[]>;

  tags: any[] = [];
  allTag = [];
  filteredTags: Observable<any[]>;

  users: any[] = [];
  allUser = [];
  filteredUsers: Observable<any[]>;

  followerList;
  allFollowers;
  filteredFollowers = [];

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
  phoneForms: FormGroup;
  emailForms: FormGroup;
  followerForms: FormGroup;
  addressForm: FormGroup;
  activityForm: FormGroup;

  countries: any[] = [];
  leadTypes = [];
  organizationsAndJobs = [];

  contactType = [];
  public leadProfileData = PEOPLE;

  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal,
    private lmsService: LMSService,
    private router: Router
  ) {
  }

  async ngOnInit() {
    this.allTag = await this.lmsService.getTags();
    this.allPerson = await this.lmsService.getPersons();
    this.allUser = await this.lmsService.getUsers();
    this.allFollowers = await this.lmsService.getPersons();
    this.countries = await this.lmsService.getCountry();
    this.leadTypes = await this.lmsService.getLeadTypes();
    this.contactType = await this.lmsService.getTypes();
    this.organizationsAndJobs = await this.lmsService.getOrganizations();

    this.initForm();

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
    this.detailForm = this.fb.group({
      name: [this.leadProfileData.name, Validators.required],
      leadGroup: [this.leadProfileData.contactType.id, Validators.required],
      owner: [this.leadProfileData.owner.id, Validators.required]
    });
    this.organizationForms = this.fb.group({
      organizations: this.fb.array([])
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
      startDate: ['2022-02-09'],
      startTime: ['00:00'],
      endDate: ['2022-02-09'],
      endTime: ['00:00'],
      participants: [''],
      collaborators: [''],
      isDone: [false]
    })

    if (this.leadProfileData.tags.length > 0) {
      for (const tag of this.leadProfileData.tags) {
        this.tags.push(tag);
      }
    }

    if (this.leadProfileData.email.length > 0) {
      for (const email of this.leadProfileData.email) {
        const emailForm = this.fb.group({
          email: [email.value],
          emailType: [email.type.id]
        });

        this.emails.push(emailForm);
      }
    }

    if (this.leadProfileData.phone.length > 0) {
      for (const phone of this.leadProfileData.phone) {
        const phoneForm = this.fb.group({
          contactNumber: [phone.value],
          contactType: [phone.type.id]
        });

        this.phones.push(phoneForm);
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

  addTag(event: MatChipInputEvent): void {
    console.log('addTag event: ', event);

    const value = (event.value || '').trim();
    if (value) {
      this.tags.push(value);
    }

    event.chipInput!.clear();

    this.tagCtrl.setValue(null);
    console.log('tags: ', this.tags);

  }

  removeTag(id): void {
    const index = this.tags.findIndex(tag => tag.id == id);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  selectedTag(event: MatAutocompleteSelectedEvent): void {
    this.tags.push(event.option.value);
    this.tagInput.nativeElement.value = '';
    this.tagCtrl.setValue(null);
  }

  addCollaborator(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.users.push(value);
    }

    event.chipInput!.clear();

    this.tagCtrl.setValue(null);
  }

  removeCollaborator(fruit: string): void {
    const index = this.tags.indexOf(fruit);

    if (index >= 0) {
      this.users.splice(index, 1);
    }
  }

  selectedCollaborator(event: MatAutocompleteSelectedEvent): void {
    this.users.push(event.option.viewValue);
    this.tagInput.nativeElement.value = '';
    this.tagCtrl.setValue(null);
  }

  private _filterFruit(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allFruits.filter(fruit => fruit.toLowerCase().includes(filterValue));
  }

  private _filterPerson(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allPerson.filter(person => person.toLowerCase().includes(filterValue));
  }

  private _filterTag(value): string[] {
    const filterValue = value.name ? value.name.toLowerCase() : value.toLowerCase();

    return this.allTag.filter(tag => tag.name.toLowerCase().includes(filterValue));
  }

  private _filterCollaborator(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allUser.filter(user => user.toLowerCase().includes(filterValue));
  }

  private _filterFollower(value): string[] {
    console.log('value: ', value);

    const filterValue = value;

    return this.allFollowers.filter(follower => follower.name.toLowerCase().includes(filterValue));
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