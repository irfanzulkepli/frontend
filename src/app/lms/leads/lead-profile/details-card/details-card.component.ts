import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { CommonService } from 'src/app/lms/common/common.service';
import { Person } from 'src/app/lms/data/person-data';
import { LEADTYPE } from 'src/app/lms/enum/lms-type.enum';
import { LMSService } from 'src/app/lms/lms-service';
import { LeadService } from '../../lead.service';

@Component({
  selector: 'app-details-card',
  templateUrl: './details-card.component.html',
  styleUrls: ['./details-card.component.scss']
})
export class DetailsCardComponent implements OnInit {

  @Input() leadProfileData;
  @Input() profileType: string;
  @Output() onDetailsUpdate = new EventEmitter();

  isEditDetails: boolean = false;
  isLoading: boolean = true;
  isDeal: boolean;

  detailForm: FormGroup = this.fb.group({
    name: ["", Validators.required],
    leadGroup: ["", Validators.required],
    owner: ["", Validators.required]
  });

  dealDetailForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    description: [''],
    status: ['', Validators.required],
    value: [''],
    expiredAt: [''],
    contextableType: [LEADTYPE.PERSON],
    contextableId: ['', Validators.required],
    ownerId: ['', Validators.required]
  });

  leadTypes;
  allUser;
  persons = [];
  public dealLeadTypes: string[] = [LEADTYPE.PERSON, LEADTYPE.ORGANIZATION];

  public filteredOrganizations;
  public filteredPerson: Observable<Array<Person>>;

  personFilterCtrl = new FormControl();
  organizationFilterCtrl = new FormControl();

  submitClicked: boolean = false;

  constructor(
    private fb: FormBuilder,
    private leadService: LeadService,
    public commonService: CommonService,
    private lmsService: LMSService,

  ) { }

  async ngOnInit() {
    this.isDeal = this.profileType == "deals";
    this.leadTypes = await this.leadService.getContactTypesList().toPromise();
    this.allUser = await this.leadService.getUsersListing().toPromise();
    this.getPersonList();
    this.getOrganizationList();
    this.populateForm();

    this.dealDetailForm.get('contextableType').valueChanges.subscribe((value) => {
      if (value == LEADTYPE.ORGANIZATION) {
        this.dealDetailForm.get('contextableId').clearValidators();
        this.dealDetailForm.get('contextableId').setValidators(Validators.required);
        this.dealDetailForm.get('contextableId').valueChanges.subscribe(async (value) => {
          this.persons = await this.leadService.getPersonsByOrganizationId(value).toPromise();
        });
      }
      else {
        this.dealDetailForm.get('contextableId').clearValidators();
        this.dealDetailForm.get('contextableId').setValidators(Validators.required);
        this.dealDetailForm.get('contextableId').reset();
      }

      this.dealDetailForm.updateValueAndValidity();
    });

    this.isLoading = false;
  }

  onCancel() {
    this.populateForm();
    this.submitClicked = false;
    this.isEditDetails = false;
  }

  onSaveDetails() {
    let formValid;
    this.isDeal ? formValid = this.dealDetailForm.valid : formValid = this.detailForm.valid
    
    this.submitClicked = true;

    if (!formValid) {
      return;
    }

    this.isLoading = true;
    this.isEditDetails = false;
    let payload;
    if (this.isDeal) {
      const formValue = this.dealDetailForm.getRawValue();
      payload = {
        title: formValue.title,
        description: formValue.description,
        value: formValue.value,
        contextableType: formValue.contextableType,
        contextableId: formValue.contextableId,
        expiredAt: formValue.expiredAt,
        ownerId: formValue.ownerId
      };
    } else {
      const formValue = this.detailForm.getRawValue();
      payload = {
        contactTypesId: Number(formValue.leadGroup),
        name: formValue.name,
        ownerId: formValue.owner
      };
    }


    this.leadService.updateDetails(payload, this.leadProfileData.id, this.profileType).subscribe({
      next: (n) => {
        this.onDetailsUpdate.emit(true);
        this.leadProfileData = n;
        this.populateForm();
        this.isLoading = false;
      }
    });
  }

  getInitials2(firstName: string, lastName: string) {
    return firstName.split(' ').shift().charAt(0).toUpperCase() + lastName.split(' ').pop().charAt(0).toUpperCase();
  }

  getStatus(status: string) {
    switch (status) {
      case 'status_done': {
        return 'Done';
      }
      case 'status_open': {
        return 'Open';
      }
    }
  }

  getPersonList() {
    this.lmsService.getPersonList().subscribe({
      next: (n) => {
        this.filteredPerson = this.personFilterCtrl.valueChanges.pipe(
          startWith(null),
          map((value: string) => (value ? this.commonService.filter(value, n, "name") : n))
        );

      },
      error: (e) => { },
      complete: () => { }
    })
  }

  getOrganizationList() {
    this.leadService.getOrganizationsListing().subscribe({
      next: (n) => {
        this.filteredOrganizations = this.organizationFilterCtrl.valueChanges.pipe(
          startWith(null),
          map((value: string) => value ? this.commonService.filter(value, n, "name") : n)
        );
      }
    });
  }

  private populateForm() {
    if (!this.isDeal) {
      this.detailForm.patchValue({
        name: this.leadProfileData.name,
        leadGroup: this.leadProfileData.contactTypes.id,
        owner: this.leadProfileData.owner.id
      });
    } else {
      this.dealDetailForm.patchValue({
        title: this.leadProfileData.title,
        description: this.leadProfileData.description,
        status: this.getStatus(this.leadProfileData.statuses.name),
        value: this.leadProfileData.value,
        expiredAt: this.leadProfileData.expiredAt,
        contextableType: this.leadProfileData.contextableType,
        contextableId: this.leadProfileData.contextableId,
        ownerId: this.leadProfileData.owner.id
      });
    }

  }

}
