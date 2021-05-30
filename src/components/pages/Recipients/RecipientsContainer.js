import React from 'react';
import RenderRecipientsPage from './RenderRecipientsPage';
import RecipientTable from '../../common/RecipientsTable/RecipientTable';
import TitleComponent from '../../common/Title';

function RecipientsContainer() {
  return (
    <div>
      <div className="sub-header">
        <TitleComponent TitleText="Recipients" />
        <RenderRecipientsPage />
      </div>
      <RecipientTable />
    </div>
  );
}

export default RecipientsContainer;
