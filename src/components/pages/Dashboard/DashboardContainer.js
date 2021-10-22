import React from 'react';
import RenderDashboardPage from './RenderDashboardPage';
import TitleComponent from '../../common/Title';
import ServiceMap from './ServiceMap';
import ServiceDetail from '../../forms/HouseholdActive';
import List from '../../forms/HouseholdLists';
function DashboardContainer() {
  return (
    <div className="dashboard">
      <div className="sub-header center">
        <TitleComponent TitleText="Dashboard" className="center" />
        <div>
          <List />
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
      <ServiceDetail />
    </div>
  );
}

export default DashboardContainer;
