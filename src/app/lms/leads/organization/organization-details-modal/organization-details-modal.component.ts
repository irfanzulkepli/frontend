import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { map, startWith } from 'rxjs/operators';
import { OrganizationRequest } from '../../interfaces/organization-request.interface';
import { LeadService } from '../../lead.service';

@Component({
  selector: 'app-organization-details-modal',
  templateUrl: './organization-details-modal.component.html',
  styleUrls: ['./organization-details-modal.component.scss']
})
export class OrganizationDetailsModalComponent implements OnInit {

  @Input() isEdit = false;
  @Input() organizationData;

  submitClicked: boolean = false;
  isLoading: boolean = true;
  addAddress: boolean = false;

  countryName = new FormControl();
  countries;
  filteredCountries;

  users;
  leadTypes;

  organizationForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    leadGroup: ['', Validators.required],
    owner: ['', Validators.required],
    country: [],
    address: [],
    area: [],
    city: [],
    state: [],
    zipCode: []
  });

  constructor(
    private leadService: LeadService,
    private fb: FormBuilder,
    public activeModal: NgbActiveModal
  ) { }

  async ngOnInit() {
    this.users = await this.leadService.getUsersListing().toPromise();
    this.countries = await this.leadService.getCountriesListing().toPromise();
    this.leadTypes = await this.leadService.getContactTypesList().toPromise();

    if (this.isEdit)
      this.populateForm();
    else
      this.initForm();


    this.filteredCountries = this.countryName.valueChanges.pipe(
      startWith(null),
      map((value) => value ? this._filterCountries(value) : this.countries.slice()));
    this.isLoading = false;
  }

  initForm() {
    this.organizationForm.patchValue({
      owner: this.users[0].id
    });

  }

  onSaveClick() {
    const formValid = this.organizationForm.valid;

    if (!formValid) {
      return;
    }

    this.isLoading = true;

    const formValue = this.organizationForm.getRawValue();

    const payload: OrganizationRequest = {
      address: formValue.address,
      area: formValue.area,
      city: formValue.city,
      contactTypesId: formValue.leadGroup,
      countryId: formValue.country,
      createdById: 43,
      name: formValue.name,
      ownerId: formValue.owner,
      state: formValue.state,
      zipCode: formValue.zipCode
    }

    if (this.isEdit) {
      this.leadService.updateOrganization(payload, this.organizationData.id).subscribe({
        next: (n) => {
          this.activeModal.close(true);
        }
      });
    }
    else {
      this.leadService.addOrganization(payload).subscribe({
        next: (n) => {
          this.activeModal.close(true);
        }
      });
    }

  }

  hasAddressDetails(): boolean {
    return (this.organizationData.address || this.organizationData.area || this.organizationData.city || this.organizationData.zipCode || this.organizationData.state || this.organizationData.countries)
  }

  private _filterCountries(value: string) {
    const filterValue = value.toLowerCase();

    return this.countries.filter(country => country.name.toLowerCase().includes(filterValue));
  }

  private populateForm() {
    if (this.hasAddressDetails)
      this.addAddress = true;

    this.organizationForm.patchValue({
      name: this.organizationData.name,
      owner: this.organizationData.owner.id,
      leadGroup: this.organizationData.contactTypes.id,
      address: this.organizationData.address,
      area: this.organizationData.area,
      city: this.organizationData.city,
      state: this.organizationData.state,
      zipCode: this.organizationData.zipCode
    })
  }
}
