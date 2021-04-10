import React from 'react';
import RenderRecipientsPage from './RenderRecipientsPage';
import { TabletHeader } from '../../common/index';

function RecipientsContainer() {
  return (
    <div>
      <TabletHeader />
      <RenderRecipientsPage />
    </div>
  );
}

export default RecipientsContainer;
