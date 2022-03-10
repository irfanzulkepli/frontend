import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LeadGroupService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getContactTypesPage(): Observable<any> {
    return this.httpClient.get(environment.baseUrl + '/lms/leads/contactTypes/page');
  }

  getContactTypesById(id: number): Observable<any> {
    return this.httpClient.get(environment.baseUrl + '/lms/leads/contactTypes/' + id);
  }

  updateContactTypes(id:number ,body: any): Observable<any> {
    return this.httpClient.put(environment.baseUrl + '/lms/leads/contactTypes/' + id, body);
  }

  addContactTypes(body: any): Observable<any>{
    return this.httpClient.post(environment.baseUrl + '/lms/leads/contactTypes', body);
  }

  deleteContactTypesById(id: number): Observable<any> {
    return this.httpClient.delete(environment.baseUrl + '/lms/leads/contactTypes/' + id);
  }
}
