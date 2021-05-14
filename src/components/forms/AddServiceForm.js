import React, { useState, useEffect } from 'react';
import {
  Form,
  Input,
  Select,
  InputNumber,
  DatePicker,
  TimePicker,
  Modal,
} from 'antd';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import {
  getServiceProviders,
  addServiceAction,
  getServiceTypes,
} from '../../state/actions/serviceActions';

//import {getAllRecipientAction} from '../../state/actions/recipientActions';

import { connect } from 'react-redux';

const { TextArea } = Input;

//const programs = ['Prevention', 'After Care', 'Sheltering'];

const service_types = ['Bus Pass', 'Rental Assistance', 'Clothing'];

const status = ['Complete', 'In Progress', 'Needs Follow-Up', 'Not Started'];
//const providers2 = ['john wick'];

function AddServiceForm({
  visible,
  onCreate,
  onCancel,
  serviceProviders,
  recipients,
  serviceTypes,
}) {
  // useEffect(() => {

  //   getServiceProviders();
  //   //getAllRecipientAction();
  //   getServiceTypes();
  // }, []);

  const [form] = Form.useForm();

  return (
    <>
      <Modal
        visible={visible}
        title="Log New Service"
        okText="Log Service"
        cancelText="Cancel"
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then(values => {
              form.resetFields();
              onCreate(values);
            })
            .catch(info => {
              console.log('Validate Failed', info);
            });
        }}
      >
        <Form
          layout="vertical"
          form={form}
          initialValue={{
            modifier: 'public',
          }}
        >
          <Form.Item
            label="Recipient Name"
            name="recipient_name"
            rules={[
              {
                required: true,
                message: 'Please select the Recipient',
              },
            ]}
          >
            <Select
              size="large"
              mode="multiple"
              placeholder="Select Recipients"
            >
              {recipients.map(recipient => (
                <Select.Option key={recipient}>
                  {recipient.first_name + ' ' + recipient.last_name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            label="Service Type"
            name="service_type"
            rules={[
              {
                required: true,
                message: 'Please select the Service Type',
              },
            ]}
          >
            <Select size="large" placeholder="Select Service Type">
              {service_types.map(item => (
                <Select.Option key={item}> {item}</Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item label="Quantity" name="quantity">
            <InputNumber size="large" />
          </Form.Item>
          <Form.Item
            label="Status"
            name="status"
            rules={[
              {
                required: true,
                message: 'Please select the program',
              },
            ]}
          >
            <Select placeholder="Select Status" size="large">
              {status.map(item => (
                <Select.Option key={item}> {item}</Select.Option>
              ))}
            </Select>
          </Form.Item>
          <div className="date-time-wrapper">
            <Form.Item
              label="Date"
              name="date"
              rules={[
                {
                  required: true,
                  message: 'Enter Date',
                },
              ]}
            >
              <DatePicker size="large" />
            </Form.Item>

            <Form.Item
              label="Time"
              className="time-input"
              name="time"
              rules={[
                {
                  required: true,
                  message: 'Select Time',
                },
              ]}
            >
              <TimePicker use12Hours format="h:mm a" size="large" />
            </Form.Item>
          </div>
          <Form.Item
            label="Provider(s)"
            name="provider"
            rules={[
              {
                required: true,
                message: 'Please select the providers',
              },
            ]}
          >
            <Select placeholder="Select Providers" mode="multiple" size="large">
              {serviceProviders.map(provider => (
                <Select.Option key={provider}>
                  {provider.firstName + ' ' + provider.lastName}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="Insert Description" name="description">
            <TextArea showCount maxLength={240} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
const mapStateToProps = state => {
  console.log('MSTP inside AddServiceForm', state);
  console.log('serviceTypes:', state.service.serviceTypes);
  console.log('serviceProviders', state.service.serviceProviders);
  return {
    serviceProviders: state.service.serviceProviders,
    recipients: state.recipient.recipients,
    serviceTypes: state.service.serviceTypes,
  };
};
export default connect(mapStateToProps, {
  addServiceAction,
  getServiceProviders,
  getServiceTypes,
})(AddServiceForm);
