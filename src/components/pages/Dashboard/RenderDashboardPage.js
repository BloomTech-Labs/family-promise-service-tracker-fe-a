import React from 'react';
import { connect } from 'react-redux';
import EligibilityDashboard from './DashboardHouseholdEligibility';

function RenderDashboardPage({ user, status }) {
  return (
    <div>
      <div className="metrics-holder-dashboard center">
        <EligibilityDashboard />
        <div className="metrics-dashboard"></div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user.user,
    status: state.user.status,
  };
};

export default connect(mapStateToProps, {})(RenderDashboardPage);
