import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { userReducer, serviceReducer, programReducer } from './reducers/index';

export const rootReducer = combineReducers({
  user: userReducer,
  service: serviceReducer,
  program: programReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
