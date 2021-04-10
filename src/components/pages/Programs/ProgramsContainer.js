import React from 'react';
import RenderProgramsPage from './RenderProgramsPage';
import { TabletHeader } from '../../common/index';

function ProgramsContainer() {
  return (
    <div>
      <TabletHeader />
      <RenderProgramsPage />
    </div>
  );
}

export default ProgramsContainer;
