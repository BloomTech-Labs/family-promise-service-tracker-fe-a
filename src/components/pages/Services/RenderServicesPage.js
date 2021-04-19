import React, { useState } from 'react';
import { Button } from 'antd';

//redux import
import { addServiceAction } from '../../../state/actions/index';
import { connect } from 'react-redux';

//component import
import AddServiceForm from '../../forms/AddServiceForm';
import AddServiceTypeForm from '../../forms/AddServiceTypeForm';

//addServiceTypeAction
function RenderServicesPage({ addServiceAction }) {
  const [visible, setVisible] = useState(false);
  const [typeVisible, setTypeVisible] = useState(false);

  const onCreate = values => {
    console.log('received values of form:', values);
    setVisible(false);
    addServiceAction(values);
  };

  const onCreateType = values => {
    console.log('received values from type', values);
    setTypeVisible(false);
    // addServiceTypeAction(values);
  };

  return (
    <>
      <div className="add-type-btn-ctn">
        <Button
          type="primary"
          onClick={() => {
            setTypeVisible(true);
          }}
        >
          Add Service Type
        </Button>
        <AddServiceTypeForm
          visible={typeVisible}
          onCreate={onCreateType}
          onCancel={() => {
            setTypeVisible(false);
          }}
        />
      </div>

      <div className="add-services-btn-ctn">
        <Button
          type="primary"
          onClick={() => {
            setVisible(true);
          }}
        >
          Log Service
        </Button>
        <AddServiceForm
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

export default RenderServicesPage;
