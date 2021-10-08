import React from 'react';
import { connect } from 'react-redux';

//  Displayable list prepares for a dynamic setting with redux

const HouseholdEligibility = props => {
  return (
    <ul>
      <h3> Services </h3>
      <li className="eligible"> Shower</li>
      <li className="eligible">Laundry </li>
      <li className="eligible"> Case Managment </li>
      <li className="eligible"> Food Boxes </li>
      <li className="eligible"> Gas Card </li>
      <li className="eligible"> Life Skills Class </li>
      <li className="eligible"> Security Deposit </li>
      <li className="eligible"> Bus Token </li>
      <li className="eligible"> Bus Passes </li>
      <li className="eligible"> Rental Assitance </li>
      <li className="eligible"> Mental Health </li>
      <li className="eligible"> Counseling </li>
    </ul>
  );
};

const stateToProps = state => ({
  //services: state.service.services,
});

export default connect(stateToProps)(HouseholdEligibility);
