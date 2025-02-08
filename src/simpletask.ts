import { Task } from "./task";

export class SimpleTask extends Task{
    constructor(id:number,title:string){
        super(id,title);
    }

    display(): string {
        return `Simple Task: ${super.display()}`;
    }
}