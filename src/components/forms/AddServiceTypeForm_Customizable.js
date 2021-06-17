import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Select, Modal, Card } from 'antd';
import { CustomFieldForm } from './CustomFieldForm';

function AddServiceTypeForm_Customizable({
  onCreate,
  onCancel,
  visible,
  programs,
}) {
  const [form] = Form.useForm();
  const [visibleCustomForm, setVisibleCustomForm] = useState(false);
  // const [customField, setCustomField] = useState({
  //     key: 'tab1',
  //     noTitleKey: 'app',
  // })

  // const onTabChange = (key, type) => {
  //     console.log(key, type);
  //     setCustomField({ [type]: key });
  // };

  // const tabList = [
  //     {
  //         key: 'tab1',
  //         tab: 'tab1',
  //     },
  //     {
  //         key: 'tab2',
  //         tab: 'tab2',
  //     },
  // ];

  // const contentList = {
  //     tab1: <p>content1</p>,
  //     tab2: <p>content2</p>,
  // };

  return (
    <>
      <Modal
        visible="true" // change back to {visible} once done editing.
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
                item // switch to categories once connected to backend.
              ) => (
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
          <h2>
            Fields that will be collected by default: Cost, Duration, Status,
            Notes
          </h2>

          {/* <div>
                        <Form.Item label="Service Description" name="description">
                            <Input.TextArea
                                placeholder="Enter Details..."
                                showCount
                                maxLength={240}
                            />
                        </Form.Item>
                    </div>
                    <Card
                        style={{ width: '100%' }}
                        title="Card title"
                        extra={<a href="#">More</a>}
                        tabList={tabList}
                        activeTabKey={this.state.key}
                        onTabChange={key => {
                            this.onTabChange(key, 'key');
                        }}
                    >
                        {contentList[this.state.key]}
                    </Card> */}

          <button onClick={() => setVisibleCustomForm(true)}>
            {' '}
            Add A Custom Field{' '}
          </button>
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
export default connect(mapStateToProps, null)(AddServiceTypeForm_Customizable);
