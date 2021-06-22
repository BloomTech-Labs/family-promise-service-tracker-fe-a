import React from 'react';
import { Modal, Form, Input, Select } from 'antd';

function AddEmployeeForm({ visible, onCreate, onCancel }) {
  const [form] = Form.useForm();
  const programs = ['Prevention', 'Aftercare', 'Sheltering'];

  return (
    <Modal
      visible={visible}
      title="Add a New Provider"
      okText="Add"
      cancelText="Cancel"
      width="80%"
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
        name="add_employee_form_in_modal"
        initialValues={{
          modifier: 'public',
        }}
      >
        <Form.Item
          name="provider_first_name"
          label="First Name"
          rules={[
            {
              required: true,
              message: 'Please input the employee first name',
            },
          ]}
        >
          <Input placeholder="First Name" />
        </Form.Item>
        <Form.Item
          name="provider_last_name"
          label="Last Name"
          rules={[
            {
              required: true,
              message: 'Please input the employee last name',
            },
          ]}
        >
          <Input placeholder="Last Name" />
        </Form.Item>
        <Form.Item
          label="Role"
          name="role"
          rules={[
            {
              required: true,
              message: 'Please select the employee role',
            },
          ]}
        >
          <Select size="large" placeholder="Select Employee Role">
            {/* Could be dynamic by mapping through list of roles */}
            <Select.Option value="Administrator">Administrator</Select.Option>
            <Select.Option value="Program Manager">
              Program Manager
            </Select.Option>
            <Select.Option value="Service Provider">
              Service Provider
            </Select.Option>
            ))
          </Select>
        </Form.Item>
        <Form.Item label="Programs" name="programs">
          <Select placeholder="Select Programs" mode="multiple" size="large">
            {programs.map(item => (
              <Select.Option key={item}> {item}</Select.Option>
            ))}
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default AddEmployeeForm;
