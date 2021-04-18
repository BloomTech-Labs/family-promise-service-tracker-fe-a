import React from 'react';
import RenderProgramsPage from './RenderProgramsPage';
import { TabletHeader } from '../../common/index';
import TitleComponent from '../../common/Title';

function ProgramsContainer() {
  return (
    <div>
      <TabletHeader />
      <div className="sub-header">
        <TitleComponent TitleText="Programs" />
        <RenderProgramsPage />
      </div>
    </div>
  );
}

export default ProgramsContainer;
