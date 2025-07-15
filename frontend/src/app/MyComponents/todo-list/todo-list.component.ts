
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
  @Output() todoUpdate: EventEmitter<Todo> = new EventEmitter();

  isEditing = false;
  editTitle = '';
  editDescription = '';

  onCheckboxClick(todo: Todo): void {
    this.todoCheckbox.emit(todo);
  }

  onDeleteClick(todo: Todo): void {
    this.todoDelete.emit(todo);
  }

  onEditClick(): void {
    this.isEditing = true;
    this.editTitle = this.todo.title;
    this.editDescription = this.todo.description;
  }

  onSaveClick(): void {
    if (this.editTitle.trim()) {
      const updatedTodo: Todo = {
        ...this.todo,
        title: this.editTitle.trim(),
        description: this.editDescription.trim()
      };
      this.todoUpdate.emit(updatedTodo);
      this.isEditing = false;
    }
  }

  onCancelClick(): void {
    this.isEditing = false;
    this.editTitle = '';
    this.editDescription = '';
  }
}
