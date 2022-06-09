import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Template } from './template';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  constructor(private http:HttpClient) { }

  getTemplateList(search:string,limit:number,offset:number,order:string):Observable<any>{
    return this.http.get<any>(environment.baseUrl +"/lms/proposal/template/getTemplate?search="+search+"&limit="+limit+"&offset="+offset+"&direction="+order);
  }

  getById(id:number):Observable<any>{
    return this.http.get<any>(environment.baseUrl+"/lms/proposal/template/getById/"+id);
  }

  addProposal(newTemplate:Template){
    return this.http.post<any>(environment.baseUrl+"/lms/proposal/template/create",newTemplate);
  }

  deleteTemplate(id:number){
    return this.http.get<any>(environment.baseUrl+"/lms/proposal/template/deleteById/"+id);
  }
}
