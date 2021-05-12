import React, { useState } from 'react';
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
} from '../../state/actions/serviceActions';
import { connect } from 'react-redux';

const { TextArea } = Input;

const programs = ['Prevention', 'After Care', 'Sheltering'];

const status = ['Complete', 'In Progress', 'Needs Follow-Up', 'Not Started'];
const providers2 = ['john wick'];
axiosWithAuth()
  .get('/api/profiles/getserviceproviders')
  .then(res => {
    getServiceProviders(res);
    // providers = res.forEach(name => name.firstName + name.lastName);
    // console.log(providers);
  })
  .catch(err => {
    console.log(err, 'this is error fetching service providers');
  });

function AddServiceForm({ visible, onCreate, onCancel }) {
  const [form] = Form.useForm();
  const [providers, setProviders] = useState([]);

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
            <Input placeholder="Enter Name" size="large" />
          </Form.Item>

          {/* <Form.Item
            label="Program Name"
            name="program"
            rules={[
              {
                required: true,
                message: 'Please select the Project',
              },
            ]}
          >
            <Select size="large" placeholder="Select Program">
              {programs.map(item => (
                <Select.Option key={item}> {item}</Select.Option>
              ))}
            </Select>
          </Form.Item> */}
          {/* <Form.Item
            label="Address"
            name="Address"
            rules={[
              {
                required: true,
                message: 'Please enter the address',
              },
            ]}
          >
            <Input placeholder="Enter City" size="large" />
          </Form.Item>
          <Form.Item
            label="City"
            name="city"
            rules={[
              {
                required: true,
                message: 'Please enter the address',
              },
            ]}
          >
            <Input placeholder="Enter State" size="large" />
          </Form.Item>
          <Form.Item
            label="State"
            name="state"
            rules={[
              {
                required: true,
                message: 'Please enter the address',
              },
            ]}
          >
            <Input placeholder="Enter Zipcode" size="large" />
          </Form.Item>
          <Form.Item
            label="Zip Code"
            name="zipcode"
            rules={[
              {
                required: true,
                message: 'Please enter the ZipCode',
              },
            ]}
          >
            <Input placeholder="Enter address" size="large" />
          </Form.Item> */}
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
              {providers2.map(item => (
                <Select.Option key={item}> {item}</Select.Option>
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
  console.log('mstp', state);
  return {
    providers: state.serviceProviders,
  };
};
export default connect(mapStateToProps, {
  addServiceAction,
  getServiceProviders,
})(AddServiceForm);
