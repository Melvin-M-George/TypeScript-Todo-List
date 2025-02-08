import { SimpleTask } from "./simpletask";
import { PriorityTask } from "./prioritytask";
import { TaskManager } from "./taskmanager";


const taskManager = new TaskManager();


const task1 = new SimpleTask(1,"Play Badminton");
const task2 = new PriorityTask(2,"Learn TypeScript","High");

taskManager.addTask(task1);
taskManager.addTask(task2);

console.log("To-Do List:");
taskManager.listTasks();

console.log("\nMarking Task 1 as completed...\n");
taskManager.completeTask(1);

console.log("Updated To-Do List:");
taskManager.listTasks();