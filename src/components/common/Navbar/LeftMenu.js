import React, { useState } from 'react';
import { Menu, Button, Avatar } from 'antd';

export default function LeftMenu({ visible, click, logout, user, current }) {
  const [key, setKey] = useState({ current });

  const handleSelect = e => {
    setKey({ current: e.key });
    visible();
  };
  return (
    <>
      <Avatar size="large" icon={<img src={user.avatarUrl} alt="avatar" />} />
      <div className="menu-text"> Hello {user.firstName}!</div>
      <Menu
        mode="inline"
        style={{ border: 'none' }}
        selectedKeys={[key.current]}
        onClick={handleSelect}
      >
        <Menu.Item key="menu-dashboard" onClick={() => click('/')}>
          Dashboard
        </Menu.Item>
        <Menu.Item key="menu-programs" onClick={() => click('/programs')}>
          Program
        </Menu.Item>
        <Menu.Item key="menu-providers" onClick={() => click('/employees')}>
          Providers
        </Menu.Item>
        <Menu.Item key="menu-recipients" onClick={() => click('/recipients')}>
          Recipients
        </Menu.Item>
        <Menu.Item key="menu-reports" onClick={() => click('/reports')}>
          Reports
        </Menu.Item>
        <Menu.Item key="menu-services" onClick={() => click('/services')}>
          Services
        </Menu.Item>
        <Menu.Item key="menu-profile" onClick={() => click('/profile')}>
          My Profile
        </Menu.Item>
      </Menu>
      <div className="ant-btn-container">
        <Button onClick={logout}>Log Out</Button>
      </div>
    </>
  );
}
