import React, { useState, useEffect } from 'react';
import { Button } from 'antd';

//redux import
import {
  addServiceAction,
  getServiceProviders,
  getServiceTypes,
  getAllProgramsAction,
} from '../../../state/actions/index';

import { getAllRecipientAction } from '../../../state/actions/recipientActions';

import { connect } from 'react-redux';

//component import
import AddServiceForm from '../../forms/AddServiceForm';
import AddServiceTypeForm from '../../forms/AddServiceTypeForm';
//import { axiosWithAuth } from '../../../utils/axiosWithAuth';

//addServiceTypeAction
function RenderServicesPage({
  addServiceAction,
  getServiceProviders,
  getAllRecipientAction,
  getServiceTypes,
  getAllProgramsAction,
  addServiceTypeAction,
}) {
  const [visible, setVisible] = useState(false);
  const [typeVisible, setTypeVisible] = useState(false);
  // const [providers, setProviders] = useState([]);

  useEffect(() => {
    // axiosWithAuth()
    //   .get('/api/profiles/getserviceproviders')
    //   .then(res => {
    //     console.log('serviceProviders res inside RenderServicesPage', res.data);
    //     getServiceProviders(res.data);
    //   })
    //   .catch(err => {
    //     console.log(err, 'this is error fetching service providers');
    //   });
    getServiceProviders();
    getAllRecipientAction();
    getServiceTypes();
    getAllProgramsAction();
  }, []);

  const onCreate = values => {
    // console.log('received values of form:', values);
    setVisible(false);
    addServiceAction(values);
  };

  const onCreateType = values => {
    // console.log('received values from type', values);
    setTypeVisible(false);
    addServiceTypeAction(values);
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
  // console.log('MSTP inside RenderServicesPage',state);
  // const serviceProviderNames = state.service.serviceProviders.map(provider => {
  //   provider = provider.firstName+' '+provider.lastName;
  // });
  // console.log('serviceProviderNames:',serviceProviderNames);
  return {
    serviceProviders: state.service.serviceProviders,
    serviceTypes: state.service.serviceTypes,
    recipients: state.recipient.recipients,
    programs: state.program.programs,
    //default: state,
  };
};

export default connect(mapStateToProps, {
  addServiceAction,
  getServiceProviders,
  getAllRecipientAction,
  getServiceTypes,
  getAllProgramsAction,
})(RenderServicesPage);
