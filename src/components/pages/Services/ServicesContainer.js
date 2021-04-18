import React from 'react';
import RenderServicesPage from './RenderServicesPage';
import { TabletHeader } from '../../common/index';
import TitleComponent from '../../common/Title';

function ServicesContainer() {
  return (
    <div>
      <TabletHeader />
      <TitleComponent TitleText="Services" />
      <RenderServicesPage />
    </div>
  );
}

export default ServicesContainer;
