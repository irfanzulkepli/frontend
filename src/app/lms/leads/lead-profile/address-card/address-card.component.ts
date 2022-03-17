import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UpdateAddressRequest } from '../../interfaces/update-address-request.interface';
import { LeadService } from '../../lead.service';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.scss']
})
export class AddressCardComponent implements OnInit {

  @Input() leadProfileData;
  @Input() profileType: string;
  @Input() isLoading: boolean = true;
  isEditAddress: boolean = false;

  countryName = new FormControl();
  countries;
  filteredCountries;

  addressForm: FormGroup = this.fb.group({
    country: [],
    area: [],
    city: [],
    state: [],
    zipcode: [],
    address: []
  });

  constructor(
    private fb: FormBuilder,
    private leadService: LeadService
  ) { }

  ngOnInit() {
    this.leadService.getCountriesListing().subscribe({
      next: (n) => {
        this.countries = n;
        this.populateForm();
        this.filteredCountries = this.countryName.valueChanges.pipe(
          startWith(null),
          map((value) => value ? this._filterCountries(value) : this.countries.slice()));
        this.isLoading = false;
      }
    });
  }

  onSaveAddress() {
    this.isLoading = true;
    this.isEditAddress = false;
    const formValue = this.addressForm.getRawValue();
    const payload: UpdateAddressRequest = {
      address: formValue.address,
      area: formValue.area,
      city: formValue.city,
      countryId: formValue.country,
      state: formValue.state,
      zipCode: formValue.zipCode
    };

    this.leadService.updateAddress(payload, this.leadProfileData.id, this.profileType).subscribe({
      next: (n) => {
        this.leadProfileData = n;
        this.populateForm();
        this.isLoading = false;
      }
    });
  }


  onCancelAddress() {
    this.populateForm();
    this.isEditAddress = !this.isEditAddress;
  }

  get hasAddressDetails(): boolean {
    return (this.leadProfileData.address || this.leadProfileData.area || this.leadProfileData.city || this.leadProfileData.zipCode || this.leadProfileData.state || this.leadProfileData.countries)
  }

  private populateForm() {
    this.addressForm.patchValue({
      country: this.leadProfileData.countries ? this.leadProfileData.countries.id : '',
      area: this.leadProfileData.area,
      city: this.leadProfileData.city,
      state: this.leadProfileData.state,
      zipcode: this.leadProfileData.zipCode,
      address: this.leadProfileData.address
    });
  }


  private _filterCountries(value: string) {
    const filterValue = value.toLowerCase();

    return this.countries.filter(country => country.name.toLowerCase().includes(filterValue));
  }

}
