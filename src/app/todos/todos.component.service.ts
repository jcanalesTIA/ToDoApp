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
}
