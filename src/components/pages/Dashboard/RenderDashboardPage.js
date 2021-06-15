import React from 'react';
import { connect } from 'react-redux';
import MyProfileComponent from '../../common/MyProfileComponent';
import MetricsFilterBar from '../../common/MetricsFilterBar/MetricsFilterBar';

function RenderDashboardPage({ user, status }) {
  return (
    <div>
      <MetricsFilterBar />
      {status && <MyProfileComponent user={user} />}
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
