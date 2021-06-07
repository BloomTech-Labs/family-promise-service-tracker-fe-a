import React from 'react';
import RenderDashboardPage from './RenderDashboardPage';
import TitleComponent from '../../common/Title';

function DashboardContainer() {
  return (
    <div>
      <div className="sub-header">
        <TitleComponent TitleText="Dashboard" />
        <RenderDashboardPage />
      </div>
    </div>
  );
}

export default DashboardContainer;
