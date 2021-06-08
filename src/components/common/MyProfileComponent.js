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
        {user.avatarUrl && (
          <img src={user.avatarUrl} alt="avatar" className="avatar" />
        )}
        <Space direction="vertical">
          <Text type="secondary">Full Name</Text>
          <Text>
            {user.firstName} {user.lastName}
          </Text>
        </Space>
        <Space direction="vertical">
          <Text type="secondary">Role</Text>
          <Text>{user.role}</Text>
        </Space>
        <Space direction="vertical">
          <Text type="secondary">Programs</Text>
          <Text>{user.programs.length}</Text>
        </Space>
        <Button
          size="large"
          type="primary"
          onClick={() => history.push('/')}
          className="profile-btn"
        >
          Edit Profile
        </Button>
      </div>
    </div>
  );
}

export default MyProfileComponent;
