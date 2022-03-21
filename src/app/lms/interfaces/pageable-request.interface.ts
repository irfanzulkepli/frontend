export interface PageableRequest {
    page: number,
    size: number,
    direction: string,
    properties: Array<string>
};

export enum DIRECTION  {
    ASCENDING = "ASC",
    DESCENDING = "DESC"
};