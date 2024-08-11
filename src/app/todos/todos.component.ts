import { Component, inject, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { Todo } from './models/todos.model';
import { TodosEditComponent } from './todos-edit/todos-edit.component';
import { TodosStore } from './todos.component.store';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [TableModule, TagModule, ButtonModule, TodosEditComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent implements OnInit {
  readonly store = inject(TodosStore);
  ngOnInit(): void {
    this.store.loadTodos();
  }

  editTask(todo: Todo): void {
    this.store.patchState((state) => ({
      ...state,
      dialogVisibility: true,
      selectedTodo: todo,
    }));
  }

  addTask(todo: Todo): void {
    this.store.patchState((state) => ({
      ...state,
      dialogVisibility: true,
    }));

    console.log(todo);
  }
}
