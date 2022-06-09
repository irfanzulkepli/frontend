import { User } from "src/app/core/models/auth.models";

export class Proposal {
    id:number;
    title:string;
    content:string;
    status:string;
    createdBy:User;
    createdAt:Date;
    updatedBy:User;
    updatedAt:Date;

    constructor(){
        
    }
}
