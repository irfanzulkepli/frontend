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

  getDealsListPipelineView(id: number): Observable<any> {
    return this.httpClient.get(environment.baseUrl + '/deals/list/pipeline-view/' + id);
  }

  getDealsById(id: number): Observable<any> {
    return this.httpClient.get(environment.baseUrl + '/deals/' + id);
  }

  addDeals(body: any): Observable<any> {
    return this.httpClient.post(environment.baseUrl + '/deals', body);
  }

  updateDeals(body: any): Observable<any> {
    return this.httpClient.put(environment.baseUrl + '/deals/' + body.id, body);
  }

  updateDealsToLost(body: any): Observable<any> {
    return this.httpClient.put(environment.baseUrl + '/deals/lost/' + body.id, body);
  }

  updateDealsToWon(id: number): Observable<any> {
    return this.httpClient.put(environment.baseUrl + '/deals/won/' + id, {});
  }

  deleteDealsById(id: number): Observable<any> {
    return this.httpClient.delete(environment.baseUrl + '/deals/' + id);
  }
}
