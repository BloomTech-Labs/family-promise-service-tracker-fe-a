import React, { useState, useEffect } from 'react';
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
  const [typeVisible, setTypeVisible] = useState(false);

  const onCreate = recipientObj => {
    addRecipientAction(recipientObj);
    setVisible(false);
  };

  const onCreateType = householdObj => {
    console.log('created new household: ', householdObj);
    console.log(householdObj.household_id);
    addHouseholdAction(householdObj);
    setTypeVisible(false);
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
            setTypeVisible(true);
          }}
        >
          Create Household
        </Button>
        <AddHouseholdForm
          visible={typeVisible}
          onCreate={onCreateType}
          onCancel={() => {
            setTypeVisible(false);
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
