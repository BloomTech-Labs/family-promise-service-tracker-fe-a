import React from 'react';
import { connect } from 'react-redux';
import { Input, Radio } from 'antd';

function CC_NumberInput({ onCreate, onCancel, visible, programs }) {
  return (
    <div>
      <h3>Custom Field Entry Name</h3>
      <Input
        label="Custom Field Entry Name"
        placeholder="What is the name of your custom field?"
        maxLength="150"
      />
      <br></br>
      <h3>Is the Service Provider required to fill out this field?</h3>
      <Radio>Required</Radio>
      <br></br>
      <h3>Custom Field Entry Instructions</h3>
      <Input
        placeholder="What instructions does your Service Provider need to know?"
        maxLength="400"
      />
    </div>
  );
}
const mapStateToProps = state => {
  return {
    serviceProviders: state.service.serviceProviders,
    recipients: state.recipient.recipients,
    serviceTypes: state.service.serviceTypes,
    programs: state.program.programs,
  };
};
export default connect(mapStateToProps, null)(CC_NumberInput);
