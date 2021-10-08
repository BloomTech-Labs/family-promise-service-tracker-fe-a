import React from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux';
import HouseholdEligibility from './householdeligibilitylist';
// combining a list of services and adding them to the store then passing to components.
const store = createStore(allReducers);

ReactDom.render(
  <Provider store={store}>
    {' '}
    <HouseholdEligibility />{' '}
  </Provider>,
  document.getElementById('root')
);
