import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { DealsModalComponent } from '../../components/deals-modal/deals-modal.component';
import { LMSService } from '../../lms-service';
import { DealsService } from '../deals.service';
import { LostReasonsService } from '../lost-reasons.service';
import { PipelinesService } from '../pipelines.service';

@Component({
  selector: 'app-pipeline-view',
  templateUrl: './pipeline-view.component.html',
  styleUrls: ['./pipeline-view.component.scss']
})
export class PipelineViewComponent implements OnInit, OnDestroy {

  // public pipelineView = PIPELINEVIEW;
  // public pipeline = PIPELINES;
  // public stages = STAGES;
  // public dealsByStageId = [[], [], [], [], [], [], []];
  // public dealsValueByStageId = [0, 0, 0, 0, 0, 0, 0];
  // public dealsProbabilityByStageId = [0, 0, 0, 0, 0, 0, 0];
  // public stageTypes: any[] = [
  //   { id: 0, name: "Lead generation" },
  //   { id: 1, name: "Lead nurturing" },
  //   { id: 2, name: "Marketing qualified lead" },
  //   { id: 3, name: "Sales accepted lead" },
  //   { id: 4, name: "Sales qualified lead" },
  //   { id: 5, name: "Closed deals" },
  //   { id: 6, name: "Post-sale" }
  // ];

  public pipelineViewId: string = '';
  public dealsByStageId = [];
  public dealsValueByStageId = [];

  public pipelineView;
  public pipeline;
  public stages;
  public lostReasons;
  public tags;
  /** Subject that emits when the component has been destroyed. */
  protected _onDestroy = new Subject<void>();

  constructor(
    private modalService: NgbModal,
    private lmsService: LMSService,
    private pipelinesService: PipelinesService,
    private dealsService: DealsService,
    private lostReasonsService: LostReasonsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.pipelineViewId = this.activatedRoute.snapshot.paramMap.get('id');
    if (!this.pipelineViewId) {
      this.pipelineViewId = '';
    }

    this.getLostReasonsList();
    this.getPipelinesList();
    this.getPipelineViewData();
    this.getTagsList();
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  getInitials(fullName: string) {
    const splitName = fullName.split(' ')
    const ownerInitials = splitName[0].charAt(0) + splitName[1].charAt(0);
    return ownerInitials.toUpperCase();
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log('Transfering item to new container')
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  addModal() {
    const modalRef = this.modalService.open(DealsModalComponent);
  }

  getPipelineViewData() {
    this.getStagesListByPipelineId();
    this.getDealsListByPipelineId();
  }

  getStagesListByPipelineId() {
    this.lmsService.getStagesListByPipelineId(this.pipelineViewId).subscribe({
      next: (n) => {
        this.stages = n;
      },
      error: (e) => { },
      complete: () => { }
    })
  }

  getPipelinesList() {
    this.pipelinesService.getPipelinesList().subscribe({
      next: (n) => {
        this.pipeline = n;
        if (!this.pipelineViewId && this.pipeline.length > 0) {
          this.pipelineViewId = this.pipeline[0].id + '';
        }
      },
      error: (e) => { },
      complete: () => { }
    })
  }

  getDealsListByPipelineId() {
    this.dealsByStageId = [];
    this.dealsValueByStageId = [];
    this.dealsService.getDealsListByPipelineId(this.pipelineViewId).subscribe({
      next: (n) => {
        this.pipelineView = n;

        this.stages.forEach((element: any) => {
          this.dealsByStageId.push([]);
          this.dealsValueByStageId.push(0);
        });

        this.pipelineView.map(deal => {
          this.stages.forEach((element: any, i: number) => {
            if (deal.stages.id == element.id) {
              this.dealsByStageId[i].push(deal);
              this.dealsValueByStageId[i] += deal.value;
            }
          });
        });
      },
      error: (e) => { },
      complete: () => { }
    })
  }

  getLostReasonsList() {
    this.lostReasonsService.getLostReasonsList().subscribe({
      next: (n) => {
        this.lostReasons = n;
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
