import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomTableDatasource } from 'src/app/components/custom-table/custom-table.interface';
import { ActivityModalComponent } from '../../components/activity-modal/activity-modal.component';
import { DeleteModal2Component } from '../../components/delete-modal2/delete-modal2.component';
import { DIRECTION, PageableRequest } from '../../interfaces/pageable-request.interface';
import { ColumnsInfo } from '../../lms-service';
import { ActivitiesService } from '../activities.service';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.scss']
})
export class ActivityListComponent implements OnInit {

  public profileType;

  columnsInfo: Array<ColumnsInfo> = [
    {
      displayName: 'Done',
      columnDef: 'checkbox',
      type: 'checkbox'
    },
    {
      displayName: 'Activity',
      columnDef: 'activityType.name',
      type: 'text'
    },
    {
      displayName: 'Title',
      columnDef: 'title',
      type: 'activityLink',
      isList: false,
      showIcon: false,
      showBadge: false,
      contextableType: 'contextableType'
    },
    {
      displayName: 'Related to',
      columnDef: 'contextableType',
      type: 'activityLink',
      isList: false,
      showIcon: false,
      showBadge: true
    },
    {
      displayName: 'Owner',
      columnDef: 'createdBy',
      type: 'combinedName'
    },
    {
      displayName: 'Starting schedule',
      columnDef: 'start',
      type: 'dateTime'
    },
    {
      displayName: 'Ending schedule',
      columnDef: 'end',
      type: 'dateTime'
    },
    {
      displayName: 'Action',
      columnDef: 'action',
      type: 'action'
    }
  ];

  dataSource: CustomTableDatasource;

  constructor(
    private activitiesService: ActivitiesService,
    private modalService: NgbModal,
  ) { }

  ngOnInit() {
    this.getActivityListing();
  }

  private getActivityListing(page: number = 0) {
    const pageableRequest: PageableRequest = {
      direction: DIRECTION.DESCENDING,
      page: page,
      size: 10,
      properties: ["updatedAt"]
    };
    this.activitiesService.getActivitiesPage(pageableRequest).subscribe({
      next: (n) => {
        this.dataSource = n;

        this.profileType = n.contextableType;
      },

    });
  }

  onPageChange(ev: number) {
    const page = ev - 1;
    this.getActivityListing(page);
  }

  onDelete(ev) {
    const modalRef = this.modalService.open(DeleteModal2Component, { centered: true });

    modalRef.result.then(confirmation => {
      if (confirmation) {
        this.activitiesService.deleteActivityById(ev.id).subscribe({
          next: () => {
            this.getActivityListing();
          }
        });
      }
    });
  }

  markAsDone(ev) {
    this.activitiesService.markAsDoneById(ev.id).subscribe({
      next: () => {
        this.getActivityListing();
      }
    });
    return
  }

  activityModal() {
    const modalRef = this.modalService.open(ActivityModalComponent, { size: 'lg', scrollable: true });
    modalRef.result.then(result => result);
  }

  editActivityModal(ev) {
    const modalRef = this.modalService.open(ActivityModalComponent, { size: 'lg', scrollable: true });
    modalRef.componentInstance.activityData = ev;
    modalRef.componentInstance.isEdit = true;

    modalRef.result.then(result => result);
  }


}
