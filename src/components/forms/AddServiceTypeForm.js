import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Select, Modal, Menu, Dropdown } from 'antd';
// import { DownOutlined } from '@ant-design/icons';
// import CC_NumberInput from './CustomizableComponents/CC_NumberInput';

function AddServiceTypeForm({ onCreate, onCancel, visible, programs }) {
  const [form] = Form.useForm();

  //state for which dropdown Value is selected
  // const [dropDownValue, setDropDownValue] = useState('');

  // const handleSelectCustomField = ({ key }) => {
  //   setDropDownValue(key);
  // };

  // const menu = (
  //   <Menu onClick={handleSelectCustomField}>
  //     <Menu.Item key="Number" value="Number">
  //       <a>Number</a>
  //     </Menu.Item>
  //     <Menu.Item key="Text">
  //       <a>Text</a>
  //     </Menu.Item>
  //     <Menu.Item key="Dropdown">
  //       <a>Dropdown</a>
  //     </Menu.Item>
  //     <Menu.Item key="Checkboxes">
  //       <a>Checkboxes</a>
  //     </Menu.Item>
  //     <Menu.Item key="RadioButtons">
  //       <a>Radio Buttons</a>
  //     </Menu.Item>
  //   </Menu>
  // );

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
            name="service_type_name"
            label="Service Name"
            rules={[
              {
                required: true,
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
            <Select
              mode="multiple"
              allowClear
              size="large"
              placeholder="Select Program"
            >
              {programs.map(item => (
                <Select.Option key={item.program_id} value={item.program_id}>
                  {item.program_name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            label="Service Description"
            name="service_type_description"
          >
            <Input.TextArea
              placeholder="Enter Details..."
              showCount
              maxLength={240}
            />
          </Form.Item>
          {/* <button onClick={}>Add a custom Service Field</button> */}
          {/* <Dropdown name="dropdown_custom" overlay={menu} trigger={['click']}>
            <a
              className="custom_dropdown_selector"
              onClick={e => e.preventDefault()}
            >
              Add A Custom Service Field <DownOutlined />
            </a>
          </Dropdown> */}

          {/* {dropDownValue === 'Number' ? <CC_NumberInput /> : <></>} */}
          {/* // Add these in and build this out in the forms>CustomizableComponents folder */}
          {/* {dropDownValue === 'Text' ? (
            <CC_TextInput />
          ) : <></>}
          {dropDownValue === 'Dropdown' ? (
            <CC_DropdownInput />
          ) : <></>}
          {dropDownValue === 'Checkboxes' ? (
            <CC_CheckboxesInput />
          ) : <></>}
          {dropDownValue === 'RadioButton' ? (
            <CC_RadioButtonInput />
          ) : <></>} */}
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
export default connect(mapStateToProps)(AddServiceTypeForm);
