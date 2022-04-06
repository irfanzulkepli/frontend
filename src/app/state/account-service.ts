import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';

@Injectable()
export class AccountService {
    constructor(
        private httpClient: HttpClient
    ) { }

    getUserDetails(): Observable<any> {
        return this.httpClient.get(`${environment.baseUrl}/users/details`);
    }
}