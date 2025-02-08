"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriorityTask = void 0;
const task_1 = require("./task");
class PriorityTask extends task_1.Task {
    constructor(id, title, priority) {
        super(id, title);
        this.priority = priority;
    }
    display() {
        return `Priority Task [${this.priority}]: ${super.display()}`;
    }
}
exports.PriorityTask = PriorityTask;
