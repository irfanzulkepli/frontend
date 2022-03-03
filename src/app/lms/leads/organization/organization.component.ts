import { Component, OnInit } from '@angular/core';
import { ORGANIZATION } from '../../data/organization-data';
import { ColumnsInfo } from '../../lms-service';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent implements OnInit {

  public organizations = ORGANIZATION;

  columnsInfo: Array<ColumnsInfo> = [
    {
      displayName: 'Name',
      columnDef: 'name',
      type: 'profile'
    },
    {
      displayName: 'Lead Group',
      columnDef: 'contactType',
      type: 'badge'
    },
    {
      displayName: 'Person(s)',
      columnDef: 'persons',
      type: 'link',
      isList: true
    },
    {
      displayName: 'Address',
      columnDef: 'address',
      type: 'address'
    },
    {
      displayName: 'Closed deal(s)',
      columnDef: 'closeDealsCount',
      type: 'number'
    },
    {
      displayName: 'Open deal(s)',
      columnDef: 'openDealsCount',
      type: 'number'
    },
    {
      displayName: 'Owner',
      columnDef: 'owner.fullName',
      type: 'text'
    },
    {
      displayName: 'Tags',
      columnDef: 'tags',
      type: 'tag'
    },
    {
      displayName: 'Action',
      columnDef: 'action',
      type: 'action'
    }
  ];

  constructor(
  ) { }

  ngOnInit() {

  }
}
