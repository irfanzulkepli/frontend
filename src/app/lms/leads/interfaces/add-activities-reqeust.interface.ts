export interface ActivitiyRequest {
    activityTypeId: number,
    title: string,
    description: string,
    startedAt: string,
    endedAt: string,
    startTime: string,
    endTime: string,
    collaboratorsIds: Array<number>,
    participantsIds: Array<number>,
    markAsDone: boolean,
    contextableType: string,
    personsId: number,
    organizationsId: number,
    dealsId: number
    createdById: number
}