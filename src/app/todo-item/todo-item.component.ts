import { Component, Input,Output,EventEmitter, OnInit } from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent implements OnInit {


     @Input()
  todo: Todo = new Todo;
  
  @Output() todoDelete: EventEmitter<Todo> =new EventEmitter();
  @Output() todocheckbox: EventEmitter<Todo> =new EventEmitter();

    constructor() { }
    

    ngOnInit(): void {
        
    }
    onClick(todo: Todo){
      this.todoDelete.emit(todo);
      console.log("onClick has been triggered")
    }
    onCheckBoxClick(todo: Todo | undefined){
      this.todocheckbox.emit(todo);

    }
  
    
  }

 

