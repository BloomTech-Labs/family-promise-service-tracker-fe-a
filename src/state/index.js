import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { userReducer, serviceReducer } from './reducers/index';

export const rootReducer = combineReducers({
  user: userReducer,
  service: serviceReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
