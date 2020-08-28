import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database'

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  todoList: AngularFireList<any>;

  constructor(private firebaseDb: AngularFireDatabase) { }

  getTodoList(){
      this.todoList = this.firebaseDb.list('titles');
      return this.todoList;
  }

  addTask(title: string) {
    this.todoList.push({
      title: title,
      isChecked: false
    })
  }

  checkOrUnCheckTask($key: string, flag: boolean) {
    this.todoList.update($key, { isChecked: flag })
  }

  removeTask($key: string) {
    this.todoList.remove($key);
  }
}
