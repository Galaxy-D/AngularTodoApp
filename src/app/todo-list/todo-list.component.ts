import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../../services/todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todoListArray: any[];
  constructor(private todoListService: TodoListService) { }

  ngOnInit(): void {
    this.todoListService.getTodoList()
                        .snapshotChanges()
                        .subscribe(item => {
                          this.todoListArray = [];
                          item.forEach(el =>{
                            var x = el.payload.toJSON();
                            x["$key"] = el.key;
                            this.todoListArray.push(x);
                          })

                          //sort array by isChecked parameter
                          this.todoListArray.sort((a,b)=>{
                            return a.isChecked - b.isChecked 
                          })
                        })
  }

  onAdd(Title) {
    this.todoListService.addTask(Title.value);
    Title.value = null;
  }

  alterCheck($key:string, isChecked) {
    this.todoListService.checkOrUnCheckTask($key, !isChecked)
  }

  onDelete($key:string) {
    this.todoListService.removeTask($key);
  }

}
