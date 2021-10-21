import React from 'react';
import RenderReports from './RenderReports';
import TitleComponent from '../../common/Title';

function RecipientsContainer() {
  return (
    <div>
      <div className="sub-header">
        <TitleComponent TitleText="Reports" />
        <RenderReports />
      </div>
    </div>
  );
}

export default RecipientsContainer;
