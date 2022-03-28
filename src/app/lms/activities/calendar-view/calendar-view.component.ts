import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Calendar, CalendarOptions, EventClickArg, FullCalendarComponent } from '@fullcalendar/angular';
import timeGridPlugin from '@fullcalendar/timegrid';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivityModalComponent } from '../../components/activity-modal/activity-modal.component';
import { ACTIVITIES } from '../../data/activities.data';
import { DealsService } from '../../deals/deals.service';

@Component({
  selector: 'app-calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.scss']
})
export class CalendarViewComponent implements OnInit {

  @ViewChild('editmodalShow') editmodalShow: TemplateRef<any>;

  formData: FormGroup;
  // public activitiesData = ACTIVITIES;
  public activitiesData: any[] = [];

  calendarEvents: any[] = [];
  newEventDate: any;
  editEvent: any;
  isDate: boolean;

  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private dealsService: DealsService
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
    this.getDealsActivityList();
  }

  getCalendarEvents() {
    for (let a = 0; a < this.calendarEvents.length; a) {
      this.calendarEvents.splice(a, 1);
    }

    for (var activity of this.activitiesData) {
      this.calendarEvents.push({
        id: activity.id.toString(),
        title: activity.title,
        start: new Date(activity.startedAt + ' ' + activity.startTime),
        end: new Date(activity.endedAt + ' ' + activity.endTime),
        cardData: activity
      });
    }

    this.rerenderFullCalendar();
  }

  rerenderFullCalendar() {
    let appFullCalendarEl: HTMLElement = document.getElementById('appFullCalendar');
    let appFullCalendar = new Calendar(appFullCalendarEl, this.calendarOptions);
    appFullCalendar.render();
  }

  handleDateClick(clickInfo) {
    const modalRef = this.modalService.open(ActivityModalComponent, { size: 'lg', scrollable: true });

    modalRef.componentInstance.dateString = clickInfo.dateStr;

    modalRef.result.then(result => {
      if (result) {
        this.getDealsActivityList();
      }
    });
  }

  handleEventClick(clickInfo: EventClickArg) {
    const modalRef = this.modalService.open(ActivityModalComponent, { size: 'lg', scrollable: true });

    modalRef.componentInstance.isEdit = true;
    modalRef.componentInstance.activityData = clickInfo.event.extendedProps.cardData;

    modalRef.result.then(result => {
      if (result) {
        this.getDealsActivityList();
      }
    });
  }

  activityModal() {
    const modalRef = this.modalService.open(ActivityModalComponent, { size: 'lg', scrollable: true });
    modalRef.componentInstance.isEdit = false;

    modalRef.result.then(result => {
      if (result) {
        this.getDealsActivityList();
      }
    });
  }

  closeEventModal() {
    this.formData = this.formBuilder.group({
      title: '',
      category: '',
    });
    this.modalService.dismissAll();
  }

  getDealsActivityList() {
    this.activitiesData = [];
    this.dealsService.getDealsActivityList().subscribe({
      next: (n) => {
        this.activitiesData = n;
        this.getCalendarEvents();
      },
      error: (e) => { },
      complete: () => { }
    })
  }
}