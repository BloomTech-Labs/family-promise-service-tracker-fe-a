import React from 'react';
import RenderEmployeesPage from './RenderEmployeesPage';
import { TabletHeader } from '../../common/index';
import TitleComponent from '../../common/Title';

function EmployeesContainer() {
  return (
    <div>
      <div className="sub-header">
        <TitleComponent TitleText="Employees" />
        <RenderEmployeesPage />
      </div>
    </div>
  );
}

export default EmployeesContainer;
