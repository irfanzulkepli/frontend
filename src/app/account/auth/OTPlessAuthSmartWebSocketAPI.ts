import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';
import { LoginComponent } from './login/login.component';

export class OTPlessAuthSmartWebSocketAPI {
    webSocketEndPoint: string = 'http://localhost:8080/ws';
    topic: string = "/topic/otpless/auth_smart";
    stompClient: any;

    loginComponent: LoginComponent;

    constructor(loginComponent: LoginComponent) {
        this.loginComponent = loginComponent;
    }

    _connect() {
        let ws = new SockJS(this.webSocketEndPoint);
        this.stompClient = Stomp.over(ws);
        const _this = this;
        _this.stompClient.connect({}, function (frame) {
            _this.stompClient.subscribe(_this.topic, function (sdkEvent) {
                _this.onMessageReceived(sdkEvent);
            });
            //_this.stompClient.reconnect_delay = 2000;
        }, this.errorCallBack);
    };

    _disconnect() {
        if (this.stompClient !== null) {
            this.stompClient.disconnect();
        }
    }

    // on error, schedule a reconnection attempt
    errorCallBack(error) {
        setTimeout(() => {
            this._connect();
        }, 5000);
    }

    _send(message: string) {
        if (!this.stompClient.connected) {
            return;
        }

        this.stompClient.send("/app/message/otpless/auth_smart", {}, message);
    }

    onMessageReceived(message): string {
        this.loginComponent._handleMessage(message);
        return message;
    }
}