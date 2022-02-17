import { DecimalPipe } from '@angular/common';
import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { LEADTYPES } from '../../data/lead-type-data';
import { AdvancedSortableDirective, SortEvent } from '../advanced-sortable.directive';
import { AdvancedService } from '../advanced.service';

@Component({
  selector: 'app-lead-group',
  templateUrl: './lead-group.component.html',
  styleUrls: ['./lead-group.component.scss'],
  providers: [AdvancedService, DecimalPipe]
})
export class LeadGroupComponent implements OnInit {

  page: number = 1;
  pageSize: number = 10;
  class: string = 'primary';

  public leadGroups = LEADTYPES;

  public selected: any;

  tables$: Observable<any[]>;
  total$: Observable<number>;

  leadGroupForm: FormGroup;

  isEditLeadGroup: boolean = false;
  leadGroupIdToDelete: string;

  @ViewChildren(AdvancedSortableDirective) headers: QueryList<AdvancedSortableDirective>;

  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
    public service: AdvancedService
  ) { }

  ngOnInit() {
    this.initForm();
    this.service.setData(LEADTYPES);
    this.tables$ = this.service.tables$;
    this.total$ = this.service.total$;
  }

  openLeadsModal(content, leadGroup?) {
    if (leadGroup) {
      this.isEditLeadGroup = true;
      this.leadGroupForm.patchValue({
        id: leadGroup.id,
        name: leadGroup.name,
        class: leadGroup.class
      });
    }
    else {
      this.isEditLeadGroup = false;
      this.leadGroupForm.patchValue({
        name: '',
        class: 'primary'
      });
    }

    this.modalService.open(content, { scrollable: true });
  }

  deleteLeadsModal(content, leadGroup) {
    this.leadGroupIdToDelete = leadGroup.id;
    this.modalService.open(content, { scrollable: true, centered: true });
  }

  initForm() {
    this.leadGroupForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      class: ['primary', Validators.required]
    });
  }

  onSort({ column, direction }: SortEvent) {
    console.log('clicked?');

    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });
    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
}
