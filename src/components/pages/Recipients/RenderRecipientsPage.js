import React, { useState } from 'react';
import AddRecipientForm from '../../forms/AddRecipientForm';
import AddHouseholdForm from '../../forms/AddHouseholdForm';
import {
  addRecipientAction,
  getAllRecipientAction,
  addHouseholdAction,
  getAllHouseholdAction,
} from '../../../state/actions/index.js';
import { connect } from 'react-redux';
import { Button } from 'antd';

function RenderRecipientsPage({
  addRecipientAction,
  getAllRecipientAction,
  addHouseholdAction,
  getAllHouseholdAction,
}) {
  const [visible, setVisible] = useState(false);
  const [householdVisible, setHouseholdVisible] = useState(false);

  const onCreate = recipientObj => {
    addRecipientAction(recipientObj);
    setVisible(false);
  };

  const onCreateHousehold = householdObj => {
    addHouseholdAction(householdObj);
    setHouseholdVisible(false);
  };

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
            setHouseholdVisible(true);
          }}
        >
          Create Household
        </Button>
        <AddHouseholdForm
          visible={householdVisible}
          onCreate={onCreateHousehold}
          onCancel={() => {
            setHouseholdVisible(false);
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
  addHouseholdAction,
  getAllHouseholdAction,
})(RenderRecipientsPage);
