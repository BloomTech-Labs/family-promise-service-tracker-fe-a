import React from 'react';
import { connect } from 'react-redux';
import MetricsFilterBar from '../../common/MetricsFilterBar/MetricsFilterBar';
import EligibilityDashboard from './DashboardHouseholdEligibility';

// import GraphsPlaceholder from '../../common/GraphsPlaceholder/GraphsPlaceholder';

function RenderDashboardPage({ user, status }) {
  return (
    <div>
      <div className="metrics-holder-dashboard center">
        {/* <MetricsFilterBar /> */}

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
