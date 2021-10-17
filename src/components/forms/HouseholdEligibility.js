import React from 'react';
import { connect } from 'react-redux';
import List from './HouseholdLists';
import ServiceDetail from '../forms/HouseholdActive';
import ServiceMap from '../pages/Dashboard/ServiceMap';
import RenderDashboardPage from '../pages/Dashboard/RenderDashboardPage';
import logo from '../../../src/assets/logo.png';
//  main layout
const HouseholdEligibility = props => (
  <div>
    <List />
    <hr />
    <ServiceMap />
    <RenderDashboardPage />
    <ServiceDetail />
  </div>
);

const mapStateToprops = state => {};

export default connect(mapStateToprops)(HouseholdEligibility);
