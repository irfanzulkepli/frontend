import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PIPELINEVIEW } from '../../data/pipeline-view.data';
import { PIPELINES } from '../../data/pipelines.data';
import { Person, PERSON } from '../../data/person-data';
import { USER } from '../../data/user-data';
import { STAGES } from '../../data/stages.data';
import { FormControl } from '@angular/forms';
import { ReplaySubject, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-pipeline-view',
  templateUrl: './pipeline-view.component.html',
  styleUrls: ['./pipeline-view.component.scss']
})
export class PipelineViewComponent implements OnInit, OnDestroy {

  public pipelineView = PIPELINEVIEW;
  public pipeline = PIPELINES;
  public userData = USER;
  public stages = STAGES;
  public leadTypes: string[] = ["Person", "Organization"];
  public dealsByStageId = [[],[],[],[],[],[],[]] ;
  public dealsValueByStageId = [ 0, 0, 0, 0, 0, 0, 0];
  public dealsProbabilityByStageId = [ 0, 0, 0, 0, 0, 0, 0];
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
  @ViewChild('singleSelect') singleSelect: MatSelect;

  /** Subject that emits when the component has been destroyed. */
  protected _onDestroy = new Subject<void>();

  constructor(private modalService: NgbModal) { }

  ngOnInit() { 
    this.pipelineView.map(deal => {
      this.dealsByStageId[deal.stageId-1].push(deal);
      this.dealsValueByStageId[deal.stageId-1] += deal.value;
    })

    this.stages.map(stage => {
      if (stage.id < 7){
        this.dealsProbabilityByStageId[stage.id-1] = stage.probability;
      }
    })

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
      this.person.filter(person => person.name.toLowerCase().indexOf(search) > -1)
    );
  }

  getInitials(fullName: string) {
    const splitName = fullName.split(' ')
    const ownerInitials = splitName[0].charAt(0) + splitName[1].charAt(0);
    return ownerInitials.toUpperCase();
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log('Transfering item to new container')
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  /**
   * Open modal
   * @param content modal content
   */
  addModal(content: any) {
    this.modalService.open(content);
  }
}
