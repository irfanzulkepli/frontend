import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getActivitiesPage(pageableRequest: any): Observable<any> {
    return this.httpClient.get(environment.baseUrl + '/activities/page', { params: pageableRequest });
  }

  deleteActivityById(id: number): Observable<any> {
    return this.httpClient.delete(environment.baseUrl + '/activities/' + id);
  }

  markAsDoneById(id: number): Observable<any> {
    return this.httpClient.put(environment.baseUrl + '/activities/' + id + '/done', {});
  }
}
