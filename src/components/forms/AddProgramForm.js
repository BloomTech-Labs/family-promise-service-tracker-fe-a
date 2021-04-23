import React from 'react';
import { Modal, Form, Input, Select } from 'antd';

function AddProgramForm({ visible, onCreate, onCancel }) {
  const [form] = Form.useForm();

  return (
    <Modal
      visible={visible}
      title="Add a New Program"
      okText="Add"
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
          label="Program Name"
          rules={[
            {
              required: true,
              message: 'Please input the program name',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="type"
          label="Program Type"
          rules={[
            {
              required: true,
              message: 'Please input the program type',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Program Description" name="description">
          <Input.TextArea showCount maxLength={240} />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default AddProgramForm;
