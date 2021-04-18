import React, { useState } from 'react';
import { Button } from 'antd';

//redux import
import { addServiceAction } from '../../../state/actions/index';
import { connect } from 'react-redux';

//component import
import AddServiceForm from '../../forms/AddServiceForm';

function RenderServicesPage({ addProgramAction }) {
  const [visible, setVisible] = useState(false);

  const onCreate = values => {
    console.log('received values of form:', values);
    setVisible(false);
  };

  return (
    <div className="add-services-btn-ctn">
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        Enter Service
      </Button>
      <AddServiceForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
}

export default RenderServicesPage;
