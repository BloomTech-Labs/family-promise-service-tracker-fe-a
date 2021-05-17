import React from 'react';
import RenderEmployeesPage from './RenderEmployeesPage';
import { TableComponent } from '../../common';
import TitleComponent from '../../common/Title';

function EmployeesContainer() {
  return (
    <div style={{ margin: '0 auto' }}>
      <div className="sub-header">
        <TitleComponent TitleText="Employees" />
        <RenderEmployeesPage />
      </div>
      <div>
        <TableComponent />
      </div>
    </div>
  );
}

export default EmployeesContainer;
