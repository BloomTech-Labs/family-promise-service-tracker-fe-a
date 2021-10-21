import React from 'react';
import RenderDashboardPage from './RenderDashboardPage';
import TitleComponent from '../../common/Title';
import ServiceMap from './ServiceMap';
function DashboardContainer() {
  return (
    <div className="dashboard">
      <div className="sub-header center">
        <TitleComponent TitleText="Dashboard" className="center" />
        <div>
          <ServiceMap
          // data={
          //   // Needs to be refactored to take in response from api with
          //   // data in this format
          //   // Currently for testing only
          //   // geojson
          // }
          />
        </div>
      </div>
      <RenderDashboardPage className="dashboard-page" />
    </div>
  );
}

export default DashboardContainer;
