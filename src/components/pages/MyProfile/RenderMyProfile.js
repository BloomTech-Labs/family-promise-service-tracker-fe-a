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

function RenderMyProfile({
  curUser,
  profileValues,
  handleEdit,
  handleCancel,
  disabled,
  isInEditMode,
  onSubmit,
  onChange,
  uploadImage,
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
        <Form.Item>
          <img src={curUser.avatarUrl} alt="avatar" className="avatar" />
          {isInEditMode && (
            <input type="file" name="file" onChange={uploadImage}></input>
          )}
        </Form.Item>

        <Form.Item label="First Name" className="label-header">
          <Input
            disabled={disabled}
            placeholder={curUser.firstName}
            size="large"
            defaultValue={curUser.firstName}
            value={profileValues.firstName}
            onChange={onChange}
            name="firstName"
          />

          {/* {!isInEditMode ? 
          (
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
              size="large"
              defaultValue={curUser.name}
              value={curUser.name}
              onChange={onChange}
              name="name"
            />
          )} */}
        </Form.Item>
        <Form.Item label="Last Name" className="label-header">
          <Input
            disabled={disabled}
            placeholder={curUser.lastName}
            size="large"
            defaultValue={curUser.lastName}
            value={profileValues.lastName}
            onChange={onChange}
            name="lastName"
          />
        </Form.Item>
        <Form.Item label="Your Programs">
          <div>
            {curUser.programs.map(program => (
              <>
                <h4>{program.name}</h4>
              </>
            ))}
          </div>
        </Form.Item>
        {/* <Form.Item
          label="Programs"
          rules={[
            {
              required: true,
              message: 'Please select the Project',
            },
          ]}
        >
          <Select size="large" mode="multiple" disabled defaultValue={programs}>
            {curUser.programs.map(item => (
              <Select.Option key={item}> {item.name}</Select.Option>
            ))}
          </Select>
        </Form.Item> */}
        <div className="save-edit-container">
          {!isInEditMode && (
            <Button
              size="large"
              type="primary"
              onClick={handleEdit}
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
              onClick={handleCancel}
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
