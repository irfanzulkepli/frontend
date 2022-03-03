import { Component, OnInit } from '@angular/core';
import { ACTIVITIES } from '../../data/activities.data';
import { ColumnsInfo } from '../../lms-service';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.scss']
})
export class ActivityListComponent implements OnInit {

  columnsInfo: Array<ColumnsInfo> = [
    {
      displayName: 'Done',
      columnDef: 'checkbox',
      type: 'checkbox'
    },
    {
      displayName: 'Activity',
      columnDef: 'activityType.name',
      type: 'text'
    },
    {
      displayName: 'Title',
      columnDef: 'title',
      type: 'link',
      isList: false,
      showIcon: false
    },
    {
      displayName: 'Related to',
      columnDef: 'contextable.name',
      type: 'text'
    },
    {
      displayName: 'Owner',
      columnDef: 'createdBy.fullName',
      type: 'text'
    },
    {
      displayName: 'Starting schedule',
      columnDef: 'start',
      type: 'dateTime'
    },
    {
      displayName: 'Ending schedule',
      columnDef: 'end',
      type: 'dateTime'
    },
    {
      displayName: 'Action',
      columnDef: 'action',
      type: 'action'
    }
  ];

  dataSource = ACTIVITIES;

  constructor() { }

  ngOnInit() {
  }

}
