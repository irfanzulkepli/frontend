import { ContactRequestModel } from "./update-contact-request.interface"
import { PersonOrganizationRequest } from "./update-person-organization-request.interface"

export interface PeopleRequest {
    name: string,
    contactTypesId: number,
    personOrganizationRequests: Array<PersonOrganizationRequest>,
    phones: Array<ContactRequestModel>,
    emails: Array<ContactRequestModel>,
    ownerId: number,
    createdBy: number,
    address: string,
    zipCode: string,
    city: string,
    state: string,
    area: string,
    countryId: number
}
