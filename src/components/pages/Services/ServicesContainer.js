import React from 'react';
import RenderServicesPage from './RenderServicesPage';
import { TabletHeader } from '../../common/index';
import TitleComponent from '../../common/Title';
import ServiceTable from '../../common/ServicesTable/ServiceTable';

function ServicesContainer() {
  return (
    <div>
      <div className="services-header">
        <TitleComponent TitleText="Services" />
        <RenderServicesPage />
      </div>
      <div>
        <ServiceTable />
      </div>
    </div>
  );
}

export default ServicesContainer;
