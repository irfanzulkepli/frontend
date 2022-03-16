import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StagesService {

  constructor(
    private httpClient: HttpClient
  ) { }


  getStagesListByPipelineId(id: string): Observable<any> {
    return this.httpClient.get(environment.baseUrl + '/stages/list/pipelines/' + id);
  }

  getDefaultStagesList(): Observable<any> {
    return this.httpClient.get(environment.baseUrl + '/stages/default/list');
  }

  deleteStages(id: number): Observable<any> {
    return this.httpClient.delete(environment.baseUrl + '/stages/' + id);
  }
}
