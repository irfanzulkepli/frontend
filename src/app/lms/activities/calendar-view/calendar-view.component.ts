import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarOptions, EventClickArg } from '@fullcalendar/angular';
import { ACTIVITIES } from '../../data/activities.data';
import timeGridPlugin from '@fullcalendar/timegrid';
import { ActivityModalComponent } from '../../components/activity-modal/activity-modal.component';

@Component({
  selector: 'app-calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.scss']
})
export class CalendarViewComponent implements OnInit {

  @ViewChild('editmodalShow') editmodalShow: TemplateRef<any>;

  formData: FormGroup;
  public activitiesData = ACTIVITIES;

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
    plugins: [timeGridPlugin],
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
          end: new Date(activityEndtDate),
          cardData: activity
        }
      );
    }
  }

  handleDateClick(clickInfo) {
    const modalRef = this.modalService.open(ActivityModalComponent, { size: 'lg', scrollable: true });

    modalRef.componentInstance.dateString = clickInfo.dateStr;
  }

  handleEventClick(clickInfo: EventClickArg) {
    const modalRef = this.modalService.open(ActivityModalComponent, { size: 'lg', scrollable: true });
    modalRef.componentInstance.isEdit = true;
    modalRef.componentInstance.activityData = clickInfo.event.extendedProps.cardData;
  }

  closeEventModal() {
    this.formData = this.formBuilder.group({
      title: '',
      category: '',
    });
    this.modalService.dismissAll();
  }
}