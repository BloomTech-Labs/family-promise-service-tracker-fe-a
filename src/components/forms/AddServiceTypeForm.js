import React from 'react';
import { connect } from 'react-redux';
import { Form, Input, Select, Modal, width } from 'antd';

function AddServiceTypeForm({ onCreate, onCancel, visible, programs }) {
  const [form] = Form.useForm();
  return (
    <>
      <Modal
        visible={visible}
        title="Add Service Type"
        okText="Add Service Type"
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
                <Select.Option key={item.id} value={item.id}>
                  {item.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="Service Description" name="description">
            <Input.TextArea
              placeholder="Enter Details..."
              showCount
              maxLength={240}
            />
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
export default connect(mapStateToProps, null)(AddServiceTypeForm);
