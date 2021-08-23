import React from 'react';
import RenderServicesPage from './RenderServicesPage';
import TitleComponent from '../../common/Title';
import ServiceTable from '../../common/ServicesTable/ServiceTable';
import '../../../styles/Services.scss';

function ServicesContainer() {
  return (
    <div>
      <div className="sub-header">
        <div className="servicesTitleContainer">
          <TitleComponent TitleText="Services" />
        </div>
        <RenderServicesPage />
      </div>
      <div>
        <ServiceTable />
      </div>
    </div>
  );
}

export default ServicesContainer;
