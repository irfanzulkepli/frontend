import { LEADTYPE } from "../../enum/lms-type.enum"
import { Tags } from "./tags.interface"

export interface PeopleResponse {
    id: number,
    name: string,
    address: string,
    area: string,
    state: string,
    city: string,
    zipCode: string,
    openDealsCount: number,
    closedDealsCount: number,
    country: {
        id: number,
        code: string,
        name: string,
        createdAt: string,
        updatedAt: string
    },
    contactTypes: {
        id: number,
        name: string,
        clazz: string
    },
    emails: Array<ContactDetails>,
    phones: Array<ContactDetails>,
    owner: {
        id: number,
        firstName: string,
        lastName: string,
        email: string
    },
    organizations: Array<Organizations>,
    tags: Array<Tags>
}

export interface ContactDetails {
    id: number,
    contextableId: number,
    contextableType: LEADTYPE,
    type: TypeDetails,
    typeId: number,
    value: string
}

export interface TypeDetails {
    clazz: string,
    createdAt: string,
    id: number,
    name: string,
    updatedAt: string
}

export interface Organizations {
    id: number,
    name: string,
    jobTitle: string,
    contactTypes: {
        id: number,
        name: string,
        clazz: string
    }
}