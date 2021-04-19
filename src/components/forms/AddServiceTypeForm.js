import React from 'react';
import { Modal, Form, Input, Select } from 'antd';

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
          </Form.Item>
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
          <Form.Item
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
          </Form.Item>
          <Form.Item label="Service Description" name="description">
            <Input.TextArea showCount maxLength={240} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default AddServiceTypeForm;
