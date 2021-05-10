import React from 'react';
import {
  Form,
  Input,
  Select,
  InputNumber,
  DatePicker,
  TimePicker,
  Modal,
} from 'antd';
// import { Modal, Form, Input, Select } from 'antd';

const programs = ['Prevention', 'After Care', 'Sheltering'];

function AddServiceTypeForm({ onCreate, onCancel, visible }) {
  const [form] = Form.useForm();

  return (
    <>
      <Modal
        visible={visible}
        title="Add Service Type"
        okText="Add Service Type"
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
              console.log('Validate Failed:', info);
            });
        }}
      >
        <Form
          form={form}
          layout="vertical"
          name="add_program_form_in_modal"
          initialValues={{
            modifier: 'public',
          }}
        >
          <Form.Item
            name="name"
            label="Service Name"
            rules={[
              {
                required: true,
                message: 'Please input the service name',
              },
            ]}
          >
            <Input />
            <Form.Item
              name="type"
              label="Program"
              rules={[
                {
                  required: true,
                  message: 'Please input the program type',
                },
              ]}
            >
              <Select size="large" placeholder="Select Program">
                {programs.map(item => (
                  <Select.Option key={item}>{item}</Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item label="Service Description" name="description">
              <Input.TextArea showCount maxLength={240} />
            </Form.Item>
            <Form.Item label="Unit" name="unit">
              <Input.TextArea showCount maxLength={240} />
            </Form.Item>
            <Form.Item label="Quantity" name="quantity">
              <Input.TextArea showCount maxLength={240} />
            </Form.Item>
            <Form.Item label="Value" name="value">
              <Input.TextArea showCount maxLength={240} />
            </Form.Item>
            <Form.Item label="Provider" name="provider">
              <Input.TextArea showCount maxLength={240} />
            </Form.Item>
            <Form.Item label="Recipient" name="recipient">
              <Input.TextArea showCount maxLength={240} />
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
          </Form.Item>

          <Form.Item
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
          </Form.Item>
          {/* <Form.Item
            name="type"
            label="Employees"
            rules={[
              {
                required: true,
                message: 'Please select employees associated',
              },
            ]}
          >
            <Select size="large" placeholder="Select Employees">
              {programs.map(item => (
                <Select.Option key={item}>{item}</Select.Option>
              ))}
            </Select>
          </Form.Item> */}
          <Form.Item
            name="type"
            label="Status"
            rules={[
              {
                required: true,
                message: 'Please select service status',
              },
            ]}
          >
            <Select size="large" placeholder="Select status">
              {programs.map(item => (
                <Select.Option key={item}>{item}</Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default AddServiceTypeForm;
