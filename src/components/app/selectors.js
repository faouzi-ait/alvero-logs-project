import { createSelector } from 'reselect';

const mainAppState = (state) => state.logs;

export const fetchedItems = createSelector(
  mainAppState,
  (substate) => substate.items
);
export const fetchedErrors = createSelector(
  mainAppState,
  (substate) => substate.err
);
export const loadingStatus = createSelector(
  mainAppState,
  (substate) => substate.isLoading
);
