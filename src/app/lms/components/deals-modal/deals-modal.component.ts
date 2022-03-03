import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subject } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { PERSON, Person } from '../../data/person-data';
import { PIPELINES } from '../../data/pipelines.data';
import { USER } from '../../data/user-data';
import * as moment from 'moment';

@Component({
  selector: 'app-deals-modal',
  templateUrl: './deals-modal.component.html',
  styleUrls: ['./deals-modal.component.scss']
})
export class DealsModalComponent implements OnInit {

  protected _onDestroy = new Subject<void>();

  @Input() dealDatas;
  @Output() dealDetails = new EventEmitter();

  public pipeline = PIPELINES;
  public userData = USER;
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

  protected person: Person[] = PERSON;
  public filteredPerson: Observable<Array<Person>>;

  personFilterCtrl = new FormControl();

  public dealForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    description: [''],
    leadType: ['Person'],
    person: ['', Validators.required],
    dealValue: [''],
    pipeline: ['', Validators.required],
    stage: ['', Validators.required],
    expectedClosingDate: [''],
    owner: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal,
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
    this.filteredPerson = this.personFilterCtrl.valueChanges.pipe(
      startWith(null),
      map((tag) => (tag ? this._filterPerson(tag) : this.person.slice()))
    );

    if (this.dealDatas) {
      const formValue = this.dealDatas;

      const leadTypeIndicator = formValue.contextableType.split('\\').includes('Person');

      this.dealForm.patchValue({
        title: formValue.title ? formValue.title : '',
        description: formValue.description ? formValue.description : '',
        dealValue: formValue.value ? formValue.value : '',
        pipeline: formValue.pipelineId ? formValue.pipelineId : '',
        stage: formValue.stageId ? formValue.stageId : '',
        owner: formValue.ownerId ? formValue.ownerId : '',
        leadType: leadTypeIndicator ? 'Person' : 'Organization',
        expectedClosingDate: formValue.expiredAt ? moment(formValue.expiredAt, 'YYYY-MM-DD HH:mm:ss').format('DD/MM/YYYY') : '',
        person: formValue.contactPerson[0]?.id ? formValue.contactPerson[0]?.id : ''
      });

      console.log('dealForm: ', this.dealForm);

    }
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  onCancelClick() {
    this.activeModal.close(false);
  }

  onSaveClick() {
    const dealFormData = this.dealForm.getRawValue();
    this.activeModal.close(dealFormData);
  }

  private _filterPerson(value: string): Array<Person> {
    const filterValue = value.toLowerCase();

    return this.person.filter(person => person.name.toLowerCase().includes(filterValue));
  }

}
