import React from 'react';
import { connect } from 'react-redux';
import List from './lists';

//  Displayable list prepares for a dynamic setting

const HouseholdEligibility = props => (
  <div>
    <h3> Services </h3>
    <List />
    <hr />
    <h3> Details</h3>
  </div>
);

const mapStateToprops = state => {
  console.log(state);
  return {
    services: state.services,
    Laundry: state.Laundry,
  };
};

export default connect(mapStateToprops)(HouseholdEligibility);
