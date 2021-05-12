import React from 'react';

import AddRecipientForm from '../../forms/AddRecipientForm';

function RenderRecipientsPage() {
  return (
    <>
      <div>
        <h1 className="recipientsHeader">Recipients</h1>
        <AddRecipientForm />
      </div>
    </>
  );
}

export default RenderRecipientsPage;
