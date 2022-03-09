import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PipelinesService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getPipelinesList(): Observable<any> {
    return this.httpClient.get(environment.baseUrl + '/pipelines/list');
  }

  getPipelinesPage(): Observable<any> {
    return this.httpClient.get(environment.baseUrl + '/pipelines/page');
  }

  deletePipelines(id: number): Observable<any> {
    return this.httpClient.delete(environment.baseUrl + '/pipelines/' + id);
  }
}
