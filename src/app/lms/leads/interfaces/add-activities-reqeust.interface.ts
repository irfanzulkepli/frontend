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
    statusId: number,
    contextableType: string,
    contextableId: number,
    createdById: number
}