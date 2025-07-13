import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css',
})
export class AddTodoComponent {
  title!: string;
  description!: string;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  onSubmit() {
    const todo = {
      title: this.title,
      description: this.description,
      completed: true
    } as Todo;
    this.todoAdd.emit(todo);
    this.title = '';
    this.description = '';
  }
}