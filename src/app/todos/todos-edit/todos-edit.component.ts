import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { TodosStore } from '../todos.component.store';

@Component({
  selector: 'app-todos-edit',
  standalone: true,
  imports: [DialogModule, ButtonModule, FormsModule, CheckboxModule],
  templateUrl: './todos-edit.component.html',
  styleUrl: './todos-edit.component.css',
})
export class TodosEditComponent {
  readonly store = inject(TodosStore);

  closeDialog(): void {
    this.store.patchState((state) => ({
      dialogVisibility: false,
    }));
  }

  saveAndClose(): void {
    this.store.update(this.store.selectedTodo());

    this.closeDialog();
  }
}
