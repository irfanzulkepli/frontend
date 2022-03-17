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
    emails: [
        {
            id: number,
            value: string,
            typeId: number,
            contextableType: string,
            contextableId: number
        }
    ],
    phones: [
        {
            id: number,
            value: string,
            typeId: number,
            contextableType: string,
            contextableId: number
        }
    ],
    owner: {
        id: number,
        firstName: string,
        lastName: string,
        email: string
    },
    organizations: [
        {
            id: number,
            name: string,
            jobTitle: string,
            contactTypes: {
                id: number,
                name: string,
                clazz: string
            }
        }
    ],
    tags: [
        {
            id: number,
            name: string,
            colorCode: string
        }
    ]
}