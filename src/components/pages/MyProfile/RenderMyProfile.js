import React from 'react';
import { Avatar, Form, Input, Button, Select } from 'antd';

const programs = ['Prevention', 'After Care'];

function RenderMyProfile({ curUser, handleEdit }) {
  return (
    <div className="profile-container">
      <Form layout="vertical">
        <div className="avatar-ctn">
          <Avatar size={200} src={curUser.avatarUrl} />
        </div>
        <Form.Item
          label="Name"
          name="name"

          // rules={[
          //   {
          //     required: true,
          //     message: 'Please select the Recipient',
          //   },
          // ]}
        >
          <Input disabled="true" placeholder={curUser.name} size="large" />
        </Form.Item>
        <Form.Item
          label="Programs"
          rules={[
            {
              required: true,
              message: 'Please select the Project',
            },
          ]}
        >
          <Select size="large" mode="multiple" disabled defaultValue={programs}>
            {programs.map(item => (
              <Select.Option key={item}> {item}</Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Button size="large" type="primary">
          Edit Name
        </Button>
      </Form>
    </div>
  );
}

export default RenderMyProfile;
