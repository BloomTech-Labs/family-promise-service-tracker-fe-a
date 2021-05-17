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
const providers = ['Ruth Higgins', 'John Wick', 'Samuel G.'];
const programs = ['Prevention', 'After Care', 'Sheltering'];
const serviceStatus = ['In Progress', 'Completed'];

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
            name="name2"
            label="Service Name"
            rules={[
              {
                // required: true,
                message: 'Please input the service name',
              },
            ]}
          >
            <Input placeholder="Add service name" />
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
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default AddServiceTypeForm;
