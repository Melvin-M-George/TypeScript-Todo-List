import { Task } from "./task";

export class TaskManager {
  private tasks: Task[];

  constructor() {
    this.tasks = [];
  }

  addTask(task: Task): void {
    this.tasks.push(task);
  }

  completeTask(id: number): void {
    const task = this.tasks.find((t) => t.getId() === id);

    if (task) {
      task.markCompleted();
    }
  }

  listTasks(): void {
    this.tasks.forEach((task) => console.log(task.display()));
  }
}
