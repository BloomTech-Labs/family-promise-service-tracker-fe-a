import React from 'react';
import { Form, Input, Select, InputNumber, Modal } from 'antd';

const { Option } = Select;

const ethnicity = ['Hispanic or Latino', 'Not Hispanic or Latino'];

const vet_status = ['Veteran', 'Not a Veteran'];

function AddRecipientForm({ visible, onCreate, onCancel }) {
  const [form] = Form.useForm();

  return (
    <>
      <Modal
        visible={visible}
        title="Create New Recipient"
        okText="Create Recipient"
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
                message: 'Please enter the Recipient Name',
              },
            ]}
          >
            <Input placeholder="Enter Name" size="large" />
          </Form.Item>
          <Form.Item label="Age" name="age">
            <InputNumber size="large" />
            <Input placeholder="Enter Age" size="large" />
          </Form.Item>
          <Form.Item
            name="select"
            label="Select"
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please select their gender',
              },
            ]}
          >
            <Select placeholder="Please select their gender">
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
              <Option value="nonbinary">Non-Binary Gender</Option>
            </Select>
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
            <Input placeholder="Enter Street Address" size="large" />
          </Form.Item>
          <Form.Item
            label="City"
            name="city"
            rules={[
              {
                required: true,
                message: 'Please enter the city',
              },
            ]}
          >
            <Input placeholder="Enter City" size="large" />
          </Form.Item>
          <Form.Item
            label="State"
            name="state"
            rules={[
              {
                required: true,
                message: 'Please enter the state',
              },
            ]}
          >
            <Input placeholder="Enter State" size="large" />
          </Form.Item>
          <Form.Item
            label="Zip Code"
            name="zipcode"
            rules={[
              {
                required: true,
                message: 'Please enter the zip code',
              },
            ]}
          >
            <Input placeholder="Enter Zip Code" size="large" />
          </Form.Item>
          <Form.Item label="Household Size" name="household_size">
            <InputNumber size="large" />
            <Input placeholder="Enter Size of Household" size="large" />
          </Form.Item>
          <Form.Item
            name="select-race"
            label="Select Race"
            rules={[
              {
                required: true,
                message: 'Please select the race of the recipient',
                type: 'array',
              },
            ]}
          >
            <Select
              mode="multiple"
              placeholder="Please select the race of the recipient"
            >
              <Option value="indian_native_alaskan">
                American Indian or Alaska Native
              </Option>
              <Option value="asian">Asian</Option>
              <Option value="black">Black/African American</Option>
              <Option value="hawaiian_pacific_islander">
                Native Hawaiian or Pacific Islander
              </Option>
              <Option value="white">White/Caucasian</Option>
            </Select>
          </Form.Item>
          <Select placeholder="Select Ethnicity" size="large">
            {ethnicity.map(item => (
              <Select.Option key={item}> {item}</Select.Option>
            ))}
          </Select>
          <Select placeholder="Select Veteran Status" size="large">
            {vet_status.map(item => (
              <Select.Option key={item}> {item}</Select.Option>
            ))}
          </Select>
        </Form>
      </Modal>
    </>
  );
}

export default AddRecipientForm;
