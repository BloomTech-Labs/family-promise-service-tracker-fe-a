import React, { useState } from 'react';
import {
  Avatar,
  Form,
  Input,
  Button,
  Select,
  Upload,
  uploadButton,
} from 'antd';
// import { LoadingOutlined, PlusOutlined } from 'ant-design/icons';

const programs = ['Prevention', 'After Care', 'sheltering'];

function RenderMyProfile({
  curUser,
  onClick,
  disabled,
  isInEditMode,
  onSubmit,
  onChange,
  profile,
  setProfile,
}) {
  const [loading, setLoading] = useState('false');

  const uploadButton = (
    <div>
      {/* {loading ? <LoadingOutlined /> : <PlusOutlined />} */}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <div className="profile-container">
      <Form layout="vertical" onSubmit={onSubmit}>
        <div>
          <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            // beforeUpload={beforeUpload}
            // onChange={this.handleChange}
          >
            {curUser.avatarUrl ? (
              <img
                src={curUser.avatarUrl}
                alt="avatar"
                style={{ width: '100%' }}
                className="avatar-ctn"
              />
            ) : (
              uploadButton
            )}
          </Upload>

          {/* <Avatar size={200} src={curUser.avatarUrl} /> */}
        </div>
        <Form.Item
          label="Name"

          // rules={[
          //   {
          //     required: true,
          //     message: 'Please select the Recipient',
          //   },
          // ]}
        >
          {!isInEditMode ? (
            <Input
              disabled={disabled}
              // placeholder={curUser.name}
              size="large"
              defaultValue={curUser.name}
              value={curUser.name}
              onChange={onChange}
              name="name"
            />
          ) : (
            <Input
              size="small"
              defaultValue={curUser.name}
              value={profile.name}
              onChange={onChange}
              name="name"
            />
          )}
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
        <div className="save-edit-container">
          {!isInEditMode && (
            <Button
              size="large"
              type="primary"
              onClick={onClick}
              className="profile-btn"
            >
              Edit Name
            </Button>
          )}
          {isInEditMode && (
            <Button
              size="large"
              type="primary"
              onClick={onSubmit}
              className="profile-btn"
            >
              Save Name
            </Button>
          )}
        </div>
        <div className="cancel-contain">
          {isInEditMode && (
            <Button
              type="text"
              className="cancel-btn"
              size="large"
              onClick={onClick}
            >
              Cancel
            </Button>
          )}
        </div>
      </Form>
    </div>
  );
}

export default RenderMyProfile;
