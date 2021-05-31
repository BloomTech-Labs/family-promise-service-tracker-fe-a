import React from 'react';
import RenderProgramsPage from './RenderProgramsPage';
import TitleComponent from '../../common/Title';
import ProgramTable from '../../common/ProgramsTable/ProgramTable';

function ProgramsContainer() {
  return (
    <div>
      <div className="sub-header">
        <TitleComponent TitleText="Programs" />
        <RenderProgramsPage />
      </div>
      <ProgramTable />
    </div>
  );
}

export default ProgramsContainer;
