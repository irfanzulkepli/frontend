export interface ActivitiesResponse {
    id: number,
    title: string,
    description: string,
    participants: [
        {
            id: number,
            name: string
        }
    ],
    collaborators: [
        {
            id: number,
            firstName: string,
            lastName: string
        }
    ],
    createdBy: {
        id: number,
        firstName: string,
        lastName: string,
        email: string
    },
    activityType: {
        id: number,
        name: string
    },
    status: {
        id: number,
        name: string,
        class_: string,
        type: string,
        createdAt: string,
        updatedAt: string
    },
    startDate: string,
    endDate: string,
    startTime: string,
    endTime: string
}