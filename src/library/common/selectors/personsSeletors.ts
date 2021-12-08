import { createSelector } from "reselect";

import { AppState } from "core/coreReducer";

const getPersonsPending = (state: AppState) => state.personsInfo.pending;

const getPersons = (state: AppState) => state.personsInfo.persons;

const getPersonsResults = (state: AppState) => state.personsInfo.persons.results;

const getPersonsError = (state: AppState) => state.personsInfo.error;

export const getPersonsSelector = createSelector(getPersons, (persons) => persons);

export const getPersonsResultsSelector = createSelector(getPersonsResults, (result) => result);

export const getPersonsPendingSelector = createSelector(
    getPersonsPending,
  (pending) => pending
);

export const getPersonsErrorSelector = createSelector(getPersonsError, (error) => error);