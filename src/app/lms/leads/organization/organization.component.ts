import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomTableDatasource } from 'src/app/components/custom-table/custom-table.interface';
import { DeleteModal2Component } from '../../components/delete-modal2/delete-modal2.component';
import { DIRECTION, PageableRequest } from '../../interfaces/pageable-request.interface';
import { ColumnsInfo } from '../../lms-service';
import { LeadService } from '../lead.service';
import { OrganizationDetailsModalComponent } from './organization-details-modal/organization-details-modal.component';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent implements OnInit {

  dataSource: CustomTableDatasource;
  columnsInfo: Array<ColumnsInfo> = [
    {
      displayName: 'Name',
      columnDef: 'name',
      type: 'profile',
      profileType: 'organization'
    },
    {
      displayName: 'Lead Group',
      columnDef: 'contactTypes',
      type: 'badge'
    },
    {
      displayName: 'Person(s)',
      columnDef: 'persons',
      type: 'link',
      isList: true,
      profileType: 'people'
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

  constructor(
    private leadService: LeadService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.getOrganizationListing();
  }

  addOrganization() {
    const modalRef = this.modalService.open(OrganizationDetailsModalComponent, { centered: true, size: 'lg', scrollable: true });

    modalRef.result.then(() => {
      this.getOrganizationListing();
    });
  }

  onDelete(ev) {
    const modalRef = this.modalService.open(DeleteModal2Component, { centered: true });

    modalRef.result.then(confirmation => {
      if (confirmation) {
        this.leadService.deleteOrganization(ev.id).subscribe({
          next: () => {
            this.getOrganizationListing();
          }
        });
      }
    });
  }

  onEdit(ev) {
    const modalRef = this.modalService.open(OrganizationDetailsModalComponent, { centered: true, size: 'lg', scrollable: true });

    modalRef.componentInstance.organizationData = ev;
    modalRef.componentInstance.isEdit = true;

    modalRef.result.then(() => {
      this.getOrganizationListing();
    });
  }

  onPageChange(ev: number) {
    const page = ev - 1;
    this.getOrganizationListing(page);
  }

  private getOrganizationListing(page: number = 0) {
    const pageableRequest: PageableRequest = {
      direction: DIRECTION.descending,
      page: page,
      size: 10,
      properties: ["updatedAt"]
    };
    this.leadService.getPage(pageableRequest, "organization").subscribe({
      next: (n) => {
        this.dataSource = n;
      },

    });
  }
}
