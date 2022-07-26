import { createAction, props  } from "@ngrx/store";

export type validFilters = 'all' | 'complete' | 'pending';

// setFilter action
export const setFilter = createAction(
    '[Filter] Set Filter',
     props<{filter: validFilters}>()
);