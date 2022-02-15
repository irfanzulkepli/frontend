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

  isEditDetails: boolean = false;
  isEditOrganization: boolean = false;
  isEditContact: boolean = false;
  isEditAddress: boolean = false;
  isEditCustomField: boolean = false;
  isEditFollower: boolean = false;

  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
  @ViewChild('personInput') personInput: ElementRef<HTMLInputElement>;
  @ViewChild('tagInput') tagInput: ElementRef<HTMLInputElement>;

  organizationForms: FormGroup;
  contactForms: FormGroup;
  followerForms: FormGroup;
  addressForm: FormGroup;

  countries: any[] = [];

  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal,
    private lmsService: LMSService
  ) {
  }

  async ngOnInit() {
    this.allTag = await this.lmsService.getTags();
    this.allPerson = await this.lmsService.getPersons();
    this.allUser = await this.lmsService.getUsers();
    this.countries = await this.lmsService.getCountry();

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
      map((tag) => (tag ? this._filterTag(tag.name) : this.allTag.slice())),
    );

    this.initForm();
  }

  initForm() {
    this.organizationForms = this.fb.group({
      organizations: this.fb.array([])
    });
    this.contactForms = this.fb.group({
      contacts: this.fb.array([])
    });
    this.followerForms = this.fb.group({
      followers: this.fb.array([])
    });
    this.addressForm = this.fb.group({
      country: ['133'],
      area: [''],
      city: [''],
      state: [''],
      zipcode: [''],
      address: ['']
    });
  }

  onSaveAddress() {
    console.log('addressForm: ', this.addressForm.getRawValue());
    this.isEditAddress = !this.isEditAddress;
  }

  onCancelAddress() {
    this.addressForm.reset({
      country: '133'
    });
    this.isEditAddress = !this.isEditAddress;
  }

  addOrganization() {
    const organizationForm = this.fb.group({
      organzationName: ['', Validators.required],
      jobTitle: ['']
    });

    this.organizations.push(organizationForm);
  }

  deleteOrganization(index: number) {
    this.organizations.removeAt(index);
  }

  addContact() {
    const contactForm = this.fb.group({
      contactNumber: ['', Validators.required],
      contactType: ['']
    });

    this.contacts.push(contactForm);
  }

  deleteContact(index: number) {
    this.contacts.removeAt(index);
  }

  addFollower() {
    const followerForm = this.fb.group({
      id: ['', Validators.required],
    });

    this.followers.push(followerForm);
  }

  deleteFollower(index: number) {
    this.followers.removeAt(index);
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
    const value = (event.value || '').trim();
    if (value) {
      this.tags.push(value);
    }

    event.chipInput!.clear();

    this.tagCtrl.setValue(null);
  }

  removeTag(id): void {
    const index = this.tags.findIndex(tag => tag.id == id);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  selectedTag(event: MatAutocompleteSelectedEvent): void {
    this.tags.push(event.option.viewValue);
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

  private _filterTag(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allFruits.filter(tag => tag.toLowerCase().includes(filterValue));
  }

  private _filterCollaborator(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allUser.filter(user => user.toLowerCase().includes(filterValue));
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

  get organizations() {
    return this.organizationForms.controls.organizations as FormArray;
  }

  get contacts() {
    return this.contactForms.controls.contacts as FormArray;
  }

  get followers() {
    return this.followerForms.controls.followers as FormArray;
  }
}

export interface Fruit {
  name: string;
}