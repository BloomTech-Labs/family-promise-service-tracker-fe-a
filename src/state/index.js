import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import {
  userReducer,
  serviceReducer,
  serviceTypeReducer,
  programReducer,
  employeeReducer,
  recipientReducer,
  householdReducer,
  statusReducer,
  serviceUnitReducer,
  locationReducer,
  raceReducer,
  ethnicityReducer,
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
  status: statusReducer,
  serviceUnit: serviceUnitReducer,
  location: locationReducer,
  race: raceReducer,
  ethnicity: ethnicityReducer,
});

const logger = createLogger({
  collapsed: true,
});

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
