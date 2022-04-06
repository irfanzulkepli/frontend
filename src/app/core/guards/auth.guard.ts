import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AccountService } from 'src/app/state/account-service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private accountService: AccountService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.accountService.getUserDetails().toPromise().then(result => {
            console.log('Logged in user: ', result);
            return true;
        }).catch(err => {
            console.error('Get user details error: ', err);
            return false;
        });
    }
}
