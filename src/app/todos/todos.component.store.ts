import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Todo } from './models/todos.model';

interface TodoState {
  Todos: Todo[];
}

const defaultState: TodoState = {
  Todos: [],
};

@Injectable({
  providedIn: 'root',
})
export class TodosStore extends ComponentStore<TodoState> {
  constructor() {
    super(defaultState);
  }
}
