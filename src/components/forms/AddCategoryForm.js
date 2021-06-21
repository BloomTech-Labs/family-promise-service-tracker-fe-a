import React from 'react';
import { Modal, Form, Input, Select } from 'antd';

export default function AddCategoryForm({ visible, onCreate, onCancel }) {
  const { Option } = Select;
  const [form] = Form.useForm();

  return (
    <Modal
      visible={visible}
      title="Add a New Category"
      okText="Add"
      width="80%"
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
        name="add_category_form_in_modal"
        initialValues={{
          modifier: 'public',
        }}
      >
        <Form.Item
          name="name"
          label="Category Name"
          rules={[
            {
              required: true,
              message: 'Please input the category name',
            },
          ]}
        >
          <Select placeholder="Please select the category">
            <Option value="Program A">Program A</Option>
            <Option value="Program B">Program B</Option>
            <Option value="Program C">Program C</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Category Description" name="description">
          <Input.TextArea
            showCount
            maxLength={240}
            placeholder="Description..."
          />
        </Form.Item>
      </Form>
    </Modal>
  );
}
