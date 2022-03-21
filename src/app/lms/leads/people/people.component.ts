import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomTableDatasource } from 'src/app/components/custom-table/custom-table.interface';
import { DeleteModal2Component } from '../../components/delete-modal2/delete-modal2.component';
import { DealsService } from '../../deals/deals.service';
import { DIRECTION, PageableRequest } from '../../interfaces/pageable-request.interface';
import { ColumnsInfo } from '../../lms-service';
import { LeadService } from '../lead.service';
import { PeopleDetailsModalComponent } from './people-details-modal/people-details-modal.component';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})

export class PeopleComponent implements OnInit {

  public columnInfos: Array<ColumnsInfo> = [
    {
      displayName: 'Name',
      columnDef: 'name',
      type: 'profile',
      profileType: 'people'
    },
    {
      displayName: 'Lead Group',
      columnDef: 'contactTypes',
      type: 'badge'
    },
    {
      displayName: 'Organization(s)',
      columnDef: 'organization',
      type: 'link',
      isList: true,
      profileType: 'organization'
    },
    {
      displayName: 'Email(s)',
      columnDef: 'emails',
      type: 'textWithBadge',
      isList: true
    },
    {
      displayName: 'Phone(s)',
      columnDef: 'phones',
      type: 'textWithBadge',
      isList: true
    },
    {
      displayName: 'Address',
      columnDef: 'address',
      type: 'address'
    },
    {
      displayName: 'Closed deal(s)',
      columnDef: 'closedDealsCount',
      type: 'number'
    },
    {
      displayName: 'Open deal(s)',
      columnDef: 'openDealsCount',
      type: 'number'
    },
    {
      displayName: 'Owner',
      columnDef: 'owner',
      type: 'combinedName'
    },
    {
      displayName: 'Tags',
      columnDef: 'tags',
      type: 'tag'
    },
    {
      displayName: 'Action',
      columnDef: 'action',
      type: 'action'
    }
  ];

  page: number = 1;
  pageSize: number = 10;
  class: string = 'primary';

  dataSource: CustomTableDatasource;

  constructor(
    private leadService: LeadService,
    private modalService: NgbModal,
    private dealService: DealsService
  ) { }

  ngOnInit() {
    this.getPeopleListing();
  }

  onAddClick() {
    const modalRef = this.modalService.open(PeopleDetailsModalComponent, { centered: true, size: 'lg', scrollable: true });

    modalRef.result.then(() => {
      this.getPeopleListing();
    });
  }

  onPageChange(ev: number) {
    const page = ev - 1;
    this.getPeopleListing(page);
  }

  onDelete(ev) {
    const modalRef = this.modalService.open(DeleteModal2Component, { centered: true });

    modalRef.result.then(confirmation => {
      if (confirmation) {
        this.leadService.deletePeople(ev.id).subscribe({
          next: () => {
            this.getPeopleListing();
          }
        });
      }
    });
  }

  onEdit(ev) {
    const modalRef = this.modalService.open(PeopleDetailsModalComponent, { centered: true, size: 'lg', scrollable: true });

    modalRef.componentInstance.peopleData = ev;
    modalRef.componentInstance.isEdit = true;

    modalRef.result.then(() => {
      this.getPeopleListing();
    });
  }

  private getPeopleListing(page: number = 0) {
    const pageableRequest: PageableRequest = {
      direction: DIRECTION.ASCENDING,
      page: page,
      size: 10,
      properties: ["id"]
    };
    this.leadService.getPage(pageableRequest, "person").subscribe({
      next: (n) => {
        this.dataSource = n;
      },

    });
  }
}
