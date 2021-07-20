import { createStore } from 'redux';


import { rootReducer } from './reducers';
// the value from combineReducers

export const store = createStore(
  rootReducer
);
