export interface UpdatePersonOrganizationRequest {
    personOrganizations: Array<PersonOrganizationRequest>;
}

export interface PersonOrganizationRequest {
    id: number;
    jobTitle?: string;
}