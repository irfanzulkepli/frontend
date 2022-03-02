import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarOptions, EventClickArg, EventApi, EventInput } from '@fullcalendar/angular';
import { PERSON } from '../../data/person-data';
import { USER } from '../../data/user-data';
import { ACTIVITIES } from '../../data/activities.data';
import timeGridPlugin from '@fullcalendar/timegrid';

@Component({
  selector: 'app-calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.scss']
})
export class CalendarViewComponent implements OnInit {

  @ViewChild('activityContent') modalShow: TemplateRef<any>;
  @ViewChild('editmodalShow') editmodalShow: TemplateRef<any>;

  formData: FormGroup;
  public person = PERSON;
  public userData = USER;
  public activitiesData = ACTIVITIES;
  public activities: string[] = ["Call", "Meeting", "Email", "Task", "Deadline", "Others"]
  public activityTypes: string[] = ["Deal", "Person", "Organization"]
  public startDate: any;
  public startTime = "00:00";
  public endDate: any;
  public endTime = "00:00";

  participantsControl = new FormControl([]);
  collaboratorsControl = new FormControl([]);
  calendarEvents: any[] = [];
  newEventDate: any;
  editEvent: any;
  isDate: boolean;
  
  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder
  ) { }

  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'title',
      center: 'prev,today,next',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    plugins: [ timeGridPlugin ],
    initialView: "dayGridMonth",
    themeSystem: "bootstrap",
    initialEvents: this.calendarEvents,
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    dateClick: this.handleDateClick.bind(this),
    eventClick: this.handleEventClick.bind(this),
    // eventsSet: this.handleEvents.bind(this),
    eventTimeFormat: { // like '14:30:00'
      hour: '2-digit',
      minute: '2-digit',
      meridiem: false,
      hour12: true
    }
  };
  

  ngOnInit() { 
    this.getCalendarEvents();
  }

  getCalendarEvents() {
    for (var activity of this.activitiesData) {
      let activityStartDate = Date.parse(activity.startedAt + " " + activity.startTime)
      let activityEndtDate = Date.parse(activity.endedAt + " " + activity.endTime)
      this.calendarEvents.push(
        {
          id: activity.id.toString(),
          title: activity.title,
          start: new Date(activityStartDate),
          end: new Date(activityEndtDate)
        }
      )
    }
  }

  addMinutes(minutes) {
    let currentDate: Date;
    if (this.isDate) {
      currentDate = new Date(Date.parse(this.editEvent.date))
    } else {
      currentDate = new Date(Date.parse(this.editEvent.start));
    }
    const newDateTime = new Date(currentDate.getTime() + parseInt(minutes)*60000);
    const newDate = newDateTime.getFullYear()+"-"+(newDateTime.getMonth()+1).toString().padStart(2,'0')+"-"+newDateTime.getDate().toString().padStart(2,'0');
    const newTime = newDateTime.getHours().toString().padStart(2,'0')+':'+newDateTime.getMinutes().toString().padStart(2,'0');
    (<HTMLInputElement>document.getElementById('endDateInput')).value = newDate;
    (<HTMLInputElement>document.getElementById('endTimeInput')).value = newTime;
  }

  onParticipantRemoved(participant: string) {
    const participants = this.participantsControl.value as string[];
    this.removeFirst(participants, participant);
    this.participantsControl.setValue(participants); // To trigger change detection
  }

  onCollaboratorRemoved(collaborator: string) {
    const collaborators = this.collaboratorsControl.value as string[];
    this.removeFirst(collaborators, collaborator);
    this.collaboratorsControl.setValue(collaborators); // To trigger change detection
  }

  private removeFirst<T>(array: T[], toRemove: T): void {
    const index = array.indexOf(toRemove);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }

  handleDateClick(clickInfo: EventClickArg) {
    this.isDate = true;
    this.editEvent = clickInfo;
    this.startDate = this.editEvent.dateStr;
    this.endDate = this.editEvent.dateStr;
    this.startTime = "00:00";
    this.endTime = "00:00";
    this.modalService.open(this.modalShow, {size: 'lg'});
  }

  handleEventClick(clickInfo: EventClickArg) {
    this.isDate = false;
    this.editEvent = clickInfo.event;
    let start = new Date(Date.parse(this.editEvent.start));
    let end = new Date(Date.parse(this.editEvent.end));
    let startDate = start.getFullYear()+"-"+(start.getMonth()+1).toString().padStart(2,'0')+"-"+start.getDate().toString().padStart(2,'0');
    let endDate = end.getFullYear()+"-"+(end.getMonth()+1).toString().padStart(2,'0')+"-"+end.getDate().toString().padStart(2,'0');
    let startTime = start.getHours().toString().padStart(2,'0')+':'+start.getMinutes().toString().padStart(2,'0');
    let endTime = end.getHours().toString().padStart(2,'0')+':'+end.getMinutes().toString().padStart(2,'0');

    this.modalService.open(this.modalShow, {size: 'lg'});
    this.startDate = startDate;
    this.startTime = startTime;
    this.endDate = endDate;
    this.endTime = endTime;
    (<HTMLInputElement>document.getElementById('formActivityTitleInput')).value = this.editEvent.title;
  }

  closeEventModal() {
    this.formData = this.formBuilder.group({
      title: '',
      category: '',
    });
    this.modalService.dismissAll();
  }
}