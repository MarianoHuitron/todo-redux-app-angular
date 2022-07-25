import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { validFilters } from 'src/app/filtro/filtro.actions';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  filter: validFilters;

  constructor(private _store: Store<AppState>) { }

  ngOnInit(): void {
    this._store
      .subscribe(({todos, filter}) => {
        this.todos = todos;
        this.filter = filter;
      })
  }

}
