import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Todo } from './models/todos.model';

@Injectable({
  providedIn: 'root',
})
export class TodosComponentService {
  private readonly http = inject(HttpClient);

  get() {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
  }
  delete(todo: Todo) {
    return this.http.delete<void>(
      `https://jsonplaceholder.typicode.com/todos/${todo.id}`,
    );
  }
  update(todo: Todo) {
    return this.http.put<Todo>(
      `https://jsonplaceholder.typicode.com/todos/${todo.id}`,
      todo,
    );
  }
}
