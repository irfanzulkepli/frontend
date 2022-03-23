import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UpdateCommentRequest } from '../leads/interfaces/update-comment-request.interface';
import { UpdateFollowerRequest } from '../leads/interfaces/update-follower-request.interface';

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

  getDealsListByPipelineId(id: string): Observable<any> {
    return this.httpClient.get(environment.baseUrl + '/deals/list/pipeline/' + id);
  }

  getDealsById(id: number): Observable<any> {
    return this.httpClient.get(environment.baseUrl + '/deals/' + id);
  }

  getFollowersById(id: number, pageableRequest, profileType: string) {
    return this.httpClient.get(`${environment.baseUrl}/${profileType}/${id}/followers/page`, { params: pageableRequest });
  }

  getCommentsById(id: number) {
    return this.httpClient.get(`${environment.baseUrl}/deals/${id}/comments/list`);
  }

  addComments(body: any): Observable<any> {
    return this.httpClient.post(environment.baseUrl + '/deals/comments', body);
  }

  addDeals(body: any): Observable<any> {
    return this.httpClient.post(environment.baseUrl + '/deals', body);
  }

  updateComments(requestBody: UpdateCommentRequest, id: number) {
    return this.httpClient.put(`${environment.baseUrl}/deals/${id}/comments`, requestBody);
  }

  updateFollowers(requestBody: UpdateFollowerRequest, id: number, profileType: string) {
    return this.httpClient.put(`${environment.baseUrl}/${profileType}/${id}/followers`, requestBody);
  }

  updateDeals(body: any): Observable<any> {
    return this.httpClient.put(environment.baseUrl + '/deals/' + body.id, body);
  }

  updateDealsStage(id: number, body: number): Observable<any> {
    return this.httpClient.put(environment.baseUrl + '/deals/' + id + '/stage', body);
  }

  updateDealsValue(id: number, body: number): Observable<any> {
    return this.httpClient.put(environment.baseUrl + '/deals/' + id + '/value', body);
  }

  updateDealsLeadTypePerson(id: number, body: number): Observable<any> {
    return this.httpClient.put(environment.baseUrl + '/deals/' + id + '/person', body);
  }

  updateDealsExpectedClosingDate(id: number, body: Date): Observable<any> {
    return this.httpClient.put(environment.baseUrl + '/deals/' + id + '/expired', body);
  }

  updateDealsDescription(id: number, body: String): Observable<any> {
    return this.httpClient.put(environment.baseUrl + '/deals/' + id + '/description', body);
  }

  updateAllDealsToNewStage(oldId: number, newId: number): Observable<any> {
    return this.httpClient.put(environment.baseUrl + '/deals/stage/' + oldId + '/' + newId, {});
  }

  updateDealsToLost(body: any): Observable<any> {
    return this.httpClient.put(environment.baseUrl + '/deals/lost/' + body.id, body);
  }

  updateDealsToWon(id: number): Observable<any> {
    return this.httpClient.put(environment.baseUrl + '/deals/won/' + id, {});
  }

  updateDealsTag(body: any): Observable<any> {
    return this.httpClient.put(environment.baseUrl + '/deals/tag/' + body.id, body);
  }

  deleteDealsById(id: number): Observable<any> {
    return this.httpClient.delete(environment.baseUrl + '/deals/' + id);
  }

  deleteCommentById(id: number): Observable<any> {
    return this.httpClient.delete(environment.baseUrl + '/deals/' + id + '/comments');
  }
}
