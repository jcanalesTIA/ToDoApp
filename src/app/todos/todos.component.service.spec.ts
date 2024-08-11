import { TestBed } from '@angular/core/testing';

import { TodosComponentService } from './todos.component.service';

describe('TodosComponentService', () => {
  let service: TodosComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodosComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
