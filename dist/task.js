"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
class Task {
    constructor(id, title) {
        this.id = id;
        this.title = title;
        this.completed = false;
    }
    getId() {
        return this.id;
    }
    markCompleted() {
        this.completed = true;
    }
    display() {
        return `[${this.completed ? "✅" : "❌"}] ${this.title}`;
    }
}
exports.Task = Task;
