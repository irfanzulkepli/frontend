import { Component, OnDestroy, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PIPELINEVIEW } from '../../data/pipeline-view.data';
import { PIPELINES } from '../../data/pipelines.data';
import { STAGES } from '../../data/stages.data';
import { Subject } from 'rxjs';
import { DealsModalComponent } from '../../components/deals-modal/deals-modal.component';

@Component({
  selector: 'app-pipeline-view',
  templateUrl: './pipeline-view.component.html',
  styleUrls: ['./pipeline-view.component.scss']
})
export class PipelineViewComponent implements OnInit, OnDestroy {

  public pipelineView = PIPELINEVIEW;
  public pipeline = PIPELINES;
  public stages = STAGES;
  public dealsByStageId = [[], [], [], [], [], [], []];
  public dealsValueByStageId = [0, 0, 0, 0, 0, 0, 0];
  public dealsProbabilityByStageId = [0, 0, 0, 0, 0, 0, 0];
  public stageTypes: any[] = [
    { id: 0, name: "Lead generation" },
    { id: 1, name: "Lead nurturing" },
    { id: 2, name: "Marketing qualified lead" },
    { id: 3, name: "Sales accepted lead" },
    { id: 4, name: "Sales qualified lead" },
    { id: 5, name: "Closed deals" },
    { id: 6, name: "Post-sale" }
  ];
  /** Subject that emits when the component has been destroyed. */
  protected _onDestroy = new Subject<void>();

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    this.pipelineView.map(deal => {
      this.dealsByStageId[deal.stageId - 1].push(deal);
      this.dealsValueByStageId[deal.stageId - 1] += deal.value;
    })

    this.stages.map(stage => {
      if (stage.id < 7) {
        this.dealsProbabilityByStageId[stage.id - 1] = stage.probability;
      }
    })
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
}
