import React from 'react';
import RenderDashboardPage from './RenderDashboardPage';
import TitleComponent from '../../common/Title';
import ServiceMap from './ServiceMap';
import ServiceDetail from '../../forms/HouseholdActive';
import List from '../../forms/HouseholdLists';
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
      {
        type: 'Feature',
        properties: { id: '4', name: 'Prevention' },
        geometry: { type: 'Point', coordinates: [-117.13, 47.7] },
      },
      {
        type: 'Feature',
        properties: { id: '5', name: 'Shelter Support' },
        geometry: { type: 'Point', coordinates: [-117.15, 47.41] },
      },
      {
        type: 'Feature',
        properties: { id: '6', name: 'Aftercare' },
        geometry: { type: 'Point', coordinates: [-117.13, 47.38] },
      },
      {
        type: 'Feature',
        properties: { id: '7', name: 'Prevention' },
        geometry: { type: 'Point', coordinates: [-117.2, 47.4] },
      },
      {
        type: 'Feature',
        properties: { id: '8', name: 'Shelter Support' },
        geometry: { type: 'Point', coordinates: [-117.22, 47.37] },
      },
      {
        type: 'Feature',
        properties: { id: '9', name: 'Aftercare' },
        geometry: { type: 'Point', coordinates: [-117.23, 47.39] },
      },
      {
        type: 'Feature',
        properties: { id: '10', name: 'Prevention' },
        geometry: { type: 'Point', coordinates: [-117.21, 47.38] },
      },
      {
        type: 'Feature',
        properties: { id: '11', name: 'Shelter Support' },
        geometry: { type: 'Point', coordinates: [-117.2, 47.42] },
      },
      {
        type: 'Feature',
        properties: { id: '12', name: 'Aftercare' },
        geometry: { type: 'Point', coordinates: [-117.15, 47.46] },
      },
      {
        type: 'Feature',
        properties: { id: '13', name: 'Prevention' },
        geometry: { type: 'Point', coordinates: [-117.43, 47.65] },
      },
      {
        type: 'Feature',
        properties: { id: '14', name: 'Shelter Support' },
        geometry: { type: 'Point', coordinates: [-117.42, 47.6] },
      },
      {
        type: 'Feature',
        properties: { id: '15', name: 'Aftercare' },
        geometry: { type: 'Point', coordinates: [-117.1, 46.7] },
      },
      {
        type: 'Feature',
        properties: { id: '16', name: 'Prevention' },
        geometry: { type: 'Point', coordinates: [-117.21, 47.46] },
      },
      {
        type: 'Feature',
        properties: { id: '17', name: 'Shelter Support' },
        geometry: { type: 'Point', coordinates: [-117.2, 47.42] },
      },
      {
        type: 'Feature',
        properties: { id: '18', name: 'Aftercare' },
        geometry: { type: 'Point', coordinates: [-117.17, 40.0] },
      },
      {
        type: 'Feature',
        properties: { id: '19', name: 'Prevention' },
        geometry: { type: 'Point', coordinates: [-117.27, 47.42] },
      },
      {
        type: 'Feature',
        properties: { id: '20', name: 'Shelter Support' },
        geometry: { type: 'Point', coordinates: [-117.26, 47.39] },
      },
    ],
  };
  return (
    <div className="dashboard">
      <div className="sub-header center">
        <TitleComponent TitleText="Dashboard" className="center" />
        <div>
          <List />
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
      <ServiceDetail />
    </div>
  );
}

export default DashboardContainer;
