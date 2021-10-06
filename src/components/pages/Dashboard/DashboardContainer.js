import React from 'react';
import RenderDashboardPage from './RenderDashboardPage';
import TitleComponent from '../../common/Title';
import ServiceMap from './ServiceMap';
function DashboardContainer() {
  const geojson = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: { id: '1', name: 'Prevention' },
        geometry: { type: 'Point', coordinates: [-117.426048, 47.658779] },
      },
      {
        type: 'Feature',
        properties: { id: '2', name: 'Shelter Support' },
        geometry: { type: 'Point', coordinates: [-117.5, 47.9] },
      },
      {
        type: 'Feature',
        properties: { id: '3', name: 'Aftercare' },
        geometry: { type: 'Point', coordinates: [-117.5, 47.7] },
      },
    ],
  };
  return (
    <div className="dashboard">
      <div className="sub-header center">
        <TitleComponent TitleText="Dashboard" className="center" />
        <div>
          <ServiceMap
            data={
              // Needs to be refactored to take in response from api with
              // data in this format
              // Currently for testing only
              geojson
            }
          />
        </div>
      </div>
      <RenderDashboardPage className="dashboard-page" />
    </div>
  );
}

export default DashboardContainer;
