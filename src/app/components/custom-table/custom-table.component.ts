import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent implements OnInit {

  @Input() dataSource: Array<any>;
  @Input() columnsInfo: Array<any>;
  @Input() requirePaginator: boolean = true;
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

  redirectToOrganization(id) {
    this.router.navigate([`/lms/leads/organization/${id}`]);
  }

  redirectToProfile(leadPerson) {
    console.log('leadPerson: ', leadPerson);

    this.router.navigate([`/lms/leads/people/${leadPerson.id}`]);
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

  convert24HTo12H(timestring: string) {
    return moment(timestring, 'HH:mm:ss').format('hh:mm A');
  }
}
