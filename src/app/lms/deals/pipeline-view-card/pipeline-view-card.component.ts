import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReplaySubject, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { PERSON, Person } from '../../data/person-data';
import { PIPELINES } from '../../data/pipelines.data';
import { USER } from '../../data/user-data';
import { TAGS } from '../../data/tags-data';
import { AddDealModalComponent } from '../add-deal-modal/add-deal-modal.component';

@Component({
  selector: 'app-pipeline-view-card',
  templateUrl: './pipeline-view-card.component.html',
  styleUrls: ['./pipeline-view-card.component.scss'],
})
export class PipelineViewCardComponent implements OnInit {

  // public pipelineView = PIPELINEVIEW;
  public pipeline = PIPELINES;
  public userData = USER;
  public leadTypes: string[] = ["Person", "Organization"];
  public stageTypes: any[] = [
    { id: 0, name: "Lead generation" },
    { id: 1, name: "Lead nurturing"},
    { id: 2, name: "Marketing qualified lead"},
    { id: 3, name: "Sales accepted lead"},
    { id: 4, name: "Sales qualified lead"},
    { id: 5, name: "Closed deals"},
    { id: 6, name: "Post-sale"}
  ];

  protected person: Person[] = PERSON;
  public personCtrl: FormControl = new FormControl();
  public personFilterCtrl: FormControl = new FormControl();
  public filteredPerson: ReplaySubject<Person[]> = new ReplaySubject<Person[]>(1);

  protected tag: any[] = TAGS;
  public tagsCtrl: FormControl = new FormControl();
  public tagsFilterCtrl: FormControl = new FormControl();
  public filteredTags: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  @ViewChild('singleSelect') singleSelect: MatSelect;
  @Input() cardData;

  /** Subject that emits when the component has been destroyed. */
  protected _onDestroy = new Subject<void>();

  constructor(private modalService: NgbModal) { }
  ngOnInit() {
    // load the initial person list
    this.filteredPerson.next(this.person.slice());

    // listen for search field value changes
    this.personFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterPerson();
      });

    // load the initial tag list
    this.filteredTags.next(this.tag.slice());

    // listen for search field value changes
    this.tagsFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterPerson();
      });
  }

  ngAfterViewInit() {
    this.setInitialValue();
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

    /**
     * Sets the initial value after the filteredPerson are loaded initially
     */
  protected setInitialValue() {
    this.filteredPerson
    .pipe(take(1), takeUntil(this._onDestroy))
    .subscribe(() => {
      // setting the compareWith property to a comparison function
      // triggers initializing the selection according to the initial value of
      // the form control (i.e. _initializeSelection())
      // this needs to be done after the filteredBanks are loaded initially
      // and after the mat-option elements are available
      this.singleSelect.compareWith = (a: Person, b: Person) => a && b && a.id === b.id;
      });

    this.filteredTags
    .pipe(take(1), takeUntil(this._onDestroy))
    .subscribe(() => {
      // setting the compareWith property to a comparison function
      // triggers initializing the selection according to the initial value of
      // the form control (i.e. _initializeSelection())
      // this needs to be done after the filteredBanks are loaded initially
      // and after the mat-option elements are available
      this.singleSelect.compareWith = (a: Person, b: Person) => a && b && a.id === b.id;
      });
    }
  
  protected filterPerson() {
    if (!this.person) {
      return;
    }
    // get the search keyword
    let search = this.personFilterCtrl.value;
    if (!search) {
      this.filteredPerson.next(this.person.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the person
    this.filteredPerson.next(
      this.person.filter(person => person.name.toLowerCase().indexOf(search) > -1)
    );
  }

  protected filterTags() {
    if (!this.tag) {
      return;
    }
    // get the search keyword
    let search = this.tagsFilterCtrl.value;
    if (!search) {
      this.filteredTags.next(this.tag.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the tag
    this.filteredTags.next(
      this.tag.filter(tag => tag.name.toLowerCase().indexOf(search) > -1)
    );
  }

  getInitials(fullName: string) {
    const splitName = fullName.split(' ')
    const ownerInitials = splitName[0].charAt(0) + splitName[1].charAt(0);
    return ownerInitials.toUpperCase();
  }

  openProfile() {
    const modalRef = this.modalService.open(AddDealModalComponent, { size: 'xl'});
    (<AddDealModalComponent>modalRef.componentInstance).inputData = this.cardData;
  }

  activityModal(content: any) {
    this.modalService.open(content, {size: 'xl'});
  }

  /**
   * Open modal
   * @param content modal content
   */
  openModal(content: any) {
    this.modalService.open(content);
  }

  /**
   * Open center modal
   * @param centerDataModal center modal data
   */
  deleteModal(content: any) {
    this.modalService.open(content, { centered: true });
  }
}
