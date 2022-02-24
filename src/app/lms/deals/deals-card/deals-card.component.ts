import { Component, OnInit, ViewChild, OnDestroy, AfterViewInit, EventEmitter, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PERSON, Person } from '../../data/person-data';
import { USER } from '../../data/user-data';
import { FormControl } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { ReplaySubject, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { AddDealModalComponent } from '../add-deal-modal/add-deal-modal.component';

@Component({
  selector: 'app-deals-card',
  templateUrl: './deals-card.component.html',
  styleUrls: ['./deals-card.component.scss'],
})
export class DealsCardComponent implements OnInit, OnDestroy, AfterViewInit {

  protected person: Person[] = PERSON;
  public personCtrl: FormControl = new FormControl();
  public personFilterCtrl: FormControl = new FormControl();
  public filteredPerson: ReplaySubject<Person[]> = new ReplaySubject<Person[]>(1);
  public userData = USER;

  stageTypes: string[] = ["Lead generation", "Lead nurturing", "Marketing qualified lead", "Sales accepted lead", "Sales qualified lead", "Closed deals", "Post-sale"];
  leadTypes: string[] = ["Person", "Organization"];
  pipelineOptions: string[] = ["Lead Pipeline (Sales)", "test1"];

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
      this.person.filter(bank => bank.name.toLowerCase().indexOf(search) > -1)
    );
  }

  getInitials() {
    const ownerName = this.cardData.owner.fullName.split(' ')
    const ownerInitials = ownerName[0].charAt(0) + ownerName[1].charAt(0);
    return ownerInitials.toUpperCase();
  }

  openProfile() {
    this.modalService.open(AddDealModalComponent, { size: 'xl'});
  }

  /**
   * Open modal
   * @param content modal content
   */
  editModal(content: any) {
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
