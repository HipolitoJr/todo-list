import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { TODOS } from './todo-list';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  constructor() { }

  getTodos(): Observable<Todo[]> {
    return of(TODOS);
  }
}
