"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskManager = void 0;
class TaskManager {
    constructor() {
        this.tasks = [];
    }
    addTask(task) {
        this.tasks.push(task);
    }
    completeTask(id) {
        const task = this.tasks.find((t) => t.getId() === id);
        if (task) {
            task.markCompleted();
        }
    }
    listTasks() {
        this.tasks.forEach((task) => console.log(task.display()));
    }
}
exports.TaskManager = TaskManager;
