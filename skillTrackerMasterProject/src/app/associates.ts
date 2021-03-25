import { Skills } from "./skills";

export class Associates {
    associateId : number;
    associateName : string;
    associateEmail : string;
    associateMobileNo : string;
    skills: Array<Skills>=[];
    message:string;
}