import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomTableDatasource } from 'src/app/components/custom-table/custom-table.interface';
import { DeleteModal2Component } from '../../components/delete-modal2/delete-modal2.component';
import { ColumnsInfo } from '../../lms-service';
import { LeadService } from '../lead.service';

@Component({
  selector: 'app-lead-group',
  templateUrl: './lead-group.component.html',
  styleUrls: ['./lead-group.component.scss'],
  providers: [DecimalPipe]
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
      columnDef: 'clazz',
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
  dataSource: CustomTableDatasource;
  class: string = 'primary';

  public leadGroups: any[] = [];

  leadGroupForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    clazz: new FormControl('')
  });

  isEditLeadGroup: boolean = false;
  leadGroupIdToDelete: string;

  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
    private leadService: LeadService
  ) { }

  ngOnInit() {
    this.getLeadGroups();
  }

  openLeadsModal(content, leadGroup?) {
    if (leadGroup) {
      this.isEditLeadGroup = true;
      this.leadGroupForm.patchValue({
        id: leadGroup.id,
        name: leadGroup.name,
        clazz: leadGroup.clazz
      });
    }
    else {
      this.isEditLeadGroup = false;
      this.leadGroupForm.patchValue({
        name: '',
        clazz: 'primary'
      });
    }

    this.modalService.open(content, { scrollable: true });
  }

  getLeadGroups() {
    this.leadGroups = [];
    this.modalService.dismissAll();
    this.leadService.getContactTypesPage().subscribe({
      next: (n) => {
        this.dataSource = n;
      },
      error: (e) => { },
      complete: () => { }
    })
  }

  onDeleteEmit(leadGroup) {
    const modalRef = this.modalService.open(DeleteModal2Component, { scrollable: true, centered: true });
    modalRef.result.then(result => {
      if (result) {
        const leadGroupIdToDelete = leadGroup.id;
        this.deleteLeadGroups(leadGroupIdToDelete);
        console.log('leadGroupId: ', leadGroupIdToDelete);
      }
    });
  }

  onEditEmit(modal, ev) {
    console.log('ev: ', ev);

    this.openLeadsModal(modal, ev);
  }

  deleteLeadGroups(id) {
    this.leadService.deleteContactTypesById(id).subscribe({
      next: (n) => {
        this.getLeadGroups();
      },
      error: (e) => { },
      complete: () => { }
    })
  }

  updateLeadGroups() {
    const data = {
      name: this.leadGroupForm.value.name,
      clazz: this.leadGroupForm.value.clazz
    }

    this.leadService.updateContactTypes(this.leadGroupForm.value.id, data).subscribe({
      next: (n) => {
        this.getLeadGroups();
      },
      error: (e) => { },
      complete: () => { }
    })
  }

  addLeadGroups() {
    const data = {
      name: this.leadGroupForm.value.name,
      clazz: this.leadGroupForm.value.clazz
    }

    this.leadService.addContactTypes(data).subscribe({
      next: (n) => {
        this.getLeadGroups();
      },
      error: (e) => { },
      complete: () => { }
    })
  }

  saveLeadGroups() {
    if (this.isEditLeadGroup) {
      this.updateLeadGroups();
    } else {
      this.addLeadGroups();
    }
  }
}
