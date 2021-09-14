import React from 'react';
import { Form, Input, InputNumber, Modal } from 'antd';

function AddHouseholdForm({ visible, onCreate, onCancel }) {
  const [form] = Form.useForm();

  return (
    <>
      <Modal
        visible={visible}
        title="Create New Household"
        okText="Create Household"
        cancelText="Cancel"
        width="80%"
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then(values => {
              onCreate(values);
              form.resetFields();
            })
            .catch(info => {
              console.log('Validate Failed', info);
            });
        }}
      >
        <Form
          layout="vertical"
          form={form}
          initialValues={{
            modifier: 'public',
          }}
        >
          <Form.Item
            label="Address"
            name="address"
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
            name="zip_code"
            rules={[
              {
                required: true,
                message: 'Please enter the zip code',
              },
            ]}
          >
            <InputNumber placeholder="Enter Zip Code" size="large" />
          </Form.Item>
          <Form.Item label="Household Size" name="household_size">
            <InputNumber size="large" placeholder="0" min="0" max="20" />
          </Form.Item>
          <Form.Item
            label="Household Characteristics"
            name="household_characteristics"
            rules={[
              {
                message:
                  'Please enter any additional details about the household',
              },
            ]}
          >
            <Input.TextArea placeholder="Enter Details..." />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default AddHouseholdForm;
