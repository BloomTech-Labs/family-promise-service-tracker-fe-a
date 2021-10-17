import React from 'react';
import { connect } from 'react-redux';
import List from './HouseholdLists';
import ServiceDetail from '../forms/HouseholdActive';
import ServiceMap from '../pages/Dashboard/ServiceMap';
import RenderDashboardPage from '../pages/Dashboard/RenderDashboardPage';

//  main layout
const HouseholdEligibility = props => (
  <div>
    <h3 className="service"> Services </h3>
    <List />
    <hr />
    <ServiceMap />
    <RenderDashboardPage />
    <h3 className="Household"> Household Eligibility</h3>
    <ServiceDetail />
  </div>
);

const mapStateToprops = state => {};

export default connect(mapStateToprops)(HouseholdEligibility);
