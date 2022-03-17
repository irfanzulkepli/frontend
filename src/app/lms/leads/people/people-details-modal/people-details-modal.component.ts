import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { map, startWith } from 'rxjs/operators';
import { PeopleRequest } from '../../interfaces/people-request.interface';
import { ContactRequestModel } from '../../interfaces/update-contact-request.interface';
import { PersonOrganizationRequest } from '../../interfaces/update-person-organization-request.interface';
import { LeadService } from '../../lead.service';
import { OrganizationDetailsModalComponent } from '../../organization/organization-details-modal/organization-details-modal.component';

@Component({
  selector: 'app-people-details-modal',
  templateUrl: './people-details-modal.component.html',
  styleUrls: ['./people-details-modal.component.scss']
})
export class PeopleDetailsModalComponent implements OnInit {

  @Input() isEdit = false;
  @Input() peopleData;

  countryName = new FormControl();

  allOrganizations;
  filteredOrganizations = [];

  submitClicked: boolean = false;
  isLoading: boolean = true;
  addAddress: boolean = false;

  countries;
  filteredCountries;

  leadTypes;
  contactTypes;
  users;

  peopleForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    leadGroup: ['', Validators.required],
    owner: ['', Validators.required],
    organizations: this.fb.array([]),
    phones: this.fb.array([]),
    emails: this.fb.array([]),
    country: [],
    address: [],
    area: [],
    city: [],
    state: [],
    zipCode: []
  });

  constructor(
    private fb: FormBuilder,
    public activeModal: NgbActiveModal,
    private leadService: LeadService,
    private modalService: NgbModal
  ) { }

  async ngOnInit() {
    this.contactTypes = await this.leadService.getPhoneEmailTypesListing().toPromise();
    this.countries = await this.leadService.getCountriesListing().toPromise();
    this.leadTypes = await this.leadService.getContactTypesList().toPromise();
    this.users = await this.leadService.getUsersListing().toPromise();
    this.allOrganizations = await this.leadService.getOrganizationsListing().toPromise();

    this.initForm();
    this.organizations.valueChanges.subscribe(() => {
      this.hasDuplicate('organization');
    });
    this.isLoading = false;
  }

  private initForm() {
    this.peopleForm.patchValue({
      owner: this.users[0].id
    });

    if (this.isEdit) {
      this.populateForms();
    }
    else {
      this.addOrganization();
      this.addEmail();
      this.addPhone();
    }

    this.filteredCountries = this.countryName.valueChanges.pipe(
      startWith(null),
      map((value) => value ? this._filterCountries(value) : this.countries.slice()));
  }

  createOrganization() {
    const modalRef = this.modalService.open(OrganizationDetailsModalComponent, { scrollable: true, centered: true, size: 'lg' });

    modalRef.result.then(async (confirmation) => {
      if (confirmation) {
        this.isLoading = true;
        this.allOrganizations = await this.leadService.getOrganizationsListing().toPromise();
        this.isLoading = false;
      }
    });
  }

  onCountryChange(ev) {
    console.log('on country change: ', ev);
  }

  addPhone() {
    const contactForm = this.fb.group({
      contactNumber: [''],
      contactType: ['']
    });

    this.phones.push(contactForm);
  }

  deletePhone(index: number) {
    this.phones.removeAt(index);
  }

  addEmail() {
    const contactForm = this.fb.group({
      email: [''],
      emailType: ['']
    });

    this.emails.push(contactForm);
  }

  deleteEmail(index: number) {
    this.emails.removeAt(index);
  }

  addOrganization() {
    const organizationForm = this.fb.group({
      organization: [''],
      name: [''],
      jobTitle: ['']
    });

    this.organizations.push(organizationForm);
    this.manageOrganizationFilter(this.organizations.controls.length - 1);
  }

  deleteOrganization(index: number) {
    this.organizations.removeAt(index);
  }

  manageOrganizationFilter(index: number) {
    this.filteredOrganizations[index] = {};
    this.filteredOrganizations[index] = this.organizations.at(index).get('name').valueChanges
      .pipe(
        startWith(null),
        map((value) => (value ? this._filterOrganizations(value) : this.allOrganizations.slice())));
  }

  onSaveClick() {
    const formValid = this.peopleForm.valid;
    this.submitClicked = true;

    if (!formValid) {
      return;
    }

    this.isLoading = true;

    const payload = this.massageRequest();
    console.log('payload: ', payload);

    if (this.isEdit) {
      this.leadService.updatePeople(payload, this.peopleData.id).subscribe({
        next: (n) => {
          this.activeModal.close(true);
        }
      });
    }
    else {
      this.leadService.addPeople(payload).subscribe({
        next: (n) => {
          this.activeModal.close(true);
        }
      });
    }

  }

  get organizations() {
    return this.peopleForm.controls.organizations as FormArray;
  }

  get phones() {
    return this.peopleForm.controls.phones as FormArray;
  }

  get emails() {
    return this.peopleForm.controls.emails as FormArray;
  }

  hasAddressDetails(): boolean {
    return (this.peopleData.address || this.peopleData.area || this.peopleData.city || this.peopleData.zipCode || this.peopleData.state || this.peopleData.countries)
  }

  public invalidChecking(formGroup: FormGroup, field: string): boolean {
    if ((this.submitClicked && formGroup.get(field).getError('required') && formGroup.touched)
      || (this.submitClicked && formGroup.get(field).getError('duplicated') && formGroup.touched)) {
      return true;
    }
    else {
      return false;
    }
  }

  hasDuplicate(keyForm) {
    let dict = {};
    let duplicates = [];

    for (const organization of this.organizations.controls) {
      organization.get(keyForm).setErrors(null);
    }

    this.organizations.value.forEach((item, index) => {
      dict[item.organization] = dict[item.organization] || [];
      dict[item.organization].push(index);
    });

    for (var key in dict) {
      if (dict[key].length > 1) duplicates = duplicates.concat(dict[key]);
    }

    for (const index of duplicates) {
      this.organizations.at(index).get(keyForm).setErrors({ duplicated: true });
    }
  }

  private _filterOrganizations(value: string) {
    const filterValue = value.toLowerCase();

    return this.allOrganizations.filter(organization => organization.name.toLowerCase().includes(filterValue));
  }

  private _filterCountries(value: string) {
    const filterValue = value.toLowerCase();

    return this.countries.filter(country => country.name.toLowerCase().includes(filterValue));
  }

  private massageRequest() {
    const formValue = this.peopleForm.getRawValue();

    const personOrganizations: Array<PersonOrganizationRequest> = [];
    for (const organization of this.organizations.value) {
      if (organization.organization) {
        personOrganizations.push({
          id: organization.organization,
          jobTitle: organization.jobTitle
        });
      }
    }

    const emails: Array<ContactRequestModel> = [];
    for (const email of this.emails.value) {
      if (email.email) {
        emails.push({
          value: email.email,
          contextableType: 'person',
          typeId: email.emailType ? email.emailType : ''
        });
      }
    }

    const phones: Array<ContactRequestModel> = [];
    for (const phone of this.phones.value) {
      if (phone.contactNumber) {
        phones.push({
          value: phone.contactNumber,
          contextableType: 'person',
          typeId: phone.contactType ? phone.contactType : ''
        });
      }
    }

    const payload: PeopleRequest = {
      address: formValue.address,
      area: formValue.area,
      city: formValue.city,
      contactTypesId: formValue.leadGroup,
      countryId: formValue.country,
      createdBy: 43,
      name: formValue.name,
      ownerId: formValue.owner,
      state: formValue.state,
      zipCode: formValue.zipCode,
      personOrganizationRequests: personOrganizations,
      emails: emails,
      phones: phones
    };

    return payload;
  }

  private populateForms() {
    this.organizations.clear();
    this.phones.clear();
    this.emails.clear();

    if (this.hasAddressDetails())
      this.addAddress = true;

    this.peopleForm.patchValue({
      name: this.peopleData.name,
      leadGroup: this.peopleData.contactTypes.id,
      owner: this.peopleData.owner.id,
      country: this.peopleData.country ? this.peopleData.country.id : '',
      address: this.peopleData.address,
      area: this.peopleData.area,
      city: this.peopleData.city,
      state: this.peopleData.state,
      zipCode: this.peopleData.zipCode
    });

    if (this.peopleData.organizations.length <= 0)
      this.addOrganization();

    if (this.peopleData.emails.length <= 0)
      this.addEmail();

    if (this.peopleData.phones.length <= 0)
      this.addPhone();

    for (const organization of this.peopleData.organizations) {
      const organizationForm = this.fb.group({
        organization: [organization.id],
        name: [''],
        jobTitle: [organization.jobTitle]
      });

      this.organizations.push(organizationForm);
      this.manageOrganizationFilter(this.organizations.controls.length - 1);
    }

    for (const email of this.peopleData.emails) {
      const contactForm = this.fb.group({
        email: [email.value],
        emailType: [email.type ? email.type.id : '']
      });

      this.emails.push(contactForm);
    }

    for (const phone of this.peopleData.phones) {
      const contactForm = this.fb.group({
        contactNumber: [phone.value],
        contactType: [phone.type ? phone.type.id : '']
      });

      this.phones.push(contactForm);
    }
  }
}

