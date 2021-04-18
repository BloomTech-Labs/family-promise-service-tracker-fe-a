import React from 'react';
import RenderProgramsPage from './RenderProgramsPage';
import { TabletHeader } from '../../common/index';
import TitleComponent from '../../common/Title';

function ProgramsContainer() {
  return (
    <div>
      <TabletHeader />
      <TitleComponent TitleText="Programs" />
      <RenderProgramsPage />
    </div>
  );
}

export default ProgramsContainer;
