import React, { useState, useEffect } from 'react';
import AddRecipientForm from '../../forms/AddRecipientForm';
import AddHouseholdForm from '../../forms/AddHouseholdForm';
import {
  addRecipientAction,
  getAllRecipientAction,
} from '../../../state/actions/index.js';
import { connect } from 'react-redux';
import { Button } from 'antd';

function RenderRecipientsPage({ addRecipientAction, getAllRecipientAction }) {
  const [visible, setVisible] = useState(false);

  const onCreate = recipientObj => {
    addRecipientAction(recipientObj);
    setVisible(false);
  };

  useEffect(() => {
    onCreate();
  }, [addRecipientAction]);

  return (
    <>
      <div className="add-program-btn-ctn">
        <Button
          type="primary"
          onClick={() => {
            setVisible(true);
          }}
        >
          Add Recipient
        </Button>
        <AddRecipientForm
          visible={visible}
          onCreate={onCreate}
          onCancel={() => {
            setVisible(false);
          }}
        />
      </div>
      <div className="add-program-btn-ctn">
        <Button
          type="primary"
          onClick={() => {
            setVisible(true);
          }}
        >
          Create Household
        </Button>
        <AddHouseholdForm
          visible={visible}
          onCreate={onCreate}
          onCancel={() => {
            setVisible(false);
          }}
        />
      </div>
    </>
  );
}

const mapStateToProps = state => {
  return {
    recipients: state.recipient.recipients,
  };
};

export default connect(mapStateToProps, {
  addRecipientAction,
  getAllRecipientAction,
})(RenderRecipientsPage);
