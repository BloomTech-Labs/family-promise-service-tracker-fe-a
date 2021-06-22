import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Select, Modal, Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import CC_NumberInput from './CustomizableComponents/CC_NumberInput';
function AddServiceTypeForm({
  onCreate,
  onCancel,
  visible,
  programs,
  categories,
}) {
  const [form] = Form.useForm();
  // const [customDropDown, setCustomDropDown] = useState(false)
  const [dropDownValue, setDropDownValue] = useState('');
  // const toggleAddCustomDropdown = () => {
  //   setCustomDropDown(!customDropDown)
  // }

  const handleSelectCustomField = ({ key }) => {
    setDropDownValue(key);
  };
  //figure out
  const menu = (
    <Menu onClick={handleSelectCustomField}>
      <Menu.Item key="Number" value="Number">
        <a>Number</a>
      </Menu.Item>
      <Menu.Item key="1" value="Text">
        <a>Text</a>
      </Menu.Item>
      <Menu.Item key="2" value="Dropdown">
        <a>Dropdown</a>
      </Menu.Item>
      <Menu.Item key="3" value="Checkboxes">
        <a>Checkboxes</a>
      </Menu.Item>
      <Menu.Item key="4" value="RadioButtons">
        <a>Radio Buttons</a>
      </Menu.Item>
    </Menu>
  );

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
                  {item.program_name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="category_id"
            label="Category"
            rules={[
              {
                required: true,
                message: 'Please input the category type',
              },
            ]}
          >
            <Select size="large" placeholder="Select Category">
              {programs.map((
                // switch to categories once connected to backend.
                item
              ) => (
                <Select.Option key={item.id} value={item.id}>
                  {item.category_name}
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
          {/* <button onClick={}>Add a custom Service Field</button> */}
          <Dropdown name="dropdown_custom" overlay={menu} trigger={['click']}>
            <a
              className="custom_dropdown_selector"
              onClick={e => e.preventDefault()}
            >
              Add A Custom Service Field <DownOutlined />
            </a>
          </Dropdown>
          {/* <Form.Item
            name="custom_form"
            label="Add A Custom Form"
          // rules={[
          //   {
          //     required: true,
          //     message: 'Please input the program type',
          //   },
          // ]}
          >
            <Select size="large" placeholder="Add A Custom Entry Field">

              <Select.Option key="Number" value="Number" onChange={() => { setDropDownValue("Number") }}>
                Number
                </Select.Option>

            </Select>
          </Form.Item> */}
          {dropDownValue === 'Number' ? (
            <CC_NumberInput />
          ) : (
            <h1> womp womp</h1>
          )}
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
    categories: state.category.categories,
  };
};
export default connect(mapStateToProps, null)(AddServiceTypeForm);
