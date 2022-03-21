import { Component, EventEmitter, Input, OnInit, OnChanges, Output, SimpleChanges } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomTableDatasource } from 'src/app/components/custom-table/custom-table.interface';
import { CommonService } from 'src/app/lms/common/common.service';
import { DIRECTION, PageableRequest } from 'src/app/lms/interfaces/pageable-request.interface';
import { ColumnsInfo } from 'src/app/lms/lms-service';
import { LeadService } from '../../lead.service';

@Component({
  selector: 'app-deals-card',
  templateUrl: './deals-card.component.html',
  styleUrls: ['./deals-card.component.scss']
})
export class DealsCardComponent implements OnInit, OnChanges {

  dataSource: CustomTableDatasource;
  columnsInfo: Array<ColumnsInfo> = [
    {
      displayName: 'Title',
      columnDef: 'title',
      type: 'link',
      profileType: 'deals'
    },
    {
      displayName: 'Status',
      columnDef: 'status',
      type: 'badge',
      enum: true
    },
    {
      displayName: 'Deal value',
      columnDef: 'value',
      type: 'currency'
    },
    {
      displayName: 'Contact person',
      columnDef: 'contactPerson',
      type: 'text'
    },
    {
      displayName: 'Next activity',
      columnDef: 'nextActivity',
      type: 'text'
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
    }
  ];

  @Input() leadProfileData;
  @Input() profileType: string;
  @Input() onChanges: boolean;
  @Output() onDealsEmit = new EventEmitter();

  deals;
  isLoading: boolean = true;
  isModalLoading: boolean = true;

  constructor(
    private leadService: LeadService,
    private modalService: NgbModal,
    public commonService: CommonService
  ) { }

  async ngOnInit() {
    this.getDeals();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getDeals();
    this.onChanges = false;
  }

  openDealsModal() {
    this.onDealsEmit.emit(true);
  }

  async getDeals() {
    this.isLoading = true;

    const payload: PageableRequest = {
      direction: DIRECTION.ASCENDING,
      page: 0,
      properties: ["id"],
      size: 3
    };

    this.leadService.getDealsByLeadId(this.leadProfileData.id, this.profileType, payload).subscribe({
      next: (n) => {
        this.deals = n;
        this.isLoading = false;
      }
    });
  }

  async openModal(content) {
    this.isModalLoading = true;
    const pageableRequest: PageableRequest = {
      direction: DIRECTION.ASCENDING,
      page: 0,
      properties: ["id"],
      size: 10
    }

    this.modalService.open(content, { size: 'xl', centered: true, scrollable: true });
    this.dataSource = await this.leadService.getDealsByLeadId(this.leadProfileData.id, this.profileType, pageableRequest,).toPromise();
    this.isModalLoading = false;
  }
}
