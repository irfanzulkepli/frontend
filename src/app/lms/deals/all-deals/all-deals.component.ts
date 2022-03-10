import { Component, OnInit } from '@angular/core';
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
  deals: any[] = [];
  pipelines: any[] = [];
  stages: any[] = [];
  persons: any[] = [];
  users: any[] = [];

  page: number = 1;
  pageSize: number = 12;
  collectionSize: number = 0;

  constructor(
    private dealsService: DealsService,
  ) { }

  ngOnInit() {
    this.getDealsPage();
  }

  getDealsPage() {
    this.deals = [];

    let pageableRequest: any = {
      page: this.page - 1,
      size: this.pageSize
    }

    this.dealsService.getDealsPage(pageableRequest).subscribe({
      next: (n) => {
        // this.collectionSize = n.totalSize;
        this.collectionSize = 49;
        this.deals = n.payload;
      },
      error: (e) => { },
      complete: () => { }
    });
  }

}
