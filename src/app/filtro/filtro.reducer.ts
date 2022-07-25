import { Action, createReducer, on,  } from "@ngrx/store";
import { setFilter, validFilters } from "./filtro.actions";

export const initialState: validFilters = 'all';

const _filterReducer = createReducer<validFilters, Action>(
    initialState,
    on(setFilter, (state, {filter}) => filter),
);

export function filterReducer(state: any, action: any) {
    return _filterReducer(state, action);
}