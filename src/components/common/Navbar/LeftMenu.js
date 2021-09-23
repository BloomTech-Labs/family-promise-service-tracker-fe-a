import React, { useState } from 'react';
import { Menu, Button } from 'antd';

export default function LeftMenu({ visible, onClick, logout }) {
  const [key, setKey] = useState({ current: 'menu-dashboard' });

  const handleSelect = e => {
    setKey({ current: e.key });
    visible();
  };
  return (
    <>
      <Menu
        mode="inline"
        style={{ border: 'none' }}
        selectedKeys={[key.current]}
        onClick={handleSelect}
      >
        <Menu.Item key="menu-dashboard" onClick={() => onClick('/')}>
          Dashboard
        </Menu.Item>
        <Menu.Item key="menu-programs" onClick={() => onClick('/programs')}>
          Program
        </Menu.Item>
        <Menu.Item key="menu-providers" onClick={() => onClick('/providers')}>
          Providers
        </Menu.Item>
        <Menu.Item key="menu-recipients" onClick={() => onClick('/recipients')}>
          Recipients
        </Menu.Item>
        <Menu.Item key="menu-reports" onClick={() => onClick('/reports')}>
          Reports
        </Menu.Item>
        <Menu.Item key="menu-services" onClick={() => onClick('/services')}>
          Services
        </Menu.Item>
        <Menu.Item key="menu-profile" onClick={() => onClick('/profile')}>
          My Profile
        </Menu.Item>
      </Menu>
      <div className="ant-btn-container">
        <Button onClick={logout}>Log Out</Button>
      </div>
    </>
  );
}
