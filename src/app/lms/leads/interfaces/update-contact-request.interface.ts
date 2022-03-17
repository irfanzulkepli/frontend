export interface UpdateContactRequest {
    emails: Array<ContactRequestModel>,
    phones: Array<ContactRequestModel>
}

export interface ContactRequestModel {
    value: string,
    typeId?: number,
    contextableType: string
}