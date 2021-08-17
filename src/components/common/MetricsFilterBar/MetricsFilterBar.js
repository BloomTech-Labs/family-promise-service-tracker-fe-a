import React, { useState } from 'react';
import '../../../styles/Dashboard.scss';
import {
  getServiceProviders,
  getAllServiceTypesAction,
  getAllProgramsAction,
  getAllRecipientAction,
} from '../../../state/actions/index';
import { connect } from 'react-redux';
import { Select } from 'antd';

const MetricsFilterBar = ({
  programs,
  serviceProviders,
  serviceTypes,
  recipients,
  getServiceProviders,
  getAllServiceTypesAction,
  getAllRecipientAction,
  getAllProgramsAction,
}) => {
  const { Option } = Select;
  const [drilledProgram, setDrilledProgram] = useState();
  const [drilledServiceProvider, setDrilledServiceProvider] = useState();
  const [drilledServiceType, setDrilledServiceType] = useState();
  const [drilledRecipient, setDrilledRecipient] = useState();

  //for when a user clicks on a different option in dropdown
  function onChangeProgram(value) {
    setDrilledProgram(value);
  }
  function onChangeServiceProvider(value) {
    setDrilledServiceProvider(value);
  }
  function onChangeServiceType(value) {
    setDrilledServiceType(value);
  }
  function onChangeRecipient(value) {
    setDrilledRecipient(value);
  }

  //for when a user clicks out of dropdown area
  function onBlur() {}

  //for when a user clicks on a dropdown
  function onFocusPrograms() {
    getAllProgramsAction();
  }

  function onFocusServiceTypes() {
    getAllServiceTypesAction();
  }

  function onFocusServiceProviders() {
    getServiceProviders();
  }

  function onFocusRecipients() {
    getAllRecipientAction();
  }

  //for when a user manually searches a dropdown
  function onSearch(value) {}

  return (
    <div>
      <div className="dropdowns-holder metrics-filter-bar">
        <div className="metricsBarLabelSelectPair">
          <label>Program Type</label>
          <Select
            className="dropdown-dashboard"
            showSearch
            style={{ width: 200 }}
            placeholder="-Select Program-"
            onChange={onChangeProgram}
            onFocus={onFocusPrograms}
            onBlur={onBlur}
            onSearch={onSearch}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {programs.map(individualProgram => {
              return (
                <Option
                  value={individualProgram.program_name}
                  key={individualProgram.program_id}
                >
                  {individualProgram.program_name}
                </Option>
              );
            })}
          </Select>
        </div>
        <div className="metricsBarLabelSelectPair">
          <label>Service Type</label>
          <Select
            className="dropdown-dashboard"
            showSearch
            style={{ width: 200 }}
            placeholder="-Select Service Type-"
            onChange={onChangeServiceType}
            onFocus={onFocusServiceTypes}
            onBlur={onBlur}
            onSearch={onSearch}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {serviceTypes.map(individualServiceType => {
              return (
                <Option
                  value={individualServiceType.service_type_name}
                  key={individualServiceType.service_type_id}
                >
                  {individualServiceType.service_type_name}
                </Option>
              );
            })}
          </Select>
        </div>
        <div className="metricsBarLabelSelectPair">
          <label>Service Provider</label>
          <Select
            className="dropdown-dashboard"
            showSearch
            style={{ width: 200 }}
            placeholder="-Select Service Provider-"
            onChange={onChangeServiceProvider}
            onFocus={onFocusServiceProviders}
            onBlur={onBlur}
            onSearch={onSearch}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {serviceProviders.map(individualServiceProvider => {
              return (
                <Option
                  value={individualServiceProvider.provider_first_name}
                  key={individualServiceProvider.provider_id}
                >
                  {individualServiceProvider.provider_first_name}
                </Option>
              );
            })}
          </Select>
        </div>
        <div className="metricsBarLabelSelectPair">
          <label>Service Recipient</label>
          <Select
            className="dropdown-dashboard"
            showSearch
            style={{ width: 200 }}
            placeholder="-Select Recipients-"
            onChange={onChangeRecipient}
            onFocus={onFocusRecipients}
            onBlur={onBlur}
            onSearch={onSearch}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {recipients.map(individualRecipient => {
              return (
                <Option
                  value={
                    individualRecipient.recipient_first_name +
                    individualRecipient.recipient_last_name
                  }
                  key={individualRecipient.recipient_id}
                >
                  {individualRecipient.recipient_first_name}{' '}
                  {individualRecipient.recipient_last_name}
                </Option>
              );
            })}
          </Select>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    programs: state.program.programs,
    serviceTypes: state.serviceType.serviceTypes,
    serviceProviders: state.service.serviceProviders,
    recipients: state.recipient.recipients,
  };
};

export default connect(mapStateToProps, {
  getServiceProviders,
  getAllServiceTypesAction,
  getAllProgramsAction,
  getAllRecipientAction,
})(MetricsFilterBar);
