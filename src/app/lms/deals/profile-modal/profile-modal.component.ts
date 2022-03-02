import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common'
import { FormControl } from '@angular/forms';
import { PERSON } from '../../data/person-data';

@Component({
  selector: 'app-profile-modal',
  templateUrl: './profile-modal.component.html',
  styleUrls: ['./profile-modal.component.scss'],
})
export class ProfileModalComponent implements OnInit {

  @Input() inputData;
  public person = PERSON;
  stageTypes: string[] = ["Lead generation", "Lead nurturing", "Marketing qualified lead", "Sales accepted lead", "Sales qualified lead", "Closed deals", "Post-sale"];
  personControl = new FormControl([]);

  constructor(public activeModal: NgbActiveModal, private datepipe: DatePipe) { }

  ngOnInit() {}

  onPersonRemoved(person: string) {
    const personArray = this.personControl.value as string[];
    this.removeFirst(personArray, person);
    this.personControl.setValue(personArray); // To trigger change detection
  }

  private removeFirst<T>(array: T[], toRemove: T): void {
    const index = array.indexOf(toRemove);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }

  getInitials(fullName: string) {
    const splitName = fullName.split(' ');
    let ownerInitials: string;
    if (splitName.length > 1) {
      ownerInitials = splitName[0].charAt(0) + splitName[1].charAt(0);
    } else {
      ownerInitials = splitName[0].charAt(0);
    }
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
