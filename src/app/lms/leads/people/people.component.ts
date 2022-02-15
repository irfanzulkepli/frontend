import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})

/**
 * Contacts user-list component
 */
export class PeopleComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Leads' }, { label: 'People', active: true }];
  }

  redirectToProfile() {
    // this.router.navigate(['/lms/leads/people/1']);
  }
}
