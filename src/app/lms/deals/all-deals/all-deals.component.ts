import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { DealsModalComponent } from '../../components/deals-modal/deals-modal.component';
import { LMSService } from '../../lms-service';
import { DealsService } from '../deals.service';
import { PipelinesService } from '../pipelines.service';

@Component({
  selector: 'app-all-deals',
  templateUrl: './all-deals.component.html',
  styleUrls: ['./all-deals.component.scss']
})
export class AllDealsComponent implements OnInit {

  // deals: any[] = ALLDEALS;
  public deals: any[] = [];
  public pipelines: any[] = [];
  public stages: any[] = [];
  public persons: any[] = [];
  public users: any[] = [];
  public pipeline: any[] = [];
  public tags: any[] = [];

  page: number = 1;
  pageSize: number = 12;
  collectionSize: number = 0;
  search: string = '';
  searchInput = new Subject<string>();
  pipelineId: string = '';
  tagIds: string[] = [];
  dateFrom: string = '';
  dateTo: string = '';
  hasProposals: number = 0;

  constructor(
    private dealsService: DealsService,
    private pipelinesService: PipelinesService,
    private lmsService: LMSService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.getTagsList();
    this.getPipelinesList();
    this.getDealsPage();


    this.searchInput.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(value => {
        this.getDealsPage();
      });
  }


  addDealsModal() {
    const modalRef = this.modalService.open(DealsModalComponent);
    modalRef.componentInstance.refreshDealsListPipelineView.subscribe(($e) => {
      this.getDealsPage();
    });
  }

  getDealsPage() {
    this.deals = [];

    console.log(this.tagIds);
    let tagIds: string = '';
    this.tagIds.forEach(element => {
      tagIds = element + ',';
    });

    let pageableRequest: any = {
      page: this.page - 1,
      size: this.pageSize,
      search: this.search,
      pipelineId: this.pipelineId,
      dateFrom: this.dateFrom,
      dateTo: this.dateTo,
      tagIds: this.tagIds,
      hasProposals: this.hasProposals
    }

    this.dealsService.getDealsPage(pageableRequest).subscribe({
      next: (n) => {
        this.collectionSize = n.totalSize;
        this.deals = n.payload;
      },
      error: (e) => { },
      complete: () => { }
    });
  }

  getPipelinesList() {
    this.pipelinesService.getPipelinesList().subscribe({
      next: (n) => {
        this.pipeline = n;
      },
      error: (e) => { },
      complete: () => { }
    })
  }

  getTagsList() {
    this.lmsService.getTagsList().subscribe({
      next: (n) => {
        this.tags = n;
      },
      error: (e) => { },
      complete: () => { }
    })
  }

}
