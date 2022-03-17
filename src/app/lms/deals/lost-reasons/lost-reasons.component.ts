import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomTableDatasource } from 'src/app/components/custom-table/custom-table.interface';
import { DeleteModal2Component } from '../../components/delete-modal2/delete-modal2.component';
import { ColumnsInfo } from '../../lms-service';
import { LostReasonsService } from '../lost-reasons.service';

@Component({
  selector: 'app-lost-reasons',
  templateUrl: './lost-reasons.component.html',
  styleUrls: ['./lost-reasons.component.scss']
})
export class LostReasonsComponent implements OnInit {

  public columnsInfo: Array<ColumnsInfo> = [
    {
      displayName: 'Name',
      columnDef: 'lostReason',
      type: 'text'
    },
    {
      displayName: 'Active',
      columnDef: 'active',
      type: 'text'
    },
    {
      displayName: 'Created by',
      columnDef: 'createdBy.firstName',
      type: 'text'
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

  // public lostReasons = LOSTREASONS;
  public lostReasons: any[] = [];
  dataSource: CustomTableDatasource;
  public action: String = '';

  form = new FormGroup({
    id: new FormControl(''),
    lostReason: new FormControl('')
  });

  constructor(
    private modalService: NgbModal,
    private lostReasonsService: LostReasonsService
  ) { }

  ngOnInit() {
    this.getLostReasons();
  }

  getLostReasons() {
    this.lostReasons = [];
    this.modalService.dismissAll();
    this.lostReasonsService.getLostReasonsPage().subscribe({
      next: (n) => {
        this.dataSource = n;
      },
      error: (e) => { },
      complete: () => { }
    })
  }

  /**
   * Open modal
   * @param content modal content
   */
  openModal(content: any, lostReasonsData: any, action: string ) {
    this.form.patchValue({
      id: lostReasonsData?.id,
      lostReason: lostReasonsData?.lostReason
    });
    this.modalService.open(content);
    this.action = action;
  }

  /**
   * Open center modal
   * @param centerDataModal center modal data
   */
  deleteModal(data: any) {
    const modalRef = this.modalService.open(DeleteModal2Component, { centered: true });

    modalRef.result.then(result => {
      if (result === true) {
        this.deleteLostReasons(data);
      }
    });
  }

  onSaveLostReasons(){
    switch (this.action) {
      case 'add': {
        this.addLostReasons();
        break;
      }
      case 'edit': {
        this.updateLostReasons();
        break;
      }
    }
  }

  deleteLostReasons(data: any) {
    this.lostReasonsService.deleteLostReasons(data.id).subscribe({
      next: (n) => {
        this.getLostReasons();
      },
      error: (e) => { },
      complete: () => { }
    })
  }

  addLostReasons() {
    this.lostReasonsService.addLostReasons(this.form.value).subscribe({
      next: (n) => {
        this.getLostReasons();
      },
      error: (e) => { },
      complete: () => { }
    })
  }

  updateLostReasons() {
    this.lostReasonsService.updateLostReasons(this.form.value).subscribe({
      next: (n) => {
        this.getLostReasons();
      },
      error: (e) => { },
      complete: () => { }
    })
  }

}
