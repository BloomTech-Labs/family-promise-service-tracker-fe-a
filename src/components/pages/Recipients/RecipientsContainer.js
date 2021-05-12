import React from 'react';
import RenderRecipientsPage from './RenderRecipientsPage';
import { TabletHeader } from '../../common/index';
import RecipientTable from '../../common/RecipientsTable/RecipientTable';

function RecipientsContainer() {
  return (
    <div>
      <div>
        <RenderRecipientsPage />
      </div>
      <RecipientTable />
    </div>
  );
}

export default RecipientsContainer;
