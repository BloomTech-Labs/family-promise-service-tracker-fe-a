import React from 'react';
import RenderDashboardPage from './RenderDashboardPage';
import TitleComponent from '../../common/Title';

function DashboardContainer() {
  return (
    <div className="dashboard">
      <div className="sub-header center">
        <TitleComponent TitleText="Dashboard" className="center" />
      </div>
      <RenderDashboardPage className="dashboard-page" />
    </div>
  );
}

export default DashboardContainer;
