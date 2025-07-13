import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  onCheckboxClick(todo: Todo) {
    this.todoCheckbox.emit(todo);
  }
  onClick(todo: Todo) {
    this.todoDelete.emit(todo);
    console.log('On click triggered');
  }
  @Input() todo!: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();
}
