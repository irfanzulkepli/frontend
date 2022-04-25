import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { COUNTRY } from './data/country-data';
import { LEADTYPES } from './data/lead-type-data';
import { ORGANIZATION } from './data/organization-data';
import { PERSON } from './data/person-data';
import { TAGS } from './data/tags-data';
import { TYPE } from './data/type-data';
import { USER } from './data/user-data';


@Injectable({
    providedIn: 'root'
})
export class LMSService {
    constructor(
        private httpClient: HttpClient
    ) {

    }

    getPersons() {
        return PERSON;
    }

    getUsers() {
        return USER;
    }

    getTypes() {
        return TYPE;
    }

    getCountry() {
        return COUNTRY;
    }

    getTags() {
        return TAGS;
    }

    getLeadTypes() {
        return LEADTYPES;
    }

    getOrganizations() {
        return ORGANIZATION;
    }

    getUsersList(): Observable<any> {
        return this.httpClient.get(environment.baseUrl + '/users/list');
    }

    getPersonList(): Observable<any> {
        return this.httpClient.get(environment.baseUrl + '/person/list');
    }

    getTagsList(): Observable<any> {
        return this.httpClient.get(environment.baseUrl + '/tags/list');
    }
}

export interface ColumnsInfo {
    displayName: string;
    columnDef: string;
    type: string;
    badgePosition?: string;
    isList?: boolean;
    showIcon?: boolean;
    iconList?: Array<any>;
    profileType?: string;
    enum?: boolean;
    contextableType?: string;
    showBadge?: boolean;
}