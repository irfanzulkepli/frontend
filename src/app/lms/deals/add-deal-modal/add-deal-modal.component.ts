import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-add-deal-modal',
  templateUrl: './add-deal-modal.component.html',
  styleUrls: ['./add-deal-modal.component.scss'],
})
export class AddDealModalComponent implements OnInit {

  @Input() inputData;
  stageTypes: string[] = ["Lead generation", "Lead nurturing", "Marketing qualified lead", "Sales accepted lead", "Sales qualified lead", "Closed deals", "Post-sale"];

  constructor(public activeModal: NgbActiveModal, private datepipe: DatePipe) { }

  ngOnInit() {}

  getInitials(fullName: string) {
    const splitName = fullName.split(' ')
    const ownerInitials = splitName[0].charAt(0) + splitName[1].charAt(0);
    return ownerInitials.toUpperCase();
  }

  getStage(stageId: number) {
    return this.stageTypes[stageId-1]
  }

  getTimeLapsed() {
    let endTime = new Date();
    const dateCreated = this.datepipe.transform(this.inputData.createdAt, 'MM-dd-yyyy h:mm:ss a');
    let startTime = new Date(dateCreated)
    let timeLapsed = endTime.getTime() - startTime.getTime();
    let timediff = timeLapsed/1000;

    timediff = Math.floor(timediff / 60);
    let minutes = timediff % 60;
    let minutesAsString = minutes < 10 ? "0" + minutes : minutes;
    timediff = Math.floor(timediff / 60);
    let hours = timediff % 24;
    timediff = Math.floor(timediff / 24);
    let days = timediff;
    let totalHours = hours + (days * 24); // add days to hours
    let totalHoursAsString = totalHours < 10 ? "0" + totalHours : totalHours;

    if (totalHoursAsString === "00") {
        return minutesAsString + " minutes";
      } else {
        if (totalHours < 24 ) {
          return totalHoursAsString + " hours " + minutesAsString + " minutes" ;
        }
        else {
          return days.toString() + " days " + hours.toString() + " hours " + minutesAsString + " minutes" ;
        }
      }
  }

}
