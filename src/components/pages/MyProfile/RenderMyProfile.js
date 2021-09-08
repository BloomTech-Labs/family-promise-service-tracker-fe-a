import React from 'react';
import { Form, Input, Button } from 'antd';

function RenderMyProfile({
  handleEdit,
  handleCancel,
  isInEditMode,
  onSubmit,
  onChange,
  uploadImage,
  loading,
  formValues,
  curUser,
}) {
  return (
    <div className="profile-container">
      <Form layout="vertical" onSubmit={onSubmit}>
        <Form.Item key="avatar">
          <div style={{ justifyContent: 'center' }}>
            {isInEditMode ? (
              <input type="file" name="file" onChange={uploadImage}></input>
            ) : (
              <img src={formValues.avatarUrl} alt="avatar" className="avatar" />
            )}
          </div>
        </Form.Item>

        <Form.Item key="first_name" label="First Name">
          <Input
            disabled={!isInEditMode}
            placeholder={formValues.firstName}
            size="large"
            defaultValue={formValues.firstName}
            value={formValues.firstName}
            onChange={onChange}
            name="firstName"
          />
        </Form.Item>
        <Form.Item key="last_name" label="Last Name" className="label-header">
          <Input
            disabled={!isInEditMode}
            placeholder={formValues.lastName}
            size="large"
            defaultValue={formValues.lastName}
            value={formValues.lastName}
            onChange={onChange}
            name="lastName"
          />
        </Form.Item>
        <Form.Item key="programs" label="Your Programs">
          {curUser.programs ? (
            curUser.programs.map(program => (
              <div key={program.program_name}>
                <h4>{program.program_name}</h4>
              </div>
            ))
          ) : (
            <h4>'No Programs Currently Assigned'</h4>
          )}
        </Form.Item>

        <div className="save-edit-container">
          {!isInEditMode && (
            <Button
              size="large"
              type="primary"
              onClick={handleEdit}
              className="profile-btn"
            >
              Edit Profile
            </Button>
          )}
          {isInEditMode && (
            <Button
              size="large"
              type="primary"
              onClick={onSubmit}
              loading={loading}
              className="profile-btn"
            >
              Save Profile
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
