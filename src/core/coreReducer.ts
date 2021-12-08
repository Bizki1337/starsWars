import { combineReducers } from 'redux';

import personsReducer from 'library/common/reducers/personsReducer';

const rootReducer = combineReducers({
  personsInfo: personsReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;


