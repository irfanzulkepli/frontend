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
import { ALLDEALS } from '../../data/all-deals.data';
import { ProfileModalComponent } from '../profile-modal/profile-modal.component';
import {MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { LOSTREASONS } from '../../data/lost-reasons';

@Component({
  selector: 'app-pipeline-view-card',
  templateUrl: './pipeline-view-card.component.html',
  styleUrls: ['./pipeline-view-card.component.scss'],
})
export class PipelineViewCardComponent implements OnInit {

  // public pipelineView = PIPELINEVIEW;
  public pipeline = PIPELINES;
  public userData = USER;
  public lostReasons = LOSTREASONS;
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
  public activities: string[] = ["Call", "Meeting", "Email", "Task", "Deadline", "Others", ]
  public activityTypes: string[] = ["Deal", "Person", "Organization"]
  public dateTime = new Date();
  public currentDate = this.dateTime.toISOString().substring(0,10);
  public currentTime = this.dateTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: false});
  public endDateTime = new Date(this.dateTime.getTime() + 15*60000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: false});

  // mat chip tags
  visible = true;
  selectable = true;
  removable = true;
/*set the separator keys.*/
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];  
  tempTags: string[] = [];

  public person: Person[] = PERSON;
  public personCtrl: FormControl = new FormControl();
  public personFilterCtrl: FormControl = new FormControl();
  public filteredPerson: ReplaySubject<Person[]> = new ReplaySubject<Person[]>(1);

  protected tag: any[] = TAGS;
  public tagsCtrl: FormControl = new FormControl();
  public tagsFilterCtrl: FormControl = new FormControl();
  public filteredTags: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  protected dealTitle: any[] = ALLDEALS;
  public dealTitlesCtrl: FormControl = new FormControl();
  public dealTitleFilterCtrl: FormControl = new FormControl();
  public filteredDealTitles: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

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
        this.filterTags();
      });

    // load the initial deal title list
    this.filteredDealTitles.next(this.dealTitle.slice());

    // listen for search field value changes
    this.dealTitleFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterDealsTitle();
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

    this.filteredDealTitles
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

  protected filterDealsTitle() {
    if (!this.dealTitle) {
      return;
    }
    // get the search keyword
    let search = this.dealTitleFilterCtrl.value;
    if (!search) {
      this.filteredDealTitles.next(this.dealTitle.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the tag
    this.filteredDealTitles.next(
      this.dealTitle.filter(dealTitle => dealTitle.name.toLowerCase().indexOf(search) > -1)
    );
  }

  participantsControl = new FormControl([]);
  collaboratorsControl = new FormControl([]);
  personControl = new FormControl([]);

  onParticipantRemoved(participant: string) {
    const participants = this.participantsControl.value as string[];
    this.removeFirst(participants, participant);
    this.participantsControl.setValue(participants); // To trigger change detection
  }

  onCollaboratorRemoved(collaborator: string) {
    const collaborators = this.collaboratorsControl.value as string[];
    this.removeFirst(collaborators, collaborator);
    this.collaboratorsControl.setValue(collaborators); // To trigger change detection
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

  addMinutes(minutes) {
    const newDateTime = new Date(this.dateTime.getTime() + parseInt(minutes)*60000);
    const newDate = newDateTime.toISOString().substring(0,10);
    const newTime = newDateTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: false});
    (<HTMLInputElement>document.getElementById('endDateInput')).value = newDate;
    (<HTMLInputElement>document.getElementById('endTimeInput')).value = newTime;
}

  getInitials(fullName: string) {
    const splitName = fullName.split(' ')
    const ownerInitials = splitName[0].charAt(0) + splitName[1].charAt(0);
    return ownerInitials.toUpperCase();
  }

  openProfile() {
    const modalRef = this.modalService.open(ProfileModalComponent, { size: 'xl'});
    (<ProfileModalComponent>modalRef.componentInstance).inputData = this.cardData;
  }

  activityModal(content: any) {
    this.modalService.open(content, {size: 'lg'});
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
  openCenteredModal(content: any) {
    this.modalService.open(content, { centered: true });
  }
}
