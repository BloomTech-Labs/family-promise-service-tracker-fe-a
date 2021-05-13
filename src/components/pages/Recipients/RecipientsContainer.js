import React from 'react';
import RenderRecipientsPage from './RenderRecipientsPage';
import { TabletHeader } from '../../common/index';
import RecipientTable from '../../common/RecipientsTable/RecipientTable';
import TitleComponent from '../../common/Title';

function RecipientsContainer() {
  return (
    <div style={{}}>
      <div className="sub-header">
        <TitleComponent TitleText="Recipients" />
        <RenderRecipientsPage />
      </div>
      <div style={{}}>
        <RecipientTable />
      </div>
    </div>
  );
}

export default RecipientsContainer;
