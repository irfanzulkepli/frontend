import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomTableDatasource } from 'src/app/components/custom-table/custom-table.interface';
import { environment } from 'src/environments/environment';
import { PageableRequest } from '../interfaces/pageable-request.interface';
import { ActivitiyRequest } from './interfaces/add-activities-reqeust.interface';
import { TagRequest } from './interfaces/delete-tag-request.interface';
import { OrganizationRequest } from './interfaces/organization-request.interface';
import { PeopleRequest } from './interfaces/people-request.interface';
import { PersonList } from './interfaces/person-list.interface';
import { UpdateAddressRequest } from './interfaces/update-address-request.interface';
import { UpdateContactRequest } from './interfaces/update-contact-request.interface';
import { UpdateDetailsRequest } from './interfaces/update-details-request.interface';
import { UpdateFollowerRequest } from './interfaces/update-follower-request.interface';
import { UpdatePersonOrganizationRequest } from './interfaces/update-person-organization-request.interface';

@Injectable({
  providedIn: 'root'
})
export class LeadService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getContactTypesPage(): Observable<any> {
    return this.httpClient.get(environment.baseUrl + '/lms/leads/contactTypes/page');
  }

  getContactTypesList() {
    return this.httpClient.get(`${environment.baseUrl}/lms/leads/contactTypes/list`);
  }

  getContactTypesById(id: number): Observable<any> {
    return this.httpClient.get(environment.baseUrl + '/lms/leads/contactTypes/' + id);
  }

  updateContactTypes(id: number, body: any): Observable<any> {
    return this.httpClient.put(environment.baseUrl + '/lms/leads/contactTypes/' + id, body);
  }

  addContactTypes(body: any): Observable<any> {
    return this.httpClient.put(environment.baseUrl + '/lms/leads/contactTypes', body);
  }

  deleteContactTypesById(id: number): Observable<any> {
    return this.httpClient.delete(environment.baseUrl + '/lms/leads/contactTypes/' + id);
  }

  getPage(pageableRequest, profileType: string): Observable<CustomTableDatasource> {
    return this.httpClient.get<CustomTableDatasource>(`${environment.baseUrl}/${profileType}/page`, { params: pageableRequest });
  }

  getDetailsById(id: number, profileType: string) {
    return this.httpClient.get(`${environment.baseUrl}/${profileType}/${id}`);
  }

  getPeopleListing() {
    return this.httpClient.get(`${environment.baseUrl}/person/list`);
  }

  getTagListing() {
    return this.httpClient.get(`${environment.baseUrl}/common/tags/list`);
  }

  getCountriesListing() {
    return this.httpClient.get(`${environment.baseUrl}/common/countries/list`);
  }

  getPhoneEmailTypesListing() {
    return this.httpClient.get(`${environment.baseUrl}/common/phoneEmailTypes/list`);
  }

  getActivityTypesListing() {
    return this.httpClient.get(`${environment.baseUrl}/activities/activityTypes/list`);
  }

  getUsersListing(): Observable<Array<PersonList>> {
    return this.httpClient.get<Array<PersonList>>(`${environment.baseUrl}/users/list`);
  }

  getOrganizationsListing(): Observable<any> {
    return this.httpClient.get(`${environment.baseUrl}/organization/list`);
  }

  getActivitiesListing(id: number, profileType: string) {
    return this.httpClient.get(`${environment.baseUrl}/${profileType}/${id}/activities/list`);
  }

  getFollowersById(id: number, pageableRequest, profileType: string) {
    return this.httpClient.get(`${environment.baseUrl}/${profileType}/${id}/followers/page`, { params: pageableRequest });
  }

  getPersonsByOrganizationId(id: number): Observable<any> {
    return this.httpClient.get(`${environment.baseUrl}/organization/${id}/persons`);
  }

  getDealsByLeadId(id: number, leadType: string, pageableRequest): Observable<any> {
    return this.httpClient.get(`${environment.baseUrl}/${leadType}/${id}/deals/page`, { params: pageableRequest });
  }

  updateAddress(requestBody: UpdateAddressRequest, id: number, profileType: string) {
    return this.httpClient.put(`${environment.baseUrl}/${profileType}/${id}/address`, requestBody);
  }

  updateDetails(requestBody: UpdateDetailsRequest, id: number, profileType) {
    return this.httpClient.put(`${environment.baseUrl}/${profileType}/${id}/details`, requestBody);
  }

  updatePeopleContact(requestBody: UpdateContactRequest, id: number) {
    return this.httpClient.put(`${environment.baseUrl}/person/${id}/contact`, requestBody);
  }

  updatePeopleOrganizations(requestBody: UpdatePersonOrganizationRequest, id: number, profileType: string) {
    return this.httpClient.put(`${environment.baseUrl}/${profileType}/${id}/organizations`, requestBody);
  }

  updateFollowers(requestBody: UpdateFollowerRequest, id: number, profileType: string) {
    return this.httpClient.put(`${environment.baseUrl}/${profileType}/${id}/followers`, requestBody);
  }

  deleteTag(requestBody: TagRequest, id: number, profileType: string) {
    return this.httpClient.delete(`${environment.baseUrl}/${profileType}/${id}/tag`, { body: requestBody });
  }

  addTag(requestBody: TagRequest, id: number, profileType: string) {
    return this.httpClient.post(`${environment.baseUrl}/${profileType}/${id}/tag`, requestBody);
  }

  addActivity(requestBody: ActivitiyRequest) {
    return this.httpClient.post(`${environment.baseUrl}/activities/add`, requestBody);
  }

  markActivityAsDone(id: number) {
    return this.httpClient.put(`${environment.baseUrl}/activities/${id}/done`, {});
  }

  deleteActivity(id: number) {
    return this.httpClient.delete(`${environment.baseUrl}/activities/${id}`);
  }

  addPeople(requestBody: PeopleRequest) {
    return this.httpClient.post(`${environment.baseUrl}/person/add`, requestBody);
  }

  updatePeople(requestBody: PeopleRequest, id: number) {
    return this.httpClient.put(`${environment.baseUrl}/person/${id}`, requestBody);
  }

  deletePeople(id: number) {
    return this.httpClient.delete(`${environment.baseUrl}/person/${id}`);
  }

  addOrganization(requestBody: OrganizationRequest) {
    return this.httpClient.post(`${environment.baseUrl}/organization/add`, requestBody);
  }

  deleteOrganization(id: number) {
    return this.httpClient.delete(`${environment.baseUrl}/organization/${id}`);
  }

  updateOrganization(requestBody: OrganizationRequest, id: number) {
    return this.httpClient.put(`${environment.baseUrl}/organization/${id}`, requestBody);
  }
}
