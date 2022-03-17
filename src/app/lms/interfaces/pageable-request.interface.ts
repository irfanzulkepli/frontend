export interface PageableRequest {
    page: number,
    size: number,
    direction: string,
    properties: Array<string>
};

export enum DIRECTION  {
    ascending = "ASC",
    descending = "DESC"
};