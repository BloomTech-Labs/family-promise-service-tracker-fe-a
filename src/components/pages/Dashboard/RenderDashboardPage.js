import React, { useState } from 'react';
import { connect } from 'react-redux';
import MyProfileComponent from '../../common/MyProfileComponent';

function RenderDashboardPage({ user, status }) {
  return <div>{status && <MyProfileComponent user={user} />}</div>;
}

const mapStateToProps = state => {
  return {
    user: state.user.user,
    status: state.user.status,
  };
};

export default connect(mapStateToProps, {})(RenderDashboardPage);
