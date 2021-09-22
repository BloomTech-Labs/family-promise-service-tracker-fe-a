import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import '../../../styles/Services.scss';

//redux import
import {
  addServiceAction,
  getServiceProviders,
  getAllServiceTypeProgramsAction,
  getAllProgramsAction,
  getAllRecipientAction,
  addServiceTypeAction,
  getAllServicesAction,
  getAllServiceUnitAction,
  getAllStatusAction,
  getAllLocationAction,
  getAllServiceRatingAction,
} from '../../../state/actions/index';

//component import
import AddServiceForm from '../../forms/AddServiceForm';
import AddServiceTypeForm from '../../forms/AddServiceTypeForm';

function RenderServicesPage({
  addServiceAction,
  getServiceProviders,
  getAllServicesAction,
  getAllRecipientAction,
  getAllProgramsAction,
  addServiceTypeAction,
  getAllServiceTypeProgramsAction,
  getAllServiceUnitAction,
  getAllStatusAction,
  getAllLocationAction,
  getAllServiceRatingAction,
}) {
  const [visible, setVisible] = useState(false);
  const [typeVisible, setTypeVisible] = useState(false);

  useEffect(() => {
    getAllServicesAction();
    getServiceProviders();
    getAllRecipientAction();
    getAllServiceTypeProgramsAction();
    getAllProgramsAction();
    getAllServiceUnitAction();
    getAllStatusAction();
    getAllLocationAction();
    getAllServiceRatingAction();
  }, [
    getAllServicesAction,
    getServiceProviders,
    getAllRecipientAction,
    getAllServiceTypeProgramsAction,
    getAllProgramsAction,
    getAllServiceUnitAction,
    getAllStatusAction,
    getAllLocationAction,
    getAllServiceRatingAction,
  ]);

  const onCreate = values => {
    const { provided_at, duration } = values;
    const service_date = provided_at.format('YYYY-MM-DD[T00:00:00.000Z]');
    const service_time = provided_at.format('HH:mm:ss');
    const service_duration = duration.format('HH:mm:ss');
    const service_entry_data = {};

    const newService = {
      ...values,
      service_date,
      service_time,
      service_duration,
      service_entry_data,
    };
    delete newService.provided_at;
    delete newService.duration;

    setVisible(false);
    addServiceAction(newService);
  };

  const onCreateType = values => {
    setTypeVisible(false);
    addServiceTypeAction(values);
  };

  return (
    <>
      <div>
        <AddServiceTypeForm
          visible={typeVisible}
          onCreate={onCreateType}
          onCancel={() => {
            setTypeVisible(false);
          }}
        />
        <AddServiceForm
          visible={visible}
          onCreate={onCreate}
          onCancel={() => {
            setVisible(false);
          }}
        />
      </div>
      <div className="servicesTabAddButtonsWrapper">
        <Button
          type="primary"
          onClick={() => {
            setTypeVisible(true);
          }}
        >
          Add Service Type
        </Button>
        <Button
          type="primary"
          onClick={() => {
            setVisible(true);
          }}
        >
          Log Service
        </Button>
      </div>
    </>
  );
}

const mapStateToProps = state => {
  return {
    serviceProviders: state.service.serviceProviders,
    serviceTypePrograms: state.serviceTypePrograms.serviceTypePrograms,
    recipients: state.recipient.recipients,
    programs: state.program.programs,
    serviceUnits: state.serviceUnit.serviceUnits,
    statuses: state.status.statuses,
    locations: state.location.locations,
    serviceRatings: state.serviceRating.serviceRatings,
  };
};

export default connect(mapStateToProps, {
  addServiceAction,
  addServiceTypeAction,
  getAllServicesAction,
  getServiceProviders,
  getAllRecipientAction,
  getAllServiceTypeProgramsAction,
  getAllProgramsAction,
  getAllServiceUnitAction,
  getAllStatusAction,
  getAllLocationAction,
  getAllServiceRatingAction,
})(RenderServicesPage);
