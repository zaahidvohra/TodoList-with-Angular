
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  @Input() todo!: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();

  onCheckboxClick(todo: Todo): void {
    this.todoCheckbox.emit(todo);
  }

  onDeleteClick(todo: Todo): void {
    this.todoDelete.emit(todo);
  }
}
