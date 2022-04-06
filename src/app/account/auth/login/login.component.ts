import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthenticationService } from '../../../core/services/auth.service';
import { AuthfakeauthenticationService } from '../../../core/services/authfake.service';

import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Store } from '@ngxs/store';
import { StoreCredentials } from 'src/app/state/account-action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

/**
 * Login component
 */
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  error = '';
  returnUrl: string;

  // set the currenr year
  year: number = new Date().getFullYear();

  // tslint:disable-next-line: max-line-length
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private authenticationService: AuthenticationService,
    private authFackservice: AuthfakeauthenticationService,
    private httpClient: HttpClient,
    private store: Store) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      grant_type: ['password', [Validators.required]],
      client_id: ['dev-test', [Validators.required]],
    });

    // reset login status
    // this.authenticationService.logout();
    // get return url from route parameters or default to '/'
    // tslint:disable-next-line: no-string-literal
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  /**
   * Form submit
   */
  async onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    const loginRes = await this.login();
    console.log('loginRes: ', loginRes);

    const payload = {
      tokenType: loginRes.token_type,
      refreshToken: loginRes.refresh_token,
      accessToken: loginRes.access_token
    };

    this.store.dispatch(new StoreCredentials(payload)).subscribe(() => {
      this.router.navigate(['/lms/dashboard']);
    })
  }

  async login() {
    const data = new URLSearchParams();

    for (const key in this.loginForm.value) {
      data.set(key, this.loginForm.value[key]);
    }

    let apiUrl: string = "https://d1isjhghszo6bn.cloudfront.net/auth/realms/feng-test/protocol/openid-connect/token";

    const res: any = await this.httpClient.post(apiUrl, data.toString(), {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    }).toPromise();

    if (res.errorCode) {
      throw new Error(res.message);
    }

    return res;
  }
}
