import { Component, OnInit, ViewChild } from '@angular/core';
import { SETTINGS } from '../data/settings.data';
import { GENERALSETTINGS } from '../data/general-settings';
import { BROADCAST } from '../data/broadcast.data';
import { EMAILSETUP } from '../data/email-setup.data';
import { NOTIFICATION } from '../data/notification.data';
import { USER } from '../data/user-data'

import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})

export class SettingsComponent implements OnInit {
  
  active = 'top';
  public settings = SETTINGS;
  public country = GENERALSETTINGS.timeZones;
  public broadcast = BROADCAST;
  public emailSetup = EMAILSETUP;
  public notificationsData = NOTIFICATION;
  public userData = USER;
  public notificatonChannel = ["System","Mail"];
  public notificationRoles = ["App Admin","Manager","Agent"];
  public notificationUsers = this.userData.map(user => (user.fullName));

  events = [];
  searchTerm: string;
  @ViewChild('updateContent') private updateContent;

  contentForm: FormGroup = this.fb.group({content: []})
  notificationCtrl = new FormControl();
  notificationRolesCtrl = new FormControl();
  notificationUsersCtrl = new FormControl();

  notifications: Array<any> = [];
  allNotifications: Array<any> = [];
  filteredNotifications: Observable<Array<any>>;

  roles: Array<any> = [];
  allRoles: Array<any> = [];
  filteredRoles: Observable<Array<any>>;

  users: Array<any> = [];
  allUsers: Array<any> = [];
  filteredUsers: Observable<Array<any>>;
  
  constructor( 
    private modalService: NgbModal,
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    ) { }

  ngOnInit() { }

  onNotificationRemoved(notification: string) {
    const notifications = this.notificationCtrl.value as string[];
    this.removeFirst(notifications, notification);
    this.notificationCtrl.setValue(notifications); // To trigger change detection
  }

  onRolesRemoved(role: string) {
    const roles = this.notificationRolesCtrl.value as string[];
    this.removeFirst(roles, role);
    this.notificationCtrl.setValue(roles); // To trigger change detection
  }

  onUsersRemoved(user: string) {
    const users = this.notificationUsersCtrl.value as string[];
    this.removeFirst(users, user);
    this.notificationCtrl.setValue(users); // To trigger change detection
  }

  private removeFirst<T>(array: T[], toRemove: T): void {
    const index = array.indexOf(toRemove);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }

  search(value: string): void {
    this.events = this.notificationsData.filter((val) => val.translatedName.toLowerCase().includes(value));
  }

  getNotificationChannel(notification) {
    if (notification.templates.length > 1) {
      return this.notificatonChannel;
    } else return ["","Mail"];
  }

  addName() {
    return
  }

  addBrand_name() {
    return
  }

  addAction_by() {
    return
  }

  openModal(content: any) {
    this.modalService.open(content, { size: 'xl' });
  }
}
