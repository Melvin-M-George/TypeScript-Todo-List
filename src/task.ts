export class Task{
    protected id:number;
    protected title:string;
    protected completed:boolean;

    constructor(id:number,title:string){
        this.id = id;
        this.title = title;
        this.completed = false;
    }

    getId(): number {
        return this.id;
    }

    markCompleted():void{
        this.completed = true;
    }

    display():string{
        return `[${this.completed ? "✅" : "❌"}] ${this.title}`;
    }
}