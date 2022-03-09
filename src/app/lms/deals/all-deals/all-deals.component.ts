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

  constructor(
    private dealsService: DealsService,
    private pipelinesService: PipelinesService,
    private lmsService: LMSService
  ) { }

  ngOnInit() {
    this.getDealsPage();
    this.getPipelinesList();
    this.getStagesList();
    // this.getPersonList();
    this.getUsersList();
  }

  getDealsPage() {
    this.deals = [];
    this.dealsService.getDealsPage().subscribe({
      next: (n) => {
        this.deals = n.payload;
      },
      error: (e) => { },
      complete: () => { }
    })
  }

  getPipelinesList() {
    this.pipelinesService.getPipelinesList().subscribe({
      next: (n) => {
        this.pipelines = n;
      },
      error: (e) => { },
      complete: () => { }
    })
  }

  getStagesList() {
    this.lmsService.getStagesList().subscribe({
      next: (n) => {
        this.stages = n;
      },
      error: (e) => { },
      complete: () => { }
    })
  }

  getUsersList() {
    this.lmsService.getUsersList().subscribe({
      next: (n) => {
        this.users = n;
        this.persons = n;
      },
      error: (e) => { },
      complete: () => { }
    })
  }

}
