import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map, startWith } from 'rxjs/operators';
import { UpdatePersonOrganizationRequest } from '../../interfaces/update-person-organization-request.interface';
import { LeadService } from '../../lead.service';

@Component({
  selector: 'app-person-organization-card',
  templateUrl: './person-organization-card.component.html',
  styleUrls: ['./person-organization-card.component.scss']
})
export class PersonOrganizationCardComponent implements OnInit {

  @Input() leadProfileData;
  @Input() profileType: string;
  @Output() onPersonOrganizationUpdate = new EventEmitter();

  isEditPersonOrganization: boolean = false;
  isLoading: boolean = true;
  submitClicked: boolean = false;

  allOrganizations;
  filteredOrganizations = [];

  allPeoples;
  filteredPeoples = [];

  organizationForms: FormGroup = this.fb.group({
    organizations: this.fb.array([])
  });
  peopleForms: FormGroup = this.fb.group({
    peoples: this.fb.array([])
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private leadService: LeadService
  ) { }

  async ngOnInit() {
    if (this.profileType == 'person') {
      this.allOrganizations = await this.leadService.getOrganizationsListing().toPromise();

      this.organizations.valueChanges.subscribe(() => {
        this.hasDuplicate('organization');
      });
    }


    if (this.profileType == 'organization') {
      this.allPeoples = await this.leadService.getOrganizationsListing().toPromise();

      this.peoples.valueChanges.subscribe(() => {
        this.hasDuplicate('people');
      });
    }

    this.populateForms();
    this.isLoading = false;
  }

  onCancel() {
    this.populateForms();
    this.submitClicked = false;
    this.isEditPersonOrganization = false;
  }

  onSavePersonOrganization() {
    this.submitClicked = true;
    this.peoples.markAllAsTouched();
    this.organizations.markAllAsTouched();

    const formValid = this.profileType == 'person' ? this.organizations.valid : this.peoples.valid;

    if (!formValid) {
      return;
    }

    this.isLoading = true;
    const personOrganizations: any = [];

    if (this.profileType == 'person') {
      for (const organization of this.organizations.value) {
        const requestBody = {
          jobTitle: organization.jobTitle,
          id: organization.organization
        };
        personOrganizations.push(requestBody);
      }
      const payload: UpdatePersonOrganizationRequest = {
        personOrganizations: personOrganizations
      };

      this.leadService.updatePeopleOrganizations(payload, this.leadProfileData.id, this.profileType).subscribe({
        next: async (n) => {
          this.leadProfileData = await this.leadService.getDetailsById(this.leadProfileData.id, this.profileType).toPromise();
          this.populateForms();
          this.onPersonOrganizationUpdate.emit(true);
          this.isLoading = false;
        }
      });
    }

    this.submitClicked = false;
    this.isEditPersonOrganization = false;
  }

  // Control for profileType organization
  addPeople() {
    const peopleForm = this.fb.group({
      people: ['', Validators.required],
      name: [''],
      jobTitle: ['']
    });

    this.peoples.push(peopleForm);
    this.managePeopleFilter(this.peoples.controls.length - 1);
  }

  managePeopleFilter(index: number) {
    this.filteredPeoples[index] = {};
    this.filteredPeoples[index] = this.peoples.at(index).get('name').valueChanges
      .pipe(
        startWith(null),
        map((value) => (value ? this._filterPeoples(value) : this.allPeoples.slice())));
  }

  deletePeople(index: number) {
    this.peoples.removeAt(index);
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

  redirect(id: number, type: string) {
    const leadType = type == 'person' ? 'people' : 'organization';
    this.router.navigate([`/lms/leads/${leadType}/${id}`]);
  }

  get peoples() {
    return this.peopleForms.controls.peoples as FormArray;
  }

  private _filterPeoples(value: string) {
    const filterValue = value.toLowerCase();

    return this.allPeoples.filter(people => people.name.toLowerCase().includes(filterValue));
  }

  // Control for profileType people
  addOrganization() {
    const organizationForm = this.fb.group({
      organization: ['', Validators.required],
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

  get organizations() {
    return this.organizationForms.controls.organizations as FormArray;
  }

  private _filterOrganizations(value: string) {
    const filterValue = value.toLowerCase();

    return this.allOrganizations.filter(organization => organization.name.toLowerCase().includes(filterValue));
  }

  private populateForms() {
    if (this.profileType == 'person') {
      this.organizations.clear();

      for (const organization of this.leadProfileData.organizations) {
        const organizationForm = this.fb.group({
          organization: [organization.id, Validators.required],
          name: [''],
          jobTitle: [organization.jobTitle]
        });

        this.organizations.push(organizationForm);
        this.manageOrganizationFilter(this.organizations.controls.length - 1);
      }
    }

    if (this.profileType == 'organization') {
      this.peoples.clear();

      for (const person of this.leadProfileData.persons) {
        const peopleForm = this.fb.group({
          people: [person.id, Validators.required],
          name: [''],
          jobTitle: [person.jobTitle]
        });

        this.peoples.push(peopleForm);
        this.managePeopleFilter(this.peoples.controls.length - 1);
      }
    }
  }

  hasDuplicate(keyForm) {
    let dict = {};
    let duplicates = [];

    if (this.profileType == 'person') {
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

    if (this.profileType == 'organization') {
      for (const people of this.peoples.controls) {
        people.get(keyForm).setErrors(null);
      }

      this.peoples.value.forEach((item, index) => {
        dict[item.people] = dict[item.people] || [];
        dict[item.people].push(index);
      });

      for (var key in dict) {
        if (dict[key].length > 1) duplicates = duplicates.concat(dict[key]);
      }

      for (const index of duplicates) {
        this.peoples.at(index).get(keyForm).setErrors({ duplicated: true });
      }
    }
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

}
