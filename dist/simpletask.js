"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleTask = void 0;
const task_1 = require("./task");
class SimpleTask extends task_1.Task {
    constructor(id, title) {
        super(id, title);
    }
    display() {
        return `Simple Task: ${super.display()}`;
    }
}
exports.SimpleTask = SimpleTask;
