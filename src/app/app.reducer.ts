import { ActionReducerMap } from "@ngrx/store";

import { validFilters } from "./filtro/filtro.actions";
import { Todo } from "./todos/models/todo.model";

import { todoReducer } from "./todos/todo.reducer";
import { filterReducer } from "./filtro/filtro.reducer";


export interface AppState {
    todos: Todo[];
    filter: validFilters;
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filter: filterReducer
}