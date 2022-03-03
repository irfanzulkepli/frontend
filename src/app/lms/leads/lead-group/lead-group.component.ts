import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteModal2Component } from '../../components/delete-modal2/delete-modal2.component';
import { LEADTYPES } from '../../data/lead-type-data';
import { ColumnsInfo } from '../../lms-service';
import { AdvancedService } from '../advanced.service';

@Component({
  selector: 'app-lead-group',
  templateUrl: './lead-group.component.html',
  styleUrls: ['./lead-group.component.scss'],
  providers: [AdvancedService, DecimalPipe]
})
export class LeadGroupComponent implements OnInit {

  columnsInfo: Array<ColumnsInfo> = [
    {
      displayName: 'Name',
      columnDef: 'name',
      type: 'text'
    },
    {
      displayName: 'Class',
      columnDef: 'class',
      type: 'badge'
    },
    {
      displayName: 'Action',
      columnDef: 'action',
      type: 'actionIcon',
      iconList: [
        {
          name: 'bx bx-edit',
          function: 'edit'
        },
        {
          name: 'bx bx-trash-alt',
          function: 'delete'
        }
      ]
    }
  ];

  page: number = 1;
  pageSize: number = 10;
  class: string = 'primary';

  public leadGroups = LEADTYPES;

  leadGroupForm: FormGroup;

  isEditLeadGroup: boolean = false;
  leadGroupIdToDelete: string;

  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
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

  initForm() {
    this.leadGroupForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      class: ['primary', Validators.required]
    });
  }

  onDeleteEmit(leadGroup) {
    const modalRef = this.modalService.open(DeleteModal2Component, { scrollable: true, centered: true });
    modalRef.result.then(result => {
      if (result) {
        const leadGroupIdToDelete = leadGroup.id;

        console.log('leadGroupId: ', leadGroupIdToDelete);
      }
    });
  }

  onEditEmit(modal, ev) {
    console.log('ev: ', ev);

    this.openLeadsModal(modal, ev);
  }
}
