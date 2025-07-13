import { Component } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  todos!: Todo[];
  localItem!: String;

  deleteTodo(todo: Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  addTodo(todo: Todo) {
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  toggleTodo(todo:Todo){
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }

  constructor() {
    if (typeof localStorage !== 'undefined') {
      const localItem = localStorage.getItem('todos');
  
      if (localItem === null) {
        this.todos = [];
      } else {
        const parsedTodos = JSON.parse(localItem);
        this.todos = Array.isArray(parsedTodos) ? parsedTodos : [];
      }
    } else {
      // Fallback if localStorage is not available
      this.todos = [];
    }
  }
}  
