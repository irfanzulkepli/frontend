export interface OrganizationRequest {
    name: string,
    contactTypesId: number,
    ownerId: number,
    createdById: number,
    address: string,
    area: string,
    city: string,
    state: string,
    zipCode: string,
    countryId: number
}