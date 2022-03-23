import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { ActivityModalComponent } from '../../components/activity-modal/activity-modal.component';
import { DealsModalComponent } from '../../components/deals-modal/deals-modal.component';
import { DeleteModal2Component } from '../../components/delete-modal2/delete-modal2.component';
import { PIPELINES } from '../../data/pipelines.data';
import { USER } from '../../data/user-data';
import { DealsService } from '../deals.service';
import { ProfileModalComponent } from '../profile-modal/profile-modal.component';

@Component({
  selector: 'app-pipeline-view-card',
  templateUrl: './pipeline-view-card.component.html',
  styleUrls: ['./pipeline-view-card.component.scss'],
})
export class PipelineViewCardComponent implements OnInit {

  // public pipelineView = PIPELINEVIEW;
  fullName: string;
  public pipeline = PIPELINES;
  public userData = USER;
  // public lostReasons = LOSTREASONS;
  public leadTypes: string[] = ["Person", "Organization"];
  public stageTypes: any[] = [
    { id: 0, name: "Lead generation" },
    { id: 1, name: "Lead nurturing" },
    { id: 2, name: "Marketing qualified lead" },
    { id: 3, name: "Sales accepted lead" },
    { id: 4, name: "Sales qualified lead" },
    { id: 5, name: "Closed deals" },
    { id: 6, name: "Post-sale" }
  ];
  // mat chip tags
  visible = true;
  selectable = true;
  removable = true;
  /*set the separator keys.*/
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  tempTags: string[] = [];

  // public person: Person[] = PERSON;
  // public personCtrl: FormControl = new FormControl();
  // public personFilterCtrl: FormControl = new FormControl();
  // public filteredPerson: ReplaySubject<Person[]> = new ReplaySubject<Person[]>(1);

  // protected tag: any[] = TAGS;
  // public tagsCtrl: FormControl = new FormControl();
  // public tagsFilterCtrl: FormControl = new FormControl();
  // public filteredTags: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  @ViewChild('singleSelect') singleSelect: MatSelect;
  @Input() cardData;
  @Output() refreshAllDeals = new EventEmitter<string>();

  /** Subject that emits when the component has been destroyed. */
  protected _onDestroy = new Subject<void>();


  @Input() lostReasons;
  @Input() tags;

  dealLostForm = new FormGroup({
    id: new FormControl('', Validators.required),
    lostReasonsId: new FormControl('', Validators.required),
    comment: new FormControl('', Validators.required)
  });

  filteredTags: any[] = [];
  dealTagForm = new FormGroup({
    id: new FormControl('', Validators.required),
    tagIds: new FormControl([], Validators.required)
  });

  constructor(
    private modalService: NgbModal,
    private dealsService: DealsService
  ) { }

  ngOnInit() {

    // load the initial person list
    // this.filteredPerson.next(this.person.slice());

    // listen for search field value changes
    // this.personFilterCtrl.valueChanges
    //   .pipe(takeUntil(this._onDestroy))
    //   .subscribe(() => {
    //     this.filterPerson();
    //   });

    // load the initial tag list
    // this.filteredTags.next(this.tag.slice());

    // listen for search field value changes
    // this.tagsFilterCtrl.valueChanges
    //   .pipe(takeUntil(this._onDestroy))
    //   .subscribe(() => {
    //     this.filterTags();
    //   });
  }

  ngAfterViewInit() {
    // this.setInitialValue();
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  /**
   * Sets the initial value after the filteredPerson are loaded initially
   */
  // protected setInitialValue() {
  //   this.filteredPerson
  //     .pipe(take(1), takeUntil(this._onDestroy))
  //     .subscribe(() => {
  //       // setting the compareWith property to a comparison function
  //       // triggers initializing the selection according to the initial value of
  //       // the form control (i.e. _initializeSelection())
  //       // this needs to be done after the filteredBanks are loaded initially
  //       // and after the mat-option elements are available
  //       this.singleSelect.compareWith = (a: Person, b: Person) => a && b && a.id === b.id;
  //     });
  // }

  // protected filterPerson() {
  //   if (!this.person) {
  //     return;
  //   }
  //   // get the search keyword
  //   let search = this.personFilterCtrl.value;
  //   if (!search) {
  //     this.filteredPerson.next(this.person.slice());
  //     return;
  //   } else {
  //     search = search.toLowerCase();
  //   }
  //   // filter the person
  //   this.filteredPerson.next(
  //     this.person.filter(person => person.name.toLowerCase().indexOf(search) > -1)
  //   );
  // }

  // protected filterTags() {
  //   if (!this.tag) {
  //     return;
  //   }
  //   // get the search keyword
  //   let search = this.tagsFilterCtrl.value;
  //   if (!search) {
  //     this.filteredTags.next(this.tag.slice());
  //     return;
  //   } else {
  //     search = search.toLowerCase();
  //   }
  //   // filter the tag
  //   this.filteredTags.next(
  //     this.tag.filter(tag => tag.name.toLowerCase().indexOf(search) > -1)
  //   );
  // }

  getInitials(firstName: string) {
    if (firstName) {
      const fullName = firstName.split(' ');

      let initials;
      if (fullName.length > 1) {
        initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
      }
      else {
        initials = fullName.shift().charAt(0);
      }
      return initials.toUpperCase();
    }
    else {
      return 'N/A';
    }
  }

  // onPersonRemoved(person: string) {
  //   const personArray = this.dealTagForm.value.tags.value as string[];
  //   this.removeFirst(personArray, person);
  //   this.dealTagForm.patchValue({
  //     tags: personArray
  //   });
  //   // To trigger change detection
  // }

  // private removeFirst<T>(array: T[], toRemove: T): void {
  //   const index = array.indexOf(toRemove);
  //   if (index !== -1) {
  //     array.splice(index, 1);
  //   }
  // }

  onTagsChange() {
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
    })
  }

  openProfile() {
    const modalRef = this.modalService.open(ProfileModalComponent, { size: 'xl' });
    (<ProfileModalComponent>modalRef.componentInstance).inputData = this.cardData;
  }

  activityModal() {
    const modalRef = this.modalService.open(ActivityModalComponent, { size: 'lg', scrollable: true });
    modalRef.componentInstance.activityData = this.cardData;
    modalRef.componentInstance.isEdit = false;
    modalRef.componentInstance.pipelineViewId = this.cardData.pipelines.id;
    modalRef.componentInstance.dealId = this.cardData.id;

    modalRef.result.then(result => result);
  }

  /**
   * Open modal
   * @param content modal content
   */
  openTagModal(content: any) {
    this.modalService.open(content);

    let tagIds: string[] = [];
    this.cardData.tags.forEach(element => {
      tagIds.push(element.id + '')
    });

    this.dealTagForm.patchValue({
      id: this.cardData.id,
      tagIds: tagIds
    });

    this.onTagsChange();
  }

  openLostModal(content: any) {
    this.modalService.open(content);
    this.dealLostForm.patchValue({
      id: this.cardData.id,
      lostReasonsId: this.cardData.lostReasons ? this.cardData.lostReasons.id : '',
      comment: this.cardData.comment ? this.cardData.comment : ''
    })
  }

  openEditModal(cardData) {
    const modalRef = this.modalService.open(DealsModalComponent);
    modalRef.componentInstance.dealDatas = cardData;

    modalRef.result.then(result => {
      if (result === true) {
        this.refreshData();
      }
    });
  }

  openDeleteModal() {
    const modalRef = this.modalService.open(DeleteModal2Component);

    modalRef.result.then(result => {
      if (result === true) {
        this.deleteDeals();
      }
    });
  }

  updateDealsToLost() {
    this.dealsService.updateDealsToLost(this.dealLostForm.value).subscribe({
      next: (n) => {
        this.refreshData();
      },
      error: (e) => { },
      complete: () => { }
    })
  }

  updateDealsToWon(content: any) {
    this.dealsService.updateDealsToWon(this.cardData.id).subscribe({
      next: (n) => {
        this.modalService.open(content, { centered: true });
      },
      error: (e) => { },
      complete: () => { }
    })
  }

  updateDealsTag() {
    this.dealsService.updateDealsTag(this.dealTagForm.value).subscribe({
      next: (n) => {
        this.refreshData();
      },
      error: (e) => { },
      complete: () => { }
    })
  }

  deleteDeals() {
    this.dealsService.deleteDealsById(this.cardData.id).subscribe({
      next: (n) => {
        this.refreshData();
      },
      error: (e) => { },
      complete: () => { }
    })
  }

  /**
   * Open center modal
   * @param centerDataModal center modal data
   */
  openWonModal(content: any) {
    // this.modalService.open(content, { centered: true });

    this.updateDealsToWon(content);
  }

  refreshData() {
    this.modalService.dismissAll();
    this.refreshAllDeals.emit();
  }
}
