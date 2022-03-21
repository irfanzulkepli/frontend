import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { CustomTableDatasource } from './custom-table.interface';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent implements OnInit {

  @Input() dataSource: CustomTableDatasource;
  @Input() columnsInfo: Array<any>;
  @Input() requirePaginator: boolean = true;
  @Output() onPageEmit = new EventEmitter();
  @Output() onActionClick = new EventEmitter();
  @Output() onEditClick = new EventEmitter();
  @Output() onDeleteClick = new EventEmitter();

  displayedColumns: string[];

  page: number = 1;
  pageSize: number = 10;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.displayedColumns = this.columnsInfo.map(column => {
      return column.columnDef;
    });
    console.log('displayedColumns: ', this.displayedColumns);

  }

  redirect(id, profileType: string) {
    if (profileType == 'pipeline-view')
      this.router.navigate([`/lms/deals/${profileType}/${id}`]);
    else
      this.router.navigate([`/lms/leads/${profileType}/${id}`]);
  }


  getInitial(name) {
    if (name) {
      const fullName = name.split(' ');

      let initials;
      if (fullName.length > 1) {
        initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
      }
      else {
        initials = fullName.shift().charAt(0);
      }
      return initials.toUpperCase();
    }
    else {
      return 'AZ';
    }
  }

  getAddress(element) {
    let addressString = '';
    if (element.address)
      addressString = addressString.concat(addressString ? `,${element.address}` : element.address);
    if (element.area)
      addressString = addressString.concat(addressString ? `,${element.area}` : element.area);
    if (element.zipCode)
      addressString = addressString.concat(addressString ? `,${element.zipCode}` : element.zipCode);
    if (element.city)
      addressString = addressString.concat(addressString ? `,${element.city}` : element.city);
    if (element.state)
      addressString = addressString.concat(addressString ? `,${element.state}` : element.state);
    if (element.country)
      addressString = addressString.concat(addressString ? `,${element.country?.name}` : element.country?.name);

    return addressString;
  }

  getStatus(status: string) {
    switch (status) {
      case 'status_done': {
        return 'Done';
        break;
      }
      case 'status_open': {
        return 'Open';
        break;
      }
    }
  }

  onIconClick(action: string, data) {
    switch (action) {
      case 'edit': {
        this.onEditClick.emit(data);
        break;
      }
      case 'delete': {
        this.onDeleteClick.emit(data);
        break;
      }
    }
  }

  onEdit(data) {
    this.onEditClick.emit(data);
  }

  onDelete(data) {
    this.onDeleteClick.emit(data);
  }

  convert24HTo12H(timestring: string) {
    return moment(timestring, 'HH:mm:ss').format('hh:mm A');
  }

  showPagination(): boolean {
    return this.dataSource.limit < this.dataSource.totalSize;
  }

  onPageChange(ev: number) {
    this.onPageEmit.emit(ev);
  }
}
