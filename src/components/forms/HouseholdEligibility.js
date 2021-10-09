import React from 'react';
import { connect } from 'react-redux';
import List from './lists';

//  Displayable list prepares for a dynamic setting

const HouseholdEligibility = () => (
  <div>
    <h3> Services </h3>
    <List />
    <hr />
    <h3> Details</h3>
  </div>
);

export default HouseholdEligibility;
