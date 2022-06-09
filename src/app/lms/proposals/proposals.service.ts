import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Proposal } from './proposal';

@Injectable({
  providedIn: 'root'
})
export class ProposalsService {

  constructor(private http:HttpClient) { }

  getProposalList(search:string,limit:number,offset:number,order:string):Observable<any>{
    return this.http.get<any>(environment.baseUrl +"/lms/proposal/template/getTemplate?search="+search+"&limit="+limit+"&offset="+offset+"&direction="+order);
  }


  getById(id:number):Observable<any>{
    return this.http.get<any>(environment.baseUrl+"/lms/proposal/template/getById/"+id);
  }

  updateProposal(updated:Proposal):Observable<any>{
    return this.http.put<any>(environment.baseUrl+"/lms/proposal/template/update",updated);
  }

  addProposal(newProposal:Proposal){
    return this.http.post<any>(environment.baseUrl+"/lms/proposal/template/create",newProposal);
  }

  deleteProposal(id:number){
    return this.http.get<any>(environment.baseUrl+"/lms/proposal/template/deleteById/"+id);
  }
}
