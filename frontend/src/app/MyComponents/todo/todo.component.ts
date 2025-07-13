import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  private apiUrl = 'http://localhost:5000/api/todos';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadTodos();
  }

  loadTodos() {
    this.http.get<Todo[]>(this.apiUrl).subscribe({
      next: (todos) => {
        console.log('Loaded todos:', todos);
        this.todos = todos;
      },
      error: (error) => {
        console.error('Error loading todos:', error);
        this.todos = [];
      }
    });
  }

  deleteTodo(todo: Todo) {
    this.http.delete(`${this.apiUrl}/${todo.id}`).subscribe({
      next: () => {
        const index = this.todos.indexOf(todo);
        if (index > -1) {
          this.todos.splice(index, 1);
        }
      },
      error: (error) => {
        console.error('Error deleting todo:', error);
      }
    });
  }

  addTodo(todo: Todo) {
    this.http.post<Todo>(this.apiUrl, todo).subscribe({
      next: (newTodo) => {
        this.todos.push(newTodo);
      },
      error: (error) => {
        console.error('Error adding todo:', error);
      }
    });
  }

  toggleTodo(todo: Todo) {
    const updatedTodo = { ...todo, completed: !todo.completed };
    this.http.put<Todo>(`${this.apiUrl}/${todo.id}`, updatedTodo).subscribe({
      next: (updated) => {
        const index = this.todos.indexOf(todo);
        if (index > -1) {
          this.todos[index] = updated;
        }
      },
      error: (error) => {
        console.error('Error updating todo:', error);
      }
    });
  }
}  