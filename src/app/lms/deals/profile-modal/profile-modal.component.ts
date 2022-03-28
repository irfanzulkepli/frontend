import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { map, startWith } from 'rxjs/operators';
import { ColumnsInfo } from 'src/app/lms/lms-service';
import { PERSON } from '../../data/person-data';
import { DIRECTION, PageableRequest } from '../../interfaces/pageable-request.interface';
import { UpdateFollowerRequest } from '../../leads/interfaces/update-follower-request.interface';
import { LMSService } from '../../lms-service';
import { DealsService } from '../deals.service';
import { StagesService } from '../stages.service';

@Component({
  selector: 'app-profile-modal',
  templateUrl: './profile-modal.component.html',
  styleUrls: ['./profile-modal.component.scss'],
})
export class ProfileModalComponent implements OnInit {

  columnsInfo: Array<ColumnsInfo> = [
    {
      displayName: 'Name',
      columnDef: 'name',
      type: 'text'
    },
    {
      displayName: 'Type',
      columnDef: 'contactTypes',
      type: 'badge'
    },
    {
      displayName: 'Closed deal(s)',
      columnDef: 'closedDealsCount',
      type: 'number'
    },
    {
      displayName: 'Open deal(s)',
      columnDef: 'openDealsCount',
      type: 'number'
    },
    {
      displayName: 'Owner',
      columnDef: 'owner',
      type: 'combinedName'
    },
    {
      displayName: 'Tags',
      columnDef: 'tags',
      type: 'tag'
    }
  ];

  @Input() inputData;
  @Output() refreshDealsListPipelineView = new EventEmitter();

  dealsData: any;
  public personData = PERSON;
  public stages;
  fullName: string;
  stage: any;
  dealValue: number;
  personName: any;
  expectedClosingDate: Date;
  description: string;
  personControl = new FormControl([]);

  isLoading:boolean = true;
  isEditStage: boolean = false;
  isEditDealValue: boolean = false;
  isEditLeadType: boolean = false;
  isEditTags: boolean = false;
  isEditExpectedClosingDate: boolean = false;
  isEditFollower: boolean = false;
  isEditDescription: boolean = false;
  loadingFollowers: boolean = true;
  submitClicked: boolean = false;

  commentForm: FormGroup;
  followerForms: FormGroup;
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

  peoples;
  allPeoples;
  filteredPeoples;
  personCtrl = new FormControl();

  followerDetails;
  followerList: Array<any>;
  allFollowers: Array<any>;
  filteredFollowers = [];

  public Editor = ClassicEditor;

  profileType: string = "deals";
  dataSource: any;

  constructor(
    public activeModal: NgbActiveModal,
    private datepipe: DatePipe,
    private fb: FormBuilder,
    private lmsService: LMSService,
    private stagesService: StagesService,
    private dealsService: DealsService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.tags = this.lmsService.getTags();
    this.initDealsData();
    this.getPersonList();

    this.allFollowers = this.lmsService.getPersons();
  }

  initFollowers() {
    this.isLoading = true;
    const pageableRequest: PageableRequest = {
      direction: DIRECTION.ASCENDING,
      page: 0,
      properties: ["id"],
      size: 3
    }

    this.dealsService.getFollowersById(this.dealsData.id, pageableRequest, this.profileType).subscribe({
      next: (n: any) => {
        this.followerDetails = n;
        this.populateForms();
        this.loadingFollowers = false;
        this.isLoading = false;
      },
      error: (e) => { 
        this.isLoading = false;
      },
      complete: () => { }
    });
  }

  initDealsData() {
    this.dealsService.getDealsById(this.inputData.id).subscribe({
      next: (n: any) => {
        this.dealsData = n;
        this.isLoading = false;
        this.initFollowers();
        this.initForm();
        this.initValues();
        this.getComments();

        this.followers.valueChanges.subscribe(() => {
          this.hasDuplicate('follower');
        });
      },
      error: (e) => { 
        this.isLoading = false;
      },
      complete: () => { }
    });
  }

  initForm() {
    let tagIds: string[] = [];
    this.dealsData.tags.forEach(element => {
      tagIds.push(element.id + '')
    });

    this.dealTagForm.patchValue({
      id: this.dealsData.id,
      tagIds: tagIds
    });

    this.profileForm.patchValue({
      // stage: this.inputData.stages.name,
      dealValue: this.dealsData.value,
      personName: this.dealsData.person.name,
      expiredDate: this.dealsData.expiredAt,
      description: this.dealsData.description,
    })

    this.onTagsChange();
    this.getStagesList()
    this.isEditTags = false;

    this.commentForm = this.fb.group({
      comments: this.fb.array([])
    });

    this.followerForms = this.fb.group({
      followers: this.fb.array([])
    });
  }

  initValues() {
    this.fullName = this.dealsData.owner.firstName + " " + this.dealsData.owner.lastName;
    this.stage = this.dealsData.stages.name;
    this.dealValue = this.dealsData.value;
    this.personName = this.dealsData.person.name;
    this.expectedClosingDate = this.dealsData.expiredAt;
    this.description = this.dealsData.description;
  }

  private populateForms() {
    this.followers.clear();

    if (this.followerDetails.totalSize > 3) {
      const pageableRequest: PageableRequest = {
        direction: DIRECTION.ASCENDING,
        page: 0,
        properties: ["id"],
        size: this.followerDetails.totalSize
      }

      let followerList: any;
      this.dealsService.getFollowersById(this.dealsData.id, pageableRequest, this.profileType).subscribe({
        next: (n: any) => {
          followerList = n;
          for (const follower of followerList.payload) {
            const followerForm = this.fb.group({
              follower: [follower.peopleId, Validators.required],
              followerCtrlName: ['']
            });
            this.followers.push(followerForm);
            this.manageFollowerFilter(this.followers.controls.length - 1);
          }
        },
        error: (e) => { },
        complete: () => { }
      });
    }

    else {
      for (const follower of this.followerDetails.payload) {
        const followerForm = this.fb.group({
          follower: [follower.peopleId, Validators.required],
          followerCtrlName: ['']
        });

        this.followers.push(followerForm);
        this.manageFollowerFilter(this.followers.controls.length - 1);
      }
    }
  }

  private _filterPerson(value: string) {
    const filterValue = value.toLowerCase();

    return this.allPeoples.filter(people => people.name.toLowerCase().includes(filterValue));
  }

  getPersonList() {
    this.lmsService.getPersonList().subscribe({
      next: (n) => {
        this.allPeoples = n;

        this.filteredPeoples = this.personCtrl.valueChanges.pipe(
          startWith(null),
          map((personName: string | null) => (personName ? this._filterPerson(personName) : this.allPeoples.slice()))
        );
      },
      error: (e) => { },
      complete: () => { }
    })
  }

  onCancel() {
    this.populateForms();
    this.submitClicked = false;
    this.isEditFollower = false;
  }

  onSaveClick() {
    const formValid = this.followers.valid;
    this.followers.markAllAsTouched();
    this.submitClicked = true;


    if (!formValid) {
      return;
    }

    const followerIds = [];
    for (const follower of this.followers.value) {
      followerIds.push(follower.follower);
    }

    const payload: UpdateFollowerRequest = {
      followerIds: followerIds
    }

    this.dealsService.updateFollowers(payload, this.dealsData.id, this.profileType).subscribe({
      next: (n) => {
        const pageableRequest: PageableRequest = {
          direction: DIRECTION.ASCENDING,
          page: 0,
          properties: ["id"],
          size: 3
        }
        this.dealsService.getFollowersById(this.dealsData.id, pageableRequest, this.profileType).subscribe({
          next: (n: any) => {
            this.followerDetails = n;
            this.populateForms();
          },
          error: (e) => { },
          complete: () => { }
        });
        

        this.isEditFollower = false;
        this.submitClicked = false;
      }
    })
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
    const dateCreated = this.datepipe.transform(this.dealsData.createdAt, 'MM-dd-yyyy h:mm:ss a');
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

  deleteComment(index: number, id: number) {
    this.comments.removeAt(index);

    this.dealsService.deleteCommentById(id).subscribe({
      next: (n) => { },
      error: (e) => { },
      complete: () => { }
    })
  }

  addFollower() {
    const followerForm = this.fb.group({
      follower: ['', Validators.required],
      followerCtrlName: ['']
    });

    this.followers.push(followerForm);
    this.manageFollowerFilter(this.followers.controls.length - 1);
  }

  getComments() {
    this.isLoading = true;
    this.comments.clear();

    let commentList: any;
    this.dealsService.getCommentsById(this.dealsData.id).subscribe({
      next: (n) => {
        commentList = n;
        for (const comment of commentList) {
          const commentForm = this.fb.group({
            id: [comment.id, Validators.required],
            name: [comment.users.firstName + comment.users.lastName, Validators.required],
            createdAt: [new Date(comment.createdAt), Validators.required],
            updatedAt: [new Date(comment.updatedAt), Validators.required],
            comment: [comment.commentBody, Validators.required],
            editFlag: [false]
          })
          this.comments.push(commentForm);
        }
        this.isLoading = false;
      },
      error: (e) => { 
        this.isLoading = false;
      },
      complete: () => { }
    });
  }

  displayEdit(form: FormGroup) {
    let editFlag: boolean = form.value.editFlag;
    form.controls['editFlag'].setValue(!editFlag);
  }

  comment: string = '';

  addComment() {
    var div = document.createElement("div");
    div.innerHTML = this.comment;
    var text = div.textContent || div.innerText || "";

    const commentForm = this.fb.group({
      // TODO: change the name to user name
      name: [this.fullName, Validators.required],
      createdAt: [new Date(), Validators.required],
      comment: [text, Validators.required]
    });

    this.comment = ''

    const commentResponse = this.fb.group({
      userId: [1, Validators.required],
      createdAt: [new Date(), Validators.required],
      commentableId: [this.dealsData.id, Validators.required],
      commentBody: [text, Validators.required]
    })

    this.dealsService.addComments(commentResponse.value).subscribe({
      next: (n) => { 
        this.getComments()
      },
      error: (e) => { },
      complete: () => { }
    });
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

  get comments() {
    return this.commentForm.controls.comments as FormArray;
  }

  get followers() {
    return this.followerForms.controls.followers as FormArray;
  }

  getStagesList() {
    this.stages = [];
    this.stagesService.getStagesListByPipelineId(this.dealsData.pipelines.id).subscribe({
      next: (n) => {
        this.stages = n;
      },
      error: (e) => { },
      complete: () => { }
    });
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
    this.dealsService.updateDealsStage(this.dealsData.id, this.getStageByName(this.stage)).subscribe({
      next: (n) => { },
      error: (e) => { },
      complete: () => { }
    })
  }

  updateDealValue() {
    this.isEditDealValue = !this.isEditDealValue;
    this.dealValue = this.profileForm.value.dealValue;
    this.dealsService.updateDealsValue(this.dealsData.id, this.dealValue).subscribe({
      next: (n) => { },
      error: (e) => { },
      complete: () => { }
    });
  }

  updateLeadType() {
    this.isEditLeadType = !this.isEditLeadType;
    this.personName = this.profileForm.value.personName;
    this.dealsService.updateDealsLeadTypePerson(this.dealsData.id, this.getPersonByName(this.personName)).subscribe({
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
    this.dealsService.updateDealsExpectedClosingDate(this.dealsData.id, closingDate).subscribe({
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
    this.dealsService.updateDealsDescription(this.dealsData.id, this.profileForm.value.description).subscribe({
      next: (n) => { },
      error: (e) => { },
      complete: () => { }
    });
  }

  updateComment(form: FormGroup) {
    var div = document.createElement("div");
    div.innerHTML = form.value.comment;
    var text = div.textContent || div.innerText || "";

    form.controls['comment'].setValue(text);
    this.displayEdit(form);
    
    // const updateResponse = {
    //   "commentBody": text
    // }

    const updateResponse = this.fb.group({
      commentBody: text.toString()
    });

    this.dealsService.updateComments(updateResponse.value,form.value.id).subscribe({
      next: (n) => { },
      error: (e) => { },
      complete: () => { }
    });
  }

  onTagsChange() {
    this.isEditTags = true;
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

  refreshOnClose() {
    this.activeModal.close(true);
  }

  openModal(content) {
    const pageableRequest: PageableRequest = {
      direction: DIRECTION.ASCENDING,
      page: 0,
      properties: ["id"],
      size: 10
    }
    this.dealsService.getFollowersById(this.dealsData.id, pageableRequest, this.profileType).subscribe({
      next: (n: any) => {
        this.dataSource = n;
        this.modalService.open(content, { size: 'xl', centered: true, scrollable: true });
      },
      error: (e) => { },
      complete: () => { }
    });
  }

  hasDuplicate(keyForm) {
    let dict = {};
    let duplicates = [];

    for (const organization of this.followers.controls) {
      organization.get(keyForm).setErrors(null);
    }

    this.followers.value.forEach((item, index) => {
      dict[item.follower] = dict[item.follower] || [];
      dict[item.follower].push(index);
    });

    for (var key in dict) {
      if (dict[key].length > 1) duplicates = duplicates.concat(dict[key]);
    }

    for (const index of duplicates) {
      this.followers.at(index).get(keyForm).setErrors({ duplicated: true });
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