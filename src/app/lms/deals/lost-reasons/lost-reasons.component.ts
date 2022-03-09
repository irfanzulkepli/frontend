import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
      displayName: 'Created by',
      columnDef: 'createdBy.fullName',
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
  // public lostReasons = LOSTREASONS;
  public lostReasons: any[] = [];
  public lostReasonsData: any = {};

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
        this.lostReasons = n.payload;
      },
      error: (e) => { },
      complete: () => { }
    })
  }

  /**
   * Open modal
   * @param content modal content
   */
  openModal(content: any, lostReasonsData: any) {
    this.form.patchValue({
      id: lostReasonsData.id,
      lostReason: lostReasonsData.lostReason
    })
    this.modalService.open(content);
  }

  /**
   * Open center modal
   * @param centerDataModal center modal data
   */
  deleteModal() {
    const modalRef = this.modalService.open(DeleteModal2Component, { centered: true });

    modalRef.result.then(result => console.log('result: ', result));
  }

  deleteLostReasons() {
    this.lostReasonsService.deleteLostReasons(this.lostReasonsData.id).subscribe({
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
