import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { TodosStore } from './todos.component.store';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [TableModule, CommonModule, TagModule, ButtonModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent implements OnInit {
  readonly store = inject(TodosStore);
  ngOnInit(): void {
    this.store.loadTodos();
  }
}
