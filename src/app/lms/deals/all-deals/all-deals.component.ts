import { Component, OnInit } from '@angular/core';
import { DealsService } from '../deals.service';

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
  search: string = '';

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
      size: this.pageSize,
      search: this.search
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

}
