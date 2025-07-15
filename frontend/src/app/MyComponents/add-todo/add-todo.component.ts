
import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent {
  title: string = '';
  description: string = '';
  
  @Output() todoAdd: EventEmitter<Omit<Todo, 'id'>> = new EventEmitter();

  onSubmit(): void {
    if (!this.title.trim()) {
      return;
    }

    const todoData: Omit<Todo, 'id'> = {
      title: this.title.trim(),
      description: this.description.trim(),
      completed: false
    };

    this.todoAdd.emit(todoData);
    this.resetForm();
  }

  private resetForm(): void {
    this.title = '';
    this.description = '';
  }
}
