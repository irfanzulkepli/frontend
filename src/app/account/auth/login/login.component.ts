import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
import { interval } from 'rxjs/internal/observable/interval';
import { StoreCredentials } from 'src/app/state/account-action';
import { AuthenticationService } from '../../../core/services/auth.service';
import { AuthfakeauthenticationService } from '../../../core/services/authfake.service';
import { AuthService } from '../auth.service';
import { OTPlessAuthSmartWebSocketAPI } from '../OTPlessAuthSmartWebSocketAPI';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

/**
 * Login component
 */
export class LoginComponent implements OnInit {

  //hai
  //third version

  loginType: string = '';
  loginForm: FormGroup;
  submitted = false;
  error = '';
  returnUrl: string;

  otplessAuthSmartWebSocketAPI: OTPlessAuthSmartWebSocketAPI;
  wsMessage: string = 'test message';

  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  qrEnabled: boolean = false;
  qrLoading: boolean = false;
  qrValue = '';
  sessionId = '';
  phoneNumber = '';

  // set the currenr year
  year: number = new Date().getFullYear();

  // tslint:disable-next-line: max-line-length
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private authenticationService: AuthenticationService,
    private authFackservice: AuthfakeauthenticationService,
    private httpClient: HttpClient,
    private store: Store,
    private authService: AuthService
  ) { }

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

    this.getSfactrOTPlessAuthSmart();

    this.otplessAuthSmartWebSocketAPI = new OTPlessAuthSmartWebSocketAPI(this);
    this._connect();

    interval(5000).subscribe((x => {
      this._sendMessage();
    }));
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
    this.storeLoginDetails(loginRes);
  }

  storeLoginDetails(loginRes: any) {
    this.qrLoading = true;
    this.qrValue = '';
    this._disconnect();

    const payload: any = {
      tokenType: loginRes.token_type,
      refreshToken: loginRes.refresh_token,
      accessToken: loginRes.access_token
    };

    this.store.dispatch(new StoreCredentials(payload)).subscribe(() => {
      this.router.navigate(['/lms/dashboard']);
    });
  }

  changeLoginType(loginType: string) {
    this.loginType = loginType;
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

  _connect() {
    if (!this.otplessAuthSmartWebSocketAPI) {
      return;
    }

    this.otplessAuthSmartWebSocketAPI._connect();
  }

  _disconnect() {
    this.otplessAuthSmartWebSocketAPI._disconnect();
  }

  _sendMessage() {
    if (!this.qrEnabled) {
      return;
    }

    let obj = {
      sessionId: this.sessionId
    }

    this.otplessAuthSmartWebSocketAPI._send(JSON.stringify(obj));
  }

  _handleMessage(message) {

    let response: any = JSON.parse(message.body);

    if (!response.content) {
      return;
    }

    const loginRes: any = JSON.parse(response.content);
    this.storeLoginDetails(loginRes);
  }

  // getSfactrAuthSmart() {
  //   this.qrLoading = true;
  //   this.authService.getSfactrAuthSmart().subscribe({
  //     next: (n) => {
  //       if (n.ResultCode == 100) {
  //         this.qrValue = decodeURIComponent(decodeURIComponent(n.WhatsAppLink));
  //       }
  //     },
  //     error: (e) => { },
  //     complete: () => {
  //       this.qrLoading = false;
  //     }
  //   })
  // }

  getSfactrOTPlessAuthSmart() {
    this.qrLoading = true;
    this.authService.getSfactrOTPlessAuthSmart().subscribe({
      next: (n) => {
        if (n.ResultCode == 100) {
          this.qrValue = decodeURIComponent(decodeURIComponent(n.WhatsAppLink));
          this.qrEnabled = true;
          this.sessionId = n.SessionID;
        }
      },
      error: (e) => {
        this.qrEnabled = false;
      },
      complete: () => {
        this.qrLoading = false;
      }
    })
  }
}
