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

  getDealsPage(pageableRequest: any): Observable<any> {
    return this.httpClient.get(environment.baseUrl + '/deals/page', { params: pageableRequest });
  }

  getDealsById(id: number): Observable<any> {
    return this.httpClient.get(environment.baseUrl + '/deals/' + id);
  }

  updateDeals(body: any): Observable<any> {
    return this.httpClient.put(environment.baseUrl + '/deals/' + body.id, body);
  }

  deleteDealsById(id: number): Observable<any> {
    return this.httpClient.delete(environment.baseUrl + '/deals/' + id);
  }
}
