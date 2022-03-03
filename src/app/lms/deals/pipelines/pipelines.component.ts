import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteModalComponent } from '../../components/delete-modal/delete-modal.component';
import { PIPELINES } from '../../data/pipelines.data';
import { ColumnsInfo } from '../../lms-service';

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
      type: 'text'
    },
    {
      displayName: 'No. of stage',
      columnDef: 'stageCount',
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

  public pipelines = PIPELINES;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  /**
   * Open center modal
   * @param centerDataModal center modal data
   */
  deleteModal() {
    const modalRef = this.modalService.open(DeleteModalComponent, { centered: true });

    modalRef.result.then(result => result);
  }

}
