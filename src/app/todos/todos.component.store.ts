import { inject, Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { tapResponse } from '@ngrx/operators';
import { switchMap } from 'rxjs';
import { Todo } from './models/todos.model';
import { TodosComponentService } from './todos.component.service';

interface TodoState {
  todos: Todo[];
  total: number;
}

const defaultState: TodoState = {
  todos: [],
  total: 0,
};

@Injectable({
  providedIn: 'root',
})
export class TodosStore extends ComponentStore<TodoState> {
  private readonly service = inject(TodosComponentService);
  constructor() {
    super(defaultState);
  }

  readonly todos = this.selectSignal((state) => state.todos);

  readonly loadTodos = this.effect<void>((trigger$) =>
    trigger$.pipe(
      switchMap(() =>
        this.service.get().pipe(
          tapResponse({
            next: (todos) => this.patchState({ todos, total: todos.length }),
            error: (err) => console.error(err),
          }),
        ),
      ),
    ),
  );
}
