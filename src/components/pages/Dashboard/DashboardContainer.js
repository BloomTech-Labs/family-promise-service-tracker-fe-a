import React from 'react';
import RenderDashboardPage from './RenderDashboardPage';
import TitleComponent from '../../common/Title';
import ServiceTable from './ServiceTable';

function DashboardContainer() {
  return (
    <div>
      <div className="sub-header center">
        <TitleComponent TitleText="Dashboard" className="center" />
        {/* <ServiceTable /> */}
      </div>
      <RenderDashboardPage className="dashboard-page" />
    </div>
  );
}

export default DashboardContainer;
