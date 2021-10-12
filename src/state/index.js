import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import {
  activeService,
  userReducer,
  serviceReducer,
  serviceTypeReducer,
  programReducer,
  employeeReducer,
  recipientReducer,
  householdReducer,
  statusReducer,
  householdElig,
  serviceUnitReducer,
  locationReducer,
  serviceRatingReducer,
  genderReducer,
  serviceTypeProgramsReducer,
  raceReducer,
  ethnicityReducer,
} from './reducers/index';
// test
export const rootReducer = combineReducers({
  active: activeService,
  user: userReducer,
  service: serviceReducer,
  serviceType: serviceTypeReducer,
  program: programReducer,
  employee: employeeReducer,
  recipient: recipientReducer,
  household: householdReducer,
  status: statusReducer,
  serviceUnit: serviceUnitReducer,
  services: householdElig,
  location: locationReducer,
  serviceRating: serviceRatingReducer,
  gender: genderReducer,
  serviceTypePrograms: serviceTypeProgramsReducer,
  race: raceReducer,
  ethnicity: ethnicityReducer,
});

const logger = createLogger({
  collapsed: true,
});

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
