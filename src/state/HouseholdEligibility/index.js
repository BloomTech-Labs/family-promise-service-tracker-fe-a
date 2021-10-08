import { combineReducers } from 'redux';
import household from './householdeligibilityReducer';

// this function grabs all three objects in householdeligiablity module converts to one big object to map over rather than mapping piece by piece.
const allReducers = combineReducers({
  services: household,
});

export default allReducers;
