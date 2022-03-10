import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteModal2Component } from '../../components/delete-modal2/delete-modal2.component';
import { ColumnsInfo } from '../../lms-service';
import { PipelinesService } from '../pipelines.service';

@Component({
  selector: 'app-pipelines',
  templateUrl: './pipelines.component.html',
  styleUrls: ['./pipelines.component.scss']
})
export class PipelinesComponent implements OnInit {

  public columnsInfo: Array<ColumnsInfo> = [
    {
      displayName: 'Name',
      columnDef: 'name',
      type: 'link',
      isList: false,
      showIcon: false
    },
    {
      displayName: 'Total deal value',
      columnDef: 'totalDealValue',
      type: 'currency'
    },
    {
      displayName: 'No. of deals',
      columnDef: 'dealsCount',
      type: 'number'
    },
    {
      displayName: 'No. of stage',
      columnDef: 'stagesCount',
      type: 'number'
    },
    {
      displayName: 'Active',
      columnDef: 'active',
      type: 'text'
    },
    {
      displayName: 'Created date',
      columnDef: 'createdAt',
      type: 'date'
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

  public pipelines;

  constructor(
    private modalService: NgbModal,
    private pipelinesService: PipelinesService
  ) { }

  ngOnInit() {
    this.getPipelines();
  }

  getPipelines() {
    this.pipelines = [];
    this.modalService.dismissAll();
    this.pipelinesService.getPipelinesPage().subscribe({
      next: (n) => {
        this.pipelines = n.payload;
      },
      error: (e) => { },
      complete: () => { }
    })
  }

  /**
   * Open center modal
   * @param centerDataModal center modal data
   */
  deleteModal(data: any) {
    const modalRef = this.modalService.open(DeleteModal2Component, { centered: true });

    modalRef.result.then(result => {
      if (result === true) {
        this.deletePipelines(data);
      }
    });
  }

  editPipelines(data: any) {
    console.log(data);
    console.log("edit");
  }

  deletePipelines(data: any) {
    this.pipelinesService.deletePipelines(data.id).subscribe({
      next: (n) => {
        this.getPipelines();
      },
      error: (e) => { },
      complete: () => { }
    })
  }

}
