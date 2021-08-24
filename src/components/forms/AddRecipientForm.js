import React from 'react';
import { connect } from 'react-redux';
import { Form, Input, Select, DatePicker, Radio, Modal } from 'antd';

import { addRecipientAction } from '../../state/actions/recipientActions';

const { Option } = Select;

function AddRecipientForm({ visible, onCreate, onCancel, households }) {
  const [form] = Form.useForm();

  return (
    <>
      <Modal
        width="80%"
        visible={visible}
        title="Create New Recipient"
        okText="Create Recipient"
        cancelText="Cancel"
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then(values => {
              onCreate(values);
              console.log(values);

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
          name="add_recipient_form_in_modal"
          initialValues={{
            modifier: 'public',
          }}
        >
          <Form.Item
            label="First Name"
            name="recipient_first_name"
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
            label="Middle Name"
            name="recipient_middle_name"
            rules={[
              {
                message: "Please enter the Recipient's Middle Name",
              },
            ]}
          >
            <Input placeholder="Enter Middle Name" size="large" />
          </Form.Item>
          <Form.Item
            label="Last Name"
            name="recipient_last_name"
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
            label="Date of Birth"
            name="recipient_date_of_birth"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <DatePicker format="YYYY-MM-DD" />
          </Form.Item>
          <Form.Item
            name="gender_id"
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
              <Option value={1}>Female</Option>
              <Option value={2}>Male</Option>
              <Option value={3}>Transgender: M to F</Option>
              <Option value={4}>Transgender: F to M</Option>
              <Option value={5}>Gender fluid</Option>
              <Option value={6}>Agender</Option>
              <Option value={7}>Androgynous</Option>
              <Option value={8}>Bi-gender</Option>
              <Option value={9}>Non-binary</Option>
              <Option value={10}>Demi-boy</Option>
              <Option value={11}>Demi-girl</Option>
              <Option value={12}>Genderqueer</Option>
              <Option value={13}>Gender noncomforming</Option>
              <Option value={14}>Tri-gender</Option>
              <Option value={15}>All genders</Option>
              <Option value={16}>In the middle of boy and girl</Option>
              <Option value={17}>Intersex</Option>
              <Option value={18}>Not sure</Option>
              <Option value={19}>Prefer not to say</Option>
              <Option value={20}>Other</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="race_id"
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
              rules={[{ required: true }]}
            >
              <Option value={1}>White</Option>
              <Option value={2}>Black/African-American</Option>
              <Option value={3}>Asian</Option>
              <Option value={4}>Native Americian/First Peoples</Option>
              <Option value={5}>Hawaiian/Pacific Islander</Option>
              <Option value={6}>Other</Option>
              <Option value={7}>Prefer not to say</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Select Ethnicity"
            name="ethnicity_id"
            rules={[{ required: true }]}
          >
            <Radio.Group>
              <Radio value={1}>Hispanic/Latino</Radio>
              <Radio value={2}>Non-Hispanic/Non-Latino</Radio>
              <Radio value={3}>Prefer not to say</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="Select Veteran Status"
            name="recipient_veteran_status"
            rules={[{ required: true }]}
          >
            <Radio.Group>
              <Radio value="true">Veteran</Radio>
              <Radio value="false">Not a Veteran</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="Select Recipient Address"
            name="household_id"
            rules={[{ required: true }]}
          >
            <Select size="large" placeholder="Select Address">
              {households.map(household => (
                <Select.Option
                  key={household.household_id}
                  value={household.household_id}
                >
                  {household.address +
                    ', ' +
                    household.city +
                    ', ' +
                    household.state}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

const mapStateToProps = state => {
  return {
    households: state.household.households,
  };
};

export default connect(mapStateToProps, {
  addRecipientAction,
})(AddRecipientForm);
