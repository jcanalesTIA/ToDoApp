import { Routes } from '@angular/router';
import { AppRoute } from '../models/app-routes.enum';

export const routes: Routes = [
  {
    path: AppRoute.Root,
    loadComponent: () =>
      import('../../todos/todos.component').then((c) => c.TodosComponent),
  },
];
