import React from 'react';
import RenderEmployeesPage from './RenderEmployeesPage';
import { TableComponent } from '../../common';
import TitleComponent from '../../common/Title';

function EmployeesContainer() {
  return (
    <div>
      <div className="sub-header">
        <TitleComponent TitleText="Employees" />
        <RenderEmployeesPage />
      </div>
      <div className="tablectn">
        <TableComponent />
      </div>
    </div>
  );
}

export default EmployeesContainer;
