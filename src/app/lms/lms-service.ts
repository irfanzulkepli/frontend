import { Injectable } from '@angular/core';

import { Subject, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';
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
    constructor() {

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
}

export interface ColumnsInfo {
    displayName: string;
    columnDef: string;
    type: string;
    badgePosition?: string;
    isList?: boolean;
    showIcon?: boolean;
    iconList?: Array<any>;
}