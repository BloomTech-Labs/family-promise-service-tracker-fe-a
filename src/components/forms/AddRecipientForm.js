import React from 'react';
import { Form, Input, Select, InputNumber, Radio, Modal } from 'antd';

const { Option } = Select;

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
          name="add_recipient_form_in_modal"
          initialValue={{
            modifier: 'public',
          }}
        >
          <Form.Item
            label="First Name"
            name="first_name"
            rules={[
              {
                required: true,
                message: "Please enter the Recipient's First Name",
              },
            ]}
          >
            <Input placeholder="Enter First Name" size="large" />
          </Form.Item>
          <Form.Item
            label="Last Name"
            name="last_name"
            rules={[
              {
                required: true,
                message: "Please enter the Recipient's Last Name",
              },
            ]}
          >
            <Input placeholder="Enter Last Name" size="large" />
          </Form.Item>
          <Form.Item
            label="Age"
            name="age"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <InputNumber size="large" placeholder="0" min="0" max="130" />
          </Form.Item>
          <Form.Item
            name="gender"
            label="Select Gender"
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
            name="race"
            label="Select Race"
            rules={[
              {
                required: true,
                message: 'Please select the race of the recipient',
                // type: 'array',
              },
            ]}
          >
            <Select
              // mode="multiple" - limiting race to 1 temporarily to test Create Recipient
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
          <Form.Item label="Select Ethnicity" name="ethnicity">
            <Radio.Group>
              <Radio value="hispanic">Hispanic or Latino</Radio>
              <Radio value="not_hispanic">Not Hispanic or Latino</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Select Veteran Status" name="veteran_status">
            <Radio.Group>
              <Radio value="true">Veteran</Radio>
              <Radio value="false">Not a Veteran</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Select Household" name="household_id">
            <InputNumber size="large" placeholder="0" min="0" max="20" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default AddRecipientForm;
