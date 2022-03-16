import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ThemeService } from 'ng2-charts';
import { DeleteModal2Component } from '../../components/delete-modal2/delete-modal2.component';
import { LMSService } from '../../lms-service';
import { DealsService } from '../deals.service';
import { PipelinesService } from '../pipelines.service';
import { StagesService } from '../stages.service';

@Component({
  selector: 'app-pipeline-details',
  templateUrl: './pipeline-details.component.html',
  styleUrls: ['./pipeline-details.component.scss'],
})
export class PipelineDetailsComponent implements OnInit {

  public action: string = '';
  public pipelineViewId: string = '';
  public defaultStages;
  public stages;
  public filteredStages;

  pipelineForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', Validators.required),
    stages: new FormArray([])
  });

  deleteStageForm = new FormGroup({
    moveAllStages: new FormControl(''),
    oldStagesId: new FormControl(''),
    newStagesId: new FormControl('')
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private lmsService: LMSService,
    private stagesService: StagesService,
    private dealsService: DealsService,
    private pipelinesService: PipelinesService,
    private router: Router,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.pipelineViewId = this.activatedRoute.snapshot.paramMap.get('id');
    if (!this.pipelineViewId) {
      this.action = 'Add';
      this.getDefaultStagesList();
      this.pipelineViewId = '';
    } else {
      this.action = 'Edit';
      this.getStagesListByPipelineId();
    }
  }

  addStageToPipelineForm(data?: any) {
    let stages: FormArray = this.pipelineForm.get('stages') as FormArray;

    let stageForm: FormGroup = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', Validators.required),
      probability: new FormControl('', Validators.required),
      priority: new FormControl('', Validators.required),
    });

    stageForm.patchValue({
      id: data ? data.id : '',
      name: data ? data.name : '',
      probability: data ? data.probability : '',
      priority: data ? data.priority : ''
    });

    stages.push(stageForm);
  }

  getStagesControl() {
    let stages: FormArray = this.pipelineForm.get('stages') as FormArray;
    return stages.controls;
  }

  drop(event: CdkDragDrop<string[]>) {
    // moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }

  savePipelines() {
    if (this.pipelineForm.value.id) {
      console.log("update");
      this.updatePipelines();
    } else {
      this.createPipelines();
    }
  }

  deletePipelines() {
    if (this.deleteStageForm.value.moveAllStages === 'true') {
      this.updateAllDealsToNewStage();
    } else {
      this.deleteStages();
    }
  }

  onClickDelete(content: any, oldStagesId: number) {
    this.deleteStageForm.reset();

    this.deleteStageForm.patchValue({
      oldStagesId: oldStagesId
    });

    this.filteredStages = [];
    let dealsCount: number = 0;
    this.stages.forEach(element => {
      if (element.id != oldStagesId) {
        this.filteredStages.push(element);
      } else {
        dealsCount = element.dealsCount;
      }
    });

    if (dealsCount <= 0) {
      this.deleteConfirmation();
    } else {
      this.modalService.open(content);
    }
  }

  deleteConfirmation() {
    const modalRef = this.modalService.open(DeleteModal2Component);

    modalRef.result.then(result => {
      if (result === true) {
        this.deleteStages();
      }
    });
  }

  getStagesListByPipelineId() {
    this.stagesService.getStagesListByPipelineId(this.pipelineViewId).subscribe({
      next: (n) => {
        this.stages = n;

        this.stages.forEach(element => {
          this.addStageToPipelineForm(element);
          this.pipelineForm.patchValue({
            id: element.pipelines.id,
            name: element.pipelines.name
          })
        });
      },
      error: (e) => { },
      complete: () => { }
    })
  }

  getDefaultStagesList() {
    this.stagesService.getDefaultStagesList().subscribe({
      next: (n) => {
        this.defaultStages = n;

        this.defaultStages.forEach(element => {
          this.addStageToPipelineForm(element);
        });
      },
      error: (e) => { },
      complete: () => { }
    })
  }

  createPipelines() {
    this.pipelinesService.createPipelines(this.pipelineForm.value).subscribe({
      next: (n) => {
        this.goToPipelinePage();
      },
      error: (e) => { },
      complete: () => { }
    })
  }

  updatePipelines() {
    this.pipelinesService.updatePipelines(this.pipelineForm.value).subscribe({
      next: (n) => {
        this.goToPipelinePage();
      },
      error: (e) => { },
      complete: () => { }
    })
  }

  updateAllDealsToNewStage() {
    this.dealsService.updateAllDealsToNewStage(this.deleteStageForm.value.oldStagesId, this.deleteStageForm.value.newStagesId).subscribe({
      next: (n) => {
        this.deleteStages();
      },
      error: (e) => { },
      complete: () => { }
    })
  }

  deleteStages() {
    this.stagesService.deleteStages(this.deleteStageForm.value.oldStagesId).subscribe({
      next: (n) => {
        location.reload();
      },
      error: (e) => { },
      complete: () => { }
    })
  }

  goToPipelinePage() {
    this.router.navigateByUrl('/lms/deals/pipelines')
  }
}
