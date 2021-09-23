import React from 'react';
import { Menu, Button } from 'antd';

export default function LeftMenu() {
  return (
    <>
      <Menu mode="inline" style={{ border: 'none' }}>
        <Menu.Item>Dashboard</Menu.Item>
        <Menu.Item>Program</Menu.Item>
        <Menu.Item>Providers</Menu.Item>
        <Menu.Item>Recipients</Menu.Item>
        <Menu.Item>Reports</Menu.Item>
        <Menu.Item>Services</Menu.Item>
        <Menu.Item>My Profile</Menu.Item>
      </Menu>
      <div className="ant-btn-container">
        <Button>Log Out</Button>
      </div>
    </>
  );
}
