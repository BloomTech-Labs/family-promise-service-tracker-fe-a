import React from 'react';
import { useHistory } from 'react-router-dom';
import { Typography, Space, Button } from 'antd';
import Title from './Title';
function MyProfileComponent({ user, Role, Programs }) {
  //Be sure to pass the TitleText in quotes when you render component
  const { Text } = Typography;
  const history = useHistory();
  return (
    <div className="center">
      <Title TitleText="MyProfile" className="center" />
      <div className="profile-card">
        <div className="tiny-avatar-container">
          {user.avatarUrl && (
            <img src={user.avatarUrl} alt="avatar" className="tiny-avatar" />
          )}
        </div>
        <Space direction="vertical" className="card-child">
          <Text type="secondary">Full Name</Text>
          <Text className="card-text">
            {user.firstName} {user.lastName}
          </Text>
        </Space>
        <Space direction="vertical" className="card-child">
          <Text type="secondary">Role</Text>
          <Text className="card-text">{user.provider_role_id}</Text>
        </Space>
        <Space direction="vertical" className="card-child">
          <Text type="secondary">Programs</Text>
          {/* <Text className="card-text">{user.programs.length}</Text> */}
        </Space>
        <Button
          size="medium"
          type="primary"
          onClick={() => history.push('/')}
          className="card-btn"
        >
          Edit Profile
        </Button>
      </div>
    </div>
  );
}

export default MyProfileComponent;
