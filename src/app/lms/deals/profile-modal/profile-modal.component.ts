import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common'
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PERSON } from '../../data/person-data';
import { Observable } from 'rxjs';
import { LMSService } from '../../lms-service';
import { map, startWith } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { People } from '../../leads/lead-profile/lead-profile.component';

@Component({
  selector: 'app-profile-modal',
  templateUrl: './profile-modal.component.html',
  styleUrls: ['./profile-modal.component.scss'],
})
export class ProfileModalComponent implements OnInit {

  @Input() inputData;
  public personData = PERSON;
  stageTypes: string[] = ["Lead generation", "Lead nurturing", "Marketing qualified lead", "Sales accepted lead", "Sales qualified lead", "Closed deals", "Post-sale"];
  personControl = new FormControl([]);

  isEditStage: boolean = false;
  isEditDealValue: boolean = false;
  isEditLeadType: boolean = false;
  isEditExpectedClosingDate: boolean = false;
  isEditFollower: boolean = false;

  stageForm: FormGroup;
  dealValueForm: FormGroup;
  leadTypePersonForm: FormGroup;
  expectedClosingDateForm: FormGroup;
  followerForms: FormGroup;


  tagCtrl = new FormControl();
  tagChipCtrl = new FormControl([]);
  tags: Array<Tags> = [];
  allTag: Array<Tags> = [];
  filteredTags: Observable<Array<Tags>>;

  followerList: Array<People>;
  allFollowers: Array<People>;
  filteredFollowers = [];

  @ViewChild('tagInput') tagInput: ElementRef<HTMLInputElement>;

  constructor(
    public activeModal: NgbActiveModal, 
    private datepipe: DatePipe,
    private fb: FormBuilder,
    private lmsService: LMSService,
    ) { }

  ngOnInit() {
    this.initForm();
    this.allTag = this.lmsService.getTags();
    this.allFollowers =  this.lmsService.getPersons();

    this.filteredTags = this.tagCtrl.valueChanges.pipe(
      startWith(null),
      map((tag) => (tag ? this._filterTag(tag) : this.allTag.slice()))
    );
  }

  initForm() {
    console.log(this.inputData)
    this.stageForm = this.fb.group({
      stage: [this.stageTypes[this.inputData.stageId], Validators.required]
    });
    this.dealValueForm = this.fb.group({
      dealValue: [this.inputData.value, Validators.required]
    });
    this.leadTypePersonForm = this.fb.group({
      person: ['', Validators.required]
    });
    this.expectedClosingDateForm = this.fb.group({
      date: ['', Validators.required]
    });
    this.followerForms = this.fb.group({
      followers: this.fb.array([])
    });
  }

  onPersonRemoved(person: string) {
    const personArray = this.personControl.value as string[];
    this.removeFirst(personArray, person);
    this.personControl.setValue(personArray); // To trigger change detection
  }

  private removeFirst<T>(array: T[], toRemove: T): void {
    const index = array.indexOf(toRemove);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }

  getInitials(fullName: string) {
    const splitName = fullName.split(' ');
    let ownerInitials: string;
    if (splitName.length > 1) {
      ownerInitials = splitName[0].charAt(0) + splitName[1].charAt(0);
    } else {
      ownerInitials = splitName[0].charAt(0);
    }
    return ownerInitials.toUpperCase();
  }

  getStage(stageId: number) {
    return this.stageTypes[stageId-1]
  }

  getTimeLapsed() {
    let endTime = new Date();
    const dateCreated = this.datepipe.transform(this.inputData.createdAt, 'MM-dd-yyyy h:mm:ss a');
    let startTime = new Date(dateCreated)
    let timeLapsed = endTime.getTime() - startTime.getTime();
    let timediff = timeLapsed/1000;

    timediff = Math.floor(timediff / 60);
    let minutes = timediff % 60;
    let minutesAsString = minutes < 10 ? "0" + minutes : minutes;
    timediff = Math.floor(timediff / 60);
    let hours = timediff % 24;
    timediff = Math.floor(timediff / 24);
    let days = timediff;
    let totalHours = hours + (days * 24); // add days to hours
    let totalHoursAsString = totalHours < 10 ? "0" + totalHours : totalHours;

    if (totalHoursAsString === "00") {
        return minutesAsString + " minutes";
      } else {
        if (totalHours < 24 ) {
          return totalHoursAsString + " hours " + minutesAsString + " minutes" ;
        }
        else {
          return days.toString() + " days " + hours.toString() + " hours " + minutesAsString + " minutes" ;
        }
      }
  }

  removeTag(id): void {
    const tags = this.tagChipCtrl.value as Array<number>;
    const newTags = tags.filter(tagId => tagId !== id);

    this.tagChipCtrl.setValue(newTags);
  }

  deleteFollower(index: number) {
    this.followers.removeAt(index);
    this.filteredFollowers.splice(index, 1);
  }

  selectedTag(event: MatAutocompleteSelectedEvent): void {
    const tag: Tags = event.option.value;

    this.tags.push(tag);
    this.tagInput.nativeElement.value = '';
    this.tagCtrl.setValue(null);
  }

  private _filterTag(value): Array<Tags> {
    const filterValue = value.name ? value.name.toLowerCase() : value.toLowerCase();

    return this.allTag.filter(tag => tag.name.toLowerCase().includes(filterValue));
  }

  private _filterFollower(value): Array<People> {
    const filterValue = value;

    return this.allFollowers.filter(follower => follower.name.toLowerCase().includes(filterValue));
  }

  public getTag(id: number) {
    return this.allTag.find(tag => tag.id == id);
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

  get followers() {
    return this.followerForms.controls.followers as FormArray;
  }

}

interface Tags {
  id: number;
  name: string;
  colorCode: string;
}