
import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  isLoading = false;
  error: string | null = null;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos(): void {
    this.isLoading = true;
    this.error = null;
    
    this.todoService.getTodos().subscribe({
      next: (todos) => {
        this.todos = todos;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading todos:', error);
        this.error = 'Failed to load todos';
        this.isLoading = false;
      }
    });
  }

  addTodo(todoData: Omit<Todo, 'id'>): void {
    this.todoService.addTodo(todoData).subscribe({
      next: (newTodo) => {
        // Reload todos to ensure consistency
        this.loadTodos();
      },
      error: (error) => {
        console.error('Error adding todo:', error);
        this.error = 'Failed to add todo';
      }
    });
  }

  deleteTodo(todo: Todo): void {
    this.todoService.deleteTodo(todo.id).subscribe({
      next: () => {
        this.todos = this.todos.filter(t => t.id !== todo.id);
      },
      error: (error) => {
        console.error('Error deleting todo:', error);
        this.error = 'Failed to delete todo';
      }
    });
  }

  toggleTodo(todo: Todo): void {
    const updatedTodo = { ...todo, completed: !todo.completed };
    
    this.todoService.updateTodo(todo.id, updatedTodo).subscribe({
      next: (updated) => {
        const index = this.todos.findIndex(t => t.id === todo.id);
        if (index > -1) {
          this.todos[index] = updated;
        }
      },
      error: (error) => {
        console.error('Error updating todo:', error);
        this.error = 'Failed to update todo';
      }
    });
  }
}
