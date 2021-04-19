import React from 'react';
import RenderServicesPage from './RenderServicesPage';
import { TabletHeader } from '../../common/index';
import TitleComponent from '../../common/Title';

function ServicesContainer() {
  return (
    <div>
      <div className="sub-header">
        <TitleComponent TitleText="Services" />
        <RenderServicesPage />
      </div>
    </div>
  );
}

export default ServicesContainer;
