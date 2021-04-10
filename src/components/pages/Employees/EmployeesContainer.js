import React from 'react';
import RenderEmployeesPage from './RenderEmployeesPage';
import { TabletHeader } from '../../common/index';

function EmployeesContainer() {
  return (
    <div>
      <TabletHeader />
      <RenderEmployeesPage />
    </div>
  );
}

export default EmployeesContainer;
