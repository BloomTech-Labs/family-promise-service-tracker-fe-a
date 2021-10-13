import React from 'react';
import { connect } from 'react-redux';
import List from './HouseholdLists';
import ServiceDetail from '../forms/HouseholdActive';

//  main layout
const HouseholdEligibility = props => (
  <div>
    <h3> Services </h3>
    <List />
    <hr />
    <h3> Household Eligibility</h3>
    <ServiceDetail />
  </div>
);

const mapStateToprops = state => {
  return {};
};

export default connect(mapStateToprops)(HouseholdEligibility);
