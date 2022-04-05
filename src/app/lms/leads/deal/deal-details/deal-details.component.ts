import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DealsService } from 'src/app/lms/deals/deals.service';
import { LostReasonsService } from 'src/app/lms/deals/lost-reasons.service';
import { StagesService } from 'src/app/lms/deals/stages.service';

@Component({
  selector: 'app-deal-details',
  templateUrl: './deal-details.component.html',
  styleUrls: ['./deal-details.component.scss'],
})
export class DealDetailsComponent implements OnInit {

  isLoading: boolean = true;
  stages;
  lostReasons;

  @Input() leadProfileData;
  @Input() profileType: string;

  pipelineForm = new FormGroup({
    stage: new FormControl('', Validators.required),
    stages: new FormArray([])
  });

  dealLostForm = new FormGroup({
    id: new FormControl('', Validators.required),
    lostReasonsId: new FormControl('', Validators.required),
    comment: new FormControl('', Validators.required)
  });

  constructor(
    private datepipe: DatePipe,
    private fb: FormBuilder,
    private stagesService: StagesService,
    private dealsService: DealsService,
    private modalService: NgbModal,
    private lostReasonsService: LostReasonsService,
  ) { }

  ngOnInit() {
    this.isLoading = false;
    this.getStagesListByPipelineId();
    this.getLostReasonsList();
  }

  getStagesListByPipelineId() {
    this.stages = [];
    this.stagesService.getStagesListByPipelineId(this.leadProfileData.pipelines.id).subscribe({
      next: (n) => {
        this.stages = n;
        this.stages.forEach(element => {
        this.addStages();
        });
      },
      error: (e) => { },
      complete: () => { }
    })
  }

  onCheckChange(event) {
    const stages = this.getStagesControl();

    if (event.target) {
      const newStage = event.target.value;

      stages.forEach((element,index) => {
        if (index <= newStage-1) {
          element.get('value').setValue(true);
        } else {
          element.get('value').setValue(false);
        }
      })
    }
  }

  initStage() {
    this.getStagesControl().forEach((element,index) => {
      if (index <= this.leadProfileData.stages.priority) {
        element.get('value').setValue(true);
      }
    })
  }

  addStages() {
    let stagesFormArray: FormArray = this.pipelineForm.get('stages') as FormArray;

    let stagesFormGroup: FormGroup = new FormGroup({
      value: new FormControl(false)
    });

    stagesFormArray.push(stagesFormGroup);
    this.initStage();
  }

  getStagesControl() {
    let stages: FormArray = this.pipelineForm.get('stages') as FormArray;
    return stages.controls;
  }

  getTimeLapsed() {
    let endTime = new Date();
    const dateCreated = this.datepipe.transform(this.leadProfileData.createdAt, 'MM-dd-yyyy h:mm:ss a');
    let startTime = new Date(dateCreated)
    let timeLapsed = endTime.getTime() - startTime.getTime();
    let timediff = timeLapsed / 1000;

    timediff = Math.floor(timediff / 60);
    let minutes = timediff % 60;
    let minutesAsString = minutes < 10 ? "0" + minutes : minutes;
    timediff = Math.floor(timediff / 60);
    let hours = timediff % 24;
    timediff = Math.floor(timediff / 24);
    let days = timediff;
    timediff = Math.floor(timediff / 30);
    let months = timediff;
    let totalHours = hours + (days * 24); // add days to hours
    let totalHoursAsString = totalHours < 10 ? "0" + totalHours : totalHours;

    if (totalHoursAsString === "00") {
      return minutesAsString + " minutes";
    } else {
      if (totalHours < 24) {
        return totalHoursAsString + " hours";
      }
      else if (days < 30) {
        return days.toString() + " days";
      }
      else {
        return months.toString() + " months";
      }
    }
  }

  openLostModal(content: any) {
    this.modalService.open(content);
    this.dealLostForm.patchValue({
      id: this.leadProfileData.id,
      lostReasonsId: this.lostReasons ? this.lostReasons.id : '',
      comment: this.leadProfileData.comment ? this.leadProfileData.comment : ''
    })
  }

  openWonModal(content: any) {
    this.updateDealsToWon(content);
  }

  updateDealsToWon(content: any) {
    this.dealsService.updateDealsToWon(this.leadProfileData.id).subscribe({
      next: (n) => {
        this.modalService.open(content, { centered: true });
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

  updateDealsToLost() {
    this.dealsService.updateDealsToLost(this.dealLostForm.value).subscribe({
      next: (n) => {
        this.modalService.dismissAll();
      },
      error: (e) => { },
      complete: () => { }
    })
  }
}
