import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UpdateDetailsRequest } from '../../interfaces/update-details-request.interface';
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

  detailForm: FormGroup = this.fb.group({
    name: ["", Validators.required],
    leadGroup: ["", Validators.required],
    owner: ["", Validators.required]
  });

  leadTypes;
  allUser;

  submitClicked: boolean = false;

  constructor(
    private fb: FormBuilder,
    private leadService: LeadService
  ) { }

  async ngOnInit() {
    this.leadTypes = await this.leadService.getContactTypesList().toPromise();
    this.allUser = await this.leadService.getUsersListing().toPromise();
    this.populateForm();

    this.isLoading = false;
  }

  onCancel() {
    this.populateForm();
    this.submitClicked = false;
    this.isEditDetails = false;
  }

  onSaveDetails() {
    const formValid = this.detailForm.valid;
    this.submitClicked = true;

    if (!formValid) {
      return;
    }

    this.isLoading = true;
    this.isEditDetails = false;
    const formValue = this.detailForm.getRawValue();
    const payload: UpdateDetailsRequest = {
      contactTypesId: Number(formValue.leadGroup),
      name: formValue.name,
      ownerId: formValue.owner
    };

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

  private populateForm() {
    this.detailForm.patchValue({
      name: this.leadProfileData.name,
      leadGroup: this.leadProfileData.contactTypes.id,
      owner: this.leadProfileData.owner.id
    });
  }

}
