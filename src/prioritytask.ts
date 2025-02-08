import { Task } from "./task";

export class PriorityTask extends Task{
    private priority:string;


    constructor(id:number,title:string,priority:string){
        super(id,title);
        this.priority = priority;
    }

    display(): string {
        return `Priority Task [${this.priority}]: ${super.display()}`;
    }
}