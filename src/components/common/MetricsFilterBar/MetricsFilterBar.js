import React from 'react';
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

  //for when a user clicks on a different option in dropdown
  function onChange(value) {
    console.log('change', value);
  }

  //for when a user clicks out of dropdown area
  function onBlur() {
    console.log('blur');
  }

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
  function onSearch(value) {
    console.log('search', value);
  }

  return (
    <div className="dropdowns-holder metrics-filter-bar">
      <Select
        className="dropdown-dashboard"
        showSearch
        style={{ width: 200 }}
        placeholder="-Select Program-"
        onChange={onChange}
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
              value={individualProgram.program_id}
              key={individualProgram.program_id}
            >
              {individualProgram.program_name}
            </Option>
          );
        })}
      </Select>

      <Select
        className="dropdown-dashboard"
        showSearch
        style={{ width: 200 }}
        placeholder="-Select Service Type-"
        onChange={onChange}
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
              value={individualServiceType.service_type_id}
              key={individualServiceType.service_type_id}
            >
              {individualServiceType.service_type_name}
            </Option>
          );
        })}
      </Select>

      <Select
        className="dropdown-dashboard"
        showSearch
        style={{ width: 200 }}
        placeholder="-Select Service Provider-"
        onChange={onChange}
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
              value={individualServiceProvider.provider_id}
              key={individualServiceProvider.provider_id}
            >
              {individualServiceProvider.provider_first_name}
            </Option>
          );
        })}
      </Select>

      <Select
        className="dropdown-dashboard"
        showSearch
        style={{ width: 200 }}
        placeholder="-Select Recipients-"
        onChange={onChange}
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
              value={individualRecipient.recipient_id}
              key={individualRecipient.recipient_id}
            >
              {individualRecipient.recipient_first_name}{' '}
              {individualRecipient.recipient_last_name}
            </Option>
          );
        })}
      </Select>
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
