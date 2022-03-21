import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LEADTYPE } from 'src/app/lms/enum/lms-type.enum';
import { ContactRequestModel, UpdateContactRequest } from '../../interfaces/update-contact-request.interface';
import { LeadService } from '../../lead.service';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements OnInit {

  @Input() leadProfileData;
  @Input() profileType: string;
  @Output() onContactEmit = new EventEmitter();

  isEditContact: boolean = false;
  submitClicked: boolean = false;
  isLoading: boolean = true;

  contactTypes;

  phoneForms: FormGroup = this.fb.group({
    phones: this.fb.array([])
  });
  emailForms: FormGroup = this.fb.group({
    emails: this.fb.array([])
  });

  constructor(
    private fb: FormBuilder,
    private leadService: LeadService
  ) { }

  async ngOnInit() {
    this.contactTypes = await this.leadService.getPhoneEmailTypesListing().toPromise();
    this.populateForm();
    this.isLoading = false;
  }

  onCountryChange(ev) {
    console.log('on country change: ', ev);
  }

  onCancel() {
    this.populateForm();
    this.submitClicked = false;
    this.isEditContact = false;
  }

  onSaveClick() {
    this.phones.markAllAsTouched();
    this.emails.markAllAsTouched();
    this.submitClicked = true;

    const phonesValid = this.phones.valid;
    const emailsValid = this.emails.valid;

    if (!phonesValid || !emailsValid) {
      return;
    }

    this.isLoading = true;

    const emails: Array<ContactRequestModel> = [];
    for (const email of this.emails.value) {
      emails.push({
        value: email.email,
        typeId: email.emailType,
        contextableType: LEADTYPE.PERSON
      });
    }

    const phones: Array<ContactRequestModel> = [];
    for (const phone of this.phones.value) {
      phones.push({
        value: phone.contactNumber,
        typeId: phone.contactType,
        contextableType: LEADTYPE.PERSON
      });
    }

    const payload: UpdateContactRequest = {
      emails: emails,
      phones: phones
    }

    this.leadService.updatePeopleContact(payload, this.leadProfileData.id).subscribe({
      next: async (n) => {
        this.leadProfileData = await this.leadService.getDetailsById(this.leadProfileData.id, this.profileType).toPromise();
        this.populateForm();
        this.onContactEmit.emit(true);
        this.isLoading = false;
      }
    });

    this.submitClicked = false;
    this.isEditContact = false;
  }

  addPhone() {
    const contactForm = this.fb.group({
      contactNumber: ['', Validators.compose([Validators.required])],
      contactType: ['']
    });

    this.phones.push(contactForm);
  }

  deletePhone(index: number) {
    this.phones.removeAt(index);
  }

  addEmail() {
    const contactForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      emailType: ['']
    });

    this.emails.push(contactForm);
  }

  deleteEmail(index: number) {
    this.emails.removeAt(index);
  }

  get phones() {
    return this.phoneForms.controls.phones as FormArray;
  }

  get emails() {
    return this.emailForms.controls.emails as FormArray;
  }

  private populateForm() {
    this.emails.clear();
    this.phones.clear();

    for (const email of this.leadProfileData.emails) {
      const contactForm = this.fb.group({
        email: [email.value, Validators.required],
        emailType: [email.type ? email.type.id : '']
      });

      this.emails.push(contactForm);
    }

    for (const phone of this.leadProfileData.phones) {
      const contactForm = this.fb.group({
        contactNumber: [phone.value, Validators.required],
        contactType: [phone.type ? phone.type.id : '']
      });

      this.phones.push(contactForm);
    }
  }
}
