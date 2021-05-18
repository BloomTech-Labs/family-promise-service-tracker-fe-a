import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {
  userReducer,
  serviceReducer,
  serviceTypeReducer,
  programReducer,
  employeeReducer,
  recipientReducer,
  householdReducer,
} from './reducers/index';
// test
export const rootReducer = combineReducers({
  user: userReducer,
  service: serviceReducer,
  serviceType: serviceTypeReducer,
  program: programReducer,
  employee: employeeReducer,
  recipient: recipientReducer,
  household: householdReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
