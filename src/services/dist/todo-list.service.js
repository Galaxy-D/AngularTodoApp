"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TodoListService = void 0;
var core_1 = require("@angular/core");
var TodoListService = /** @class */ (function () {
    function TodoListService(firebaseDb) {
        this.firebaseDb = firebaseDb;
    }
    TodoListService.prototype.getTodoList = function () {
        this.todoList = this.firebaseDb.list('titles');
        return this.todoList;
    };
    TodoListService.prototype.addTask = function (title) {
        this.todoList.push({
            title: title,
            isChecked: false
        });
    };
    TodoListService.prototype.checkOrUnCheckTask = function ($key, flag) {
        this.todoList.update($key, { isChecked: flag });
    };
    TodoListService.prototype.removeTask = function ($key) {
        this.todoList.remove($key);
    };
    TodoListService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], TodoListService);
    return TodoListService;
}());
exports.TodoListService = TodoListService;
