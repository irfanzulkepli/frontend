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
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { DealsService } from '../deals.service';
import { StagesService } from '../stages.service';

@Component({
  selector: 'app-profile-modal',
  templateUrl: './profile-modal.component.html',
  styleUrls: ['./profile-modal.component.scss'],
})
export class ProfileModalComponent implements OnInit {

  @Input() inputData;
  public personData = PERSON;
  public stages;
  fullName: string;
  stage: any;
  dealValue: number;
  personName: any;
  expectedClosingDate: string;
  description: string;
  personControl = new FormControl([]);

  isEditStage: boolean = false;
  isEditDealValue: boolean = false;
  isEditLeadType: boolean = false;
  isEditExpectedClosingDate: boolean = false;
  isEditFollower: boolean = false;
  isEditDescription: boolean = false;


  followerForms: FormGroup;
  profileForm: FormGroup = this.fb.group({
    stage: ['', Validators.required],
    stageId: ['', Validators.required],
    dealValue: ['', Validators.required],
    personName: ['', Validators.required],
    personId: ['', Validators.required],
    expiredDate: ['', Validators.required],
    followers: ['', Validators.required],
    proposal: ['', Validators.required],
    tags: ['', Validators.required],
    description: ['', Validators.required],
    comment: ['', Validators.required]
  })

  tagCtrl = new FormControl();
  tagChipCtrl = new FormControl([]);
  tags: Array<Tags> = [];
  allTag: Array<Tags> = [];
  filteredTags: Observable<Array<Tags>>;

  followerList: Array<People>;
  allFollowers: Array<People>;
  filteredFollowers = [];

  public Editor = ClassicEditor;

  @ViewChild('tagInput') tagInput: ElementRef<HTMLInputElement>;

  constructor(
    public activeModal: NgbActiveModal, 
    private datepipe: DatePipe,
    private fb: FormBuilder,
    private lmsService: LMSService,
    private stagesService: StagesService,
    private dealsService: DealsService
    ) { }

  ngOnInit() {
    this.initForm();
    this.initValues()
    this.allTag = this.lmsService.getTags();
    this.allFollowers =  this.lmsService.getPersons();

    this.filteredTags = this.tagCtrl.valueChanges.pipe(
      startWith(null),
      map((tag) => (tag ? this._filterTag(tag) : this.allTag.slice()))
    );
  }

  initForm() {
    this.profileForm.patchValue({
      stage: this.inputData.stages.name,
      stageId: this.inputData.stages.id,
      dealValue: this.inputData.value,
      personName: this.inputData.person.name,
      personId: this.inputData.person.id,
      expiredDate: this.inputData.expiredAt,
      description: this.inputData.description,
    })

    this.getStagesList()

    this.followerForms = this.fb.group({
      followers: this.fb.array([])
    });
  }

  initValues() {
    this.fullName = this.inputData.owner.firstName + " " + this.inputData.owner.lastName;
    this.stage = this.inputData.stages.name;
    this.dealValue = this.inputData.value;
    this.personName = this.inputData.person.name;
    this.expectedClosingDate = this.inputData.expiredAt;
    this.description = this.inputData.description;
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

  getInitials(name: string) {
    if (name) {
      const fullName = name.split(' ');

      let initials;
      if (fullName.length > 1) {
        initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
      }
      else {
        initials = fullName.shift().charAt(0);
      }
      return initials.toUpperCase();
    }
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

  getStagesList() {
    this.stages = [];
    this.stagesService.getStagesListByPipelineId(this.inputData.pipelines.id).subscribe({
      next: (n) => {
        this.stages = n;
      },
      error: (e) => { },
      complete: () => { }
    })
  }

  updateStage() {
    this.isEditStage = !this.isEditStage;
    console.log(this.profileForm.value.stage)
    this.stage = this.profileForm.value.stage;
    // this.dealsService.updateDealsStage(this.inputData.id,this.profileForm.value.stage.id)
  }

  updateDealValue() {
    this.isEditDealValue = !this.isEditDealValue;
    this.dealValue = this.profileForm.value.dealValue;
    console.log(this.inputData.id, this.profileForm.value.dealValue)
    this.dealsService.updateDealsValue(this.inputData.id,this.profileForm.value.dealValue).subscribe({
      next: (n) => { },
      error: (e) => { },
      complete: () => { }
    })
  }

  updateLeadType() {
    this.isEditLeadType = !this.isEditLeadType;
    this.personName = this.profileForm.value.person.name;
    // this.dealsService.updateDealsLeadTypePerson(this.inputData.id,this.profileForm.value.person.id)
  }

  updateExpectedClosingDate() {
    this.isEditExpectedClosingDate = !this.isEditExpectedClosingDate;
    this.expectedClosingDate = this.profileForm.value.expiredDate;
    // this.dealsService.updateDealsExpectedClosingDate(this.inputData.id,this.profileForm.value.expiredDate)
  }

  updateFollower() {
    this.isEditFollower = !this.isEditFollower;
  }

  updateDescription() {
    this.isEditDescription = !this.isEditDescription;
    this.description = this.profileForm.value.description;
    // this.dealsService.updateDealsDescription(this.inputData.id,this.profileForm.value.description)
  }

}

interface Tags {
  id: number;
  name: string;
  colorCode: string;
}