import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getSfactrAuthSmart(): Observable<any> {
    return this.httpClient.get(environment.baseUrl + '/sfactr/auth_smart');
  }

  getSfactrOTPlessAuthSmart(): Observable<any> {
    return this.httpClient.get(environment.baseUrl + '/sfactr/otpless/auth_smart');
  }
}
