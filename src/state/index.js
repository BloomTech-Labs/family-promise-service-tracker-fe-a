import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {
  userReducer,
  serviceReducer,
  programReducer,
  employeeReducer,
} from './reducers/index';

export const rootReducer = combineReducers({
  user: userReducer,
  service: serviceReducer,
  program: programReducer,
  employee: employeeReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
