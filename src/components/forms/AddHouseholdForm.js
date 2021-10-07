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
            label="location Id"
            name="location_id"
            rules={[
              {
                required: false,
                message: 'Please enter the location id',
              },
            ]}
          >
            <Input placeholder="Enter location id" size="large" />
          </Form.Item>
          <Form.Item
            label="Household Name"
            name="household_name"
            rules={[
              {
                required: true,
                message: 'Please enter household name',
              },
            ]}
          >
            <Input placeholder="Please enter household name" size="large" />
          </Form.Item>
          <Form.Item
            label="Household Size"
            name="household_size"
            rules={[
              {
                required: true,
                message: 'Please enter the household size',
              },
            ]}
          >
            <InputNumber
              placeholder="Please enter the household size"
              size="large"
            />
          </Form.Item>
          <Form.Item
            label="Household Monthly Income"
            name="household_monthly_income"
            rules={[
              {
                required: true,
                message: 'Please enter the household monthly income',
              },
            ]}
          >
            <Input
              placeholder="Please enter the household monthly income"
              size="large"
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

// add a maptostate

export default AddHouseholdForm;
