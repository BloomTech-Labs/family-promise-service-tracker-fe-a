import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import {
  Form,
  Input,
  Select,
  InputNumber,
  DatePicker,
  TimePicker,
  Modal,
} from 'antd';
import { getAllProgramsAction } from '../../state/actions/programActions';
// import { Modal, Form, Input, Select } from 'antd';
const providers = ['Ruth Higgins', 'John Wick', 'Samuel G.'];
// const programs = ['Prevention', 'After Care', 'Sheltering'];
const serviceStatus = ['In Progress', 'Completed'];

function AddServiceTypeForm({ onCreate, onCancel, visible, programs }) {
  const [form] = Form.useForm();
  // useEffect(() => {
  //   getAllProgramsAction();
  // }, []);
  console.log(programs, 'here');
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
                // required: true,
                message: 'Please input the service name',
              },
            ]}
          >
            <Input size="large" placeholder="Enter Name" />
          </Form.Item>
          <Form.Item
            name="program_id"
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
                <Select.Option key={item} value={item.id}>
                  {item.name}
                </Select.Option>
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
const mapStateToProps = state => {
  return {
    serviceProviders: state.service.serviceProviders,
    recipients: state.recipient.recipients,
    serviceTypes: state.service.serviceTypes,
    programs: state.program.programs,
  };
};
export default connect(mapStateToProps, {
  getAllProgramsAction,
})(AddServiceTypeForm);
