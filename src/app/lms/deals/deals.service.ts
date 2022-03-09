import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DealsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getDealsPage(): Observable<any> {
    return this.httpClient.get(environment.baseUrl + '/deals/page');
  }

  getDealsById(id: number): Observable<any> {
    return this.httpClient.get(environment.baseUrl + '/deals/' + id);
  }

  updateDeals(body: any): Observable<any> {
    return this.httpClient.put(environment.baseUrl + '/deals', body);
  }

  deleteDealsById(id: number): Observable<any> {
    return this.httpClient.delete(environment.baseUrl + '/deals/' + id);
  }
}
