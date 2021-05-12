import React, { useState } from 'react';
import { Button } from 'antd';

//redux import
import {
  addServiceAction,
  getServiceProviders,
} from '../../../state/actions/index';
import { connect } from 'react-redux';

//component import
import AddServiceForm from '../../forms/AddServiceForm';
import AddServiceTypeForm from '../../forms/AddServiceTypeForm';

//addServiceTypeAction
function RenderServicesPage({ addServiceAction, getServiceProviders }) {
  const [visible, setVisible] = useState(false);
  const [typeVisible, setTypeVisible] = useState(false);
  // const [providers, setProviders] = useState([]);
  const onCreate = values => {
    console.log('received values of form:', values);
    setVisible(false);
    // setProviders(getServiceProviders());
    console.log('about to hit service providers');
    getServiceProviders();
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
const mapStateToProps = state => {
  console.log('mstp', state);
  return {
    providers: state.serviceProviders,
  };
};

export default connect(mapStateToProps, {
  addServiceAction,
  getServiceProviders,
})(RenderServicesPage);
