import React from 'react';
import { connect } from 'react-redux';
import MyProfileComponent from '../../common/MyProfileComponent';
import MetricsFilterBar from '../../common/MetricsFilterBar/MetricsFilterBar';
import GraphsPlaceholder from '../../common/GraphsPlaceholder/GraphsPlaceholder';

function RenderDashboardPage({ user, status }) {
  return (
    <div>
      <div className="metrics-holder-dashboard center">
        <MetricsFilterBar />
        <div className="metrics-dashboard"></div>
      </div>
      {status && <MyProfileComponent user={user} />}
      <GraphsPlaceholder />
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
