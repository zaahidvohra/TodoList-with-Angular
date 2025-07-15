
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, catchError, tap } from 'rxjs';
import { Todo } from '../Todo';
import { getApiUrl, API_CONFIG } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl = getApiUrl(API_CONFIG.ENDPOINTS.TODOS);
  private storageKey = 'todos';

  constructor(private http: HttpClient) {}

  // Get todos from localStorage first, then try to sync with API
  getTodos(): Observable<Todo[]> {
    const localTodos = this.getLocalTodos();
    
    // Try to fetch from API and sync
    return this.http.get<Todo[]>(this.apiUrl).pipe(
      tap(apiTodos => {
        // If API call succeeds, update localStorage
        this.saveLocalTodos(apiTodos);
      }),
      catchError(error => {
        console.warn('API call failed, using localStorage:', error);
        return of(localTodos);
      })
    );
  }

  // Add todo to localStorage first, then try API
  addTodo(todo: Omit<Todo, 'id'>): Observable<Todo> {
    const newTodo: Todo = {
      ...todo,
      id: this.generateId()
    };

    // Save to localStorage immediately
    const localTodos = this.getLocalTodos();
    localTodos.push(newTodo);
    this.saveLocalTodos(localTodos);

    // Try to sync with API
    return this.http.post<Todo>(this.apiUrl, todo).pipe(
      tap(apiTodo => {
        // Update the todo with API response
        const todos = this.getLocalTodos();
        const index = todos.findIndex(t => t.id === newTodo.id);
        if (index > -1) {
          todos[index] = { ...apiTodo, id: apiTodo.id || newTodo.id };
          this.saveLocalTodos(todos);
        }
      }),
      catchError(error => {
        console.warn('Failed to sync with API, keeping local version:', error);
        return of(newTodo);
      })
    );
  }

  // Update todo in localStorage first, then try API
  updateTodo(id: number, todo: Partial<Todo>): Observable<Todo> {
    const localTodos = this.getLocalTodos();
    const index = localTodos.findIndex(t => t.id === id);
    
    if (index > -1) {
      localTodos[index] = { ...localTodos[index], ...todo };
      this.saveLocalTodos(localTodos);
      
      const updatedTodo = localTodos[index];
      
      // Try to sync with API
      return this.http.put<Todo>(`${this.apiUrl}/${id}`, updatedTodo).pipe(
        tap(apiTodo => {
          // Update with API response if successful
          localTodos[index] = apiTodo;
          this.saveLocalTodos(localTodos);
        }),
        catchError(error => {
          console.warn('Failed to sync update with API, keeping local version:', error);
          return of(updatedTodo);
        })
      );
    }
    
    return of({} as Todo);
  }

  // Delete todo from localStorage first, then try API
  deleteTodo(id: number): Observable<any> {
    const localTodos = this.getLocalTodos();
    const filteredTodos = localTodos.filter(t => t.id !== id);
    this.saveLocalTodos(filteredTodos);

    // Try to sync with API
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(
      catchError(error => {
        console.warn('Failed to sync delete with API, keeping local version:', error);
        return of({ message: 'Deleted locally' });
      })
    );
  }

  // LocalStorage helper methods
  private getLocalTodos(): Todo[] {
    const todos = localStorage.getItem(this.storageKey);
    return todos ? JSON.parse(todos) : [];
  }

  private saveLocalTodos(todos: Todo[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(todos));
  }

  private generateId(): number {
    const todos = this.getLocalTodos();
    return todos.length > 0 ? Math.max(...todos.map(t => t.id)) + 1 : 1;
  }
}
