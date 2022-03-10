import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subject } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Person } from '../../data/person-data';
import { DealsService } from '../../deals/deals.service';
import { PipelinesService } from '../../deals/pipelines.service';
import { LMSService } from '../../lms-service';

@Component({
  selector: 'app-deals-modal',
  templateUrl: './deals-modal.component.html',
  styleUrls: ['./deals-modal.component.scss']
})
export class DealsModalComponent implements OnInit {

  protected _onDestroy = new Subject<void>();

  @Input() dealDatas;
  @Output() dealDetails = new EventEmitter();

  public pipelines;
  public users;
  public leadTypes: string[] = ["Person", "Organization"];
  public stages;
  public persons;
  public filteredPerson: Observable<Array<Person>>;

  personFilterCtrl = new FormControl();

  public dealForm: FormGroup = this.fb.group({
    id: ['', Validators.required],
    title: ['', Validators.required],
    description: [''],
    leadType: ['Person'],
    personId: ['', Validators.required],
    value: [''],
    pipelinesId: ['', Validators.required],
    stagesId: ['', Validators.required],
    expiredAt: [''],
    ownerId: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal,
    public activeModal: NgbActiveModal,
    private dealsService: DealsService,
    private pipelinesService: PipelinesService,
    private lmsService: LMSService
  ) { }

  ngOnInit() {
    this.getPipelinesList();
    this.getStagesList();
    this.getPersonList();
    this.getUsersList();

    if (this.dealDatas) {
      this.getDeals();
    }
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  getDeals() {
    this.dealsService.getDealsById(this.dealDatas.id).subscribe({
      next: (n) => {
        const leadTypeIndicator = n.contextableType.split('\\').includes('Person');

        this.dealForm.patchValue({
          id: n.id ? n.id : '',
          title: n.title ? n.title : '',
          description: n.description ? n.description : '',
          value: n.value ? n.value : '',
          pipelinesId: n.pipelines.id ? n.pipelines.id : '',
          stagesId: n.stages.id ? n.stages.id : '',
          ownerId: n.owner.id ? n.owner.id : '',
          leadType: leadTypeIndicator ? 'Person' : 'Organization',
          expiredAt: n.expiredAt ? n.expiredAt : '',
          personId: n.person.id ? n.person.id : ''
        });
      },
      error: (e) => { },
      complete: () => { }
    })
  }

  onCancelClick() {
    this.activeModal.close(false);
  }

  onSaveClick() {
    this.dealsService.updateDeals(this.dealForm.value).subscribe({
      next: (n) => {
        this.activeModal.close(true);
      },
      error: (e) => {
        this.activeModal.close(false);
      },
      complete: () => { }
    })
  }

  private _filterPerson(value: string): Array<Person> {
    const filterValue = value.toLowerCase();
    return this.persons.filter(person => person.name.toLowerCase().includes(filterValue));
  }

  getPipelinesList() {
    this.pipelinesService.getPipelinesList().subscribe({
      next: (n) => {
        this.pipelines = n;
      },
      error: (e) => { },
      complete: () => { }
    })
  }

  getStagesList() {
    this.lmsService.getStagesList().subscribe({
      next: (n) => {
        this.stages = n;
      },
      error: (e) => { },
      complete: () => { }
    })
  }

  getUsersList() {
    this.lmsService.getUsersList().subscribe({
      next: (n) => {
        this.users = n;
      },
      error: (e) => { },
      complete: () => { }
    })
  }

  getPersonList() {
    this.lmsService.getPersonList().subscribe({
      next: (n) => {
        this.persons = n;

        this.filteredPerson = this.personFilterCtrl.valueChanges.pipe(
          startWith(null),
          map((tag) => (tag ? this._filterPerson(tag) : this.persons.slice()))
        );

      },
      error: (e) => { },
      complete: () => { }
    })
  }

}
