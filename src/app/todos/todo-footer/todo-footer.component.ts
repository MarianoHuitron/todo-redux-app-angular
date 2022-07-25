import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions  from 'src/app/filtro/filtro.actions';
import * as actionsTodos from 'src/app/todos/todo.actions';
@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  currentFilter: actions.validFilters = 'all';
  filters: actions.validFilters[] = ['all', 'complete', 'pending'];
  pending: number = 0;

  constructor(
    private _store: Store<AppState>
  ) { }

  ngOnInit(): void {
    // this._store.select('filter').subscribe(filter => this.currentFilter = filter);
    this._store.subscribe(state => {
      this.currentFilter = state.filter;
      this.pending = state.todos.filter(todo => !todo.completado).length;
    })
  }

  changeFilter(filter: actions.validFilters) {
    this._store.dispatch(actions.setFilter({filter}));
  }

  clearCompleted() {
    this._store.dispatch(actionsTodos.cleanCompleted())
  }
}
