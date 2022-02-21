import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { ORGANIZATION } from '../../data/organization-data';
import { AdvancedSortableDirective, SortEvent } from '../advanced-sortable.directive';
import { AdvancedService } from '../advanced.service';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent implements OnInit {

  page: number = 1;
  pageSize: number = 10;
  class: string = 'primary';

  public organizations = ORGANIZATION;

  public selected: any;

  tables$: Observable<any[]>;
  total$: Observable<number>;

  leadGroupForm: FormGroup;

  isEditLeadGroup: boolean = false;
  leadGroupIdToDelete: string;

  @ViewChildren(AdvancedSortableDirective) headers: QueryList<AdvancedSortableDirective>;

  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
    public service: AdvancedService,
    private router: Router
  ) { }

  ngOnInit() {
    this.initForm();
    this.service.setData(this.organizations);
    this.tables$ = this.service.tables$;
    this.total$ = this.service.total$;
  }

  openLeadsModal(content, leadGroup?) {
    if (leadGroup) {
      this.isEditLeadGroup = true;
      this.leadGroupForm.patchValue({
        id: leadGroup.id,
        name: leadGroup.name,
        class: leadGroup.class
      });
    }
    else {
      this.isEditLeadGroup = false;
      this.leadGroupForm.patchValue({
        name: '',
        class: 'primary'
      });
    }

    this.modalService.open(content, { scrollable: true });
  }

  deleteLeadsModal(content, leadGroup) {
    this.leadGroupIdToDelete = leadGroup.id;
    this.modalService.open(content, { scrollable: true, centered: true });
  }

  initForm() {
    this.leadGroupForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      class: ['primary', Validators.required]
    });
  }

  getAddress(people) {
    let addressString = '';
    if (people.address)
      addressString = addressString.concat(addressString ? `,${people.address}` : people.address);
    if (people.area)
      addressString = addressString.concat(addressString ? `,${people.area}` : people.area);
    if (people.zipCode)
      addressString = addressString.concat(addressString ? `,${people.zipCode}` : people.zipCode);
    if (people.city)
      addressString = addressString.concat(addressString ? `,${people.city}` : people.city);
    if (people.state)
      addressString = addressString.concat(addressString ? `,${people.state}` : people.state);
    if (people.country)
      addressString = addressString.concat(addressString ? `,${people.country?.name}` : people.country?.name);

    return addressString;
  }

  onSort({ column, direction }: SortEvent) {
    console.log('clicked?');

    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });
    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }

  redirectToProfile(leadPerson) {
    console.log('leadPerson: ', leadPerson);

    this.router.navigate([`/lms/leads/people/${leadPerson.id}`]);
  }

  getInitial(leadPerson) {
    if (leadPerson.name) {
      const fullName = leadPerson.name.split(' ');

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
}
