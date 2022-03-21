import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common'
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PERSON } from '../../data/person-data';
import { Observable } from 'rxjs';
import { LMSService } from '../../lms-service';
import { map, startWith } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { DealsService } from '../deals.service';
import { StagesService } from '../stages.service';
import { DIRECTION, PageableRequest } from '../../interfaces/pageable-request.interface';

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
  expectedClosingDate: Date;
  description: string;
  personControl = new FormControl([]);

  isEditStage: boolean = false;
  isEditDealValue: boolean = false;
  isEditLeadType: boolean = false;
  isEditTags: boolean = false;
  isEditExpectedClosingDate: boolean = false;
  isEditFollower: boolean = false;
  isEditDescription: boolean = false;

  followerForms: FormGroup = this.fb.group({
    followers: this.fb.array([])
  });
  profileForm: FormGroup = this.fb.group({
    stage: ['', Validators.required],
    dealValue: ['', Validators.required],
    personName: ['', Validators.required],
    expiredDate: ['', Validators.required],
    followers: ['', Validators.required],
    proposal: ['', Validators.required],
    description: ['', Validators.required],
    comment: ['', Validators.required]
  })

  public tags;
  filteredTags: any[] = [];
  dealTagForm = new FormGroup({
    id: new FormControl('', Validators.required),
    tagIds: new FormControl([], Validators.required)
  });

  followerDetails;
  followerList: Array<any>;
  allFollowers: Array<any>;
  filteredFollowers = [];

  public Editor = ClassicEditor;

  @Output() refreshDealsListPipelineView = new EventEmitter();
  profileType: string = "deal";

  constructor(
    public activeModal: NgbActiveModal,
    private datepipe: DatePipe,
    private fb: FormBuilder,
    private lmsService: LMSService,
    private stagesService: StagesService,
    private dealsService: DealsService,
  ) { }

  async ngOnInit() {
    console.log(this.inputData)
    this.tags = this.lmsService.getTags();
    this.initForm();
    this.initValues()

    const pageableRequest: PageableRequest = {
      direction: DIRECTION.ASCENDING,
      page: 0,
      properties: ["id"],
      size: 3
    }

    this.allFollowers = this.lmsService.getPersons();
    this.followerDetails = this.dealsService.getFollowersById(this.inputData.id, pageableRequest, this.profileType).subscribe({
      next: () => { },
      error: (e) => { },
      complete: () => { }
    });
    console.log(this.followerDetails)

  }

  initForm() {
    let tagIds: string[] = [];
    this.inputData.tags.forEach(element => {
      tagIds.push(element.id + '')
    });

    this.dealTagForm.patchValue({
      id: this.inputData.id,
      tagIds: tagIds
    });

    this.profileForm.patchValue({
      // stage: this.inputData.stages.name,
      dealValue: this.inputData.value,
      personName: this.inputData.person.name,
      expiredDate: this.inputData.expiredAt,
      description: this.inputData.description,
    })

    this.onTagsChange();
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
    let timediff = timeLapsed / 1000;

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
      if (totalHours < 24) {
        return totalHoursAsString + " hours " + minutesAsString + " minutes";
      }
      else {
        return days.toString() + " days " + hours.toString() + " hours " + minutesAsString + " minutes";
      }
    }
  }

  deleteFollower(index: number) {
    this.followers.removeAt(index);
    this.filteredFollowers.splice(index, 1);
  }

  private _filterFollower(value): Array<any> {
    const filterValue = value;

    return this.allFollowers.filter(follower => follower.name.toLowerCase().includes(filterValue));
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

  getStageByName(stageName): number {
    let stageId: number;
    this.stages.map(stages => {
      if (stages.name == stageName) {
        stageId = stages.id;
      }
    });
    return stageId;
  }

  getPersonByName(personName): number {
    let personId: number;
    this.personData.map(person => {
      if (person.name == personName) {
        personId = person.id;
      }
    });
    return personId;
  }

  updateStage() {
    this.isEditStage = !this.isEditStage;
    this.stage = this.profileForm.value.stage;
    this.dealsService.updateDealsStage(this.inputData.id, this.getStageByName(this.stage)).subscribe({
      next: (n) => { },
      error: (e) => { },
      complete: () => { }
    })
    // this.refreshDealsListPipelineView.emit();
  }

  updateDealValue() {
    this.isEditDealValue = !this.isEditDealValue;
    this.dealValue = this.profileForm.value.dealValue;
    this.dealsService.updateDealsValue(this.inputData.id, this.dealValue).subscribe({
      next: (n) => { },
      error: (e) => { },
      complete: () => { }
    });
  }

  updateLeadType() {
    this.isEditLeadType = !this.isEditLeadType;
    this.personName = this.profileForm.value.personName;
    this.dealsService.updateDealsLeadTypePerson(this.inputData.id, this.getPersonByName(this.personName)).subscribe({
      next: (n) => { },
      error: (e) => { },
      complete: () => { }
    });
  }

  updateExpectedClosingDate() {
    const dateCreated = this.datepipe.transform(this.profileForm.value.expiredDate, 'yyyy-MM-dd');
    let closingDate = new Date(dateCreated)

    this.isEditExpectedClosingDate = !this.isEditExpectedClosingDate;
    this.expectedClosingDate = this.profileForm.value.expiredDate;
    this.dealsService.updateDealsExpectedClosingDate(this.inputData.id, closingDate).subscribe({
      next: (n) => { },
      error: (e) => { },
      complete: () => { }
    })
  }

  updateFollower() {
    this.isEditFollower = !this.isEditFollower;
  }

  updateDescription() {
    this.isEditDescription = !this.isEditDescription;
    this.description = this.profileForm.value.description;
    this.dealsService.updateDealsDescription(this.inputData.id, this.profileForm.value.description).subscribe({
      next: (n) => { },
      error: (e) => { },
      complete: () => { }
    })
  }

  onTagsChange() {
    this.isEditTags = !this.isEditTags;
    let formTagIds: any[] = this.dealTagForm.value.tagIds;

    this.filteredTags = [];
    formTagIds.forEach(formTagId => {
      this.tags.forEach(tag => {
        if (tag.id == formTagId) {
          this.filteredTags.push(tag);
        }
      });
    });
  }

  onTagsRemove(index: number) {
    let formTagIds: any[] = this.dealTagForm.value.tagIds;
    formTagIds.splice(index, 1);
    this.filteredTags.splice(index, 1);
    this.dealTagForm.patchValue({
      tagIds: formTagIds
    });

  }

  updateDealsTag() {
    this.isEditTags = !this.isEditTags;
    this.dealsService.updateDealsTag(this.dealTagForm.value).subscribe({
      next: (n) => { },
      error: (e) => { },
      complete: () => { }
    });
  }

}