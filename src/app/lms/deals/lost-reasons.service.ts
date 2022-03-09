import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LostReasonsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getLostReasonsPage(): Observable<any> {
    return this.httpClient.get(environment.baseUrl + '/lost-reasons/page');
  }

  updateLostReasons(body: any): Observable<any> {
    return this.httpClient.put(environment.baseUrl + '/lost-reasons', body);
  }

  deleteLostReasons(id: number): Observable<any> {
    return this.httpClient.delete(environment.baseUrl + '/lost-reasons/' + id);
  }
}
