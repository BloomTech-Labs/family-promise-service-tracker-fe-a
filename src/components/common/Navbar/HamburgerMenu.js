import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  TeamOutlined,
  ProjectOutlined,
  ReconciliationOutlined,
  UsergroupAddOutlined,
  LeftCircleOutlined,
} from '@ant-design/icons';
import logo from '../../../assets/logo.png';
import SubMenu from 'antd/lib/menu/SubMenu';

const HamburgerMenu = ({ userRole }) => {
  const { Header } = Layout;
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem('okta-token-storage');
    localStorage.removeItem('okta-cache-storage');
    localStorage.removeItem('username');
    history.push('/login');
    window.location.reload(); // quick fix need to change later
  };

  const onClick = s => {
    history.push(s);
  };

  return (
    <Layout
      style={{
        backgroundColor: 'white',
        maxWidth: 'max-content',
        margin: '0px auto',
      }}
    >
      <Menu theme="light" mode="horizontal" className="navBar">
        <Menu.Item key="logo" disabled="true">
          <img src={logo} className="top-bar-img" alt="Family Promise Logo" />
        </Menu.Item>

        {userRole === 'administrator' ? (
          <Menu.Item
            key="employees"
            icon={<TeamOutlined />}
            onClick={() => onClick('/employees')}
          >
            Employees
          </Menu.Item>
        ) : (
          <></>
        )}
        {userRole === 'administrator' || userRole === 'program_manager' ? (
          <Menu.Item
            key="programs"
            icon={<ProjectOutlined />}
            onClick={() => onClick('/programs')}
          >
            Programs
          </Menu.Item>
        ) : (
          <></>
        )}
        <Menu.Item
          key="recipients"
          icon={<UsergroupAddOutlined />}
          onClick={() => onClick('/recipients')}
        >
          Recipients
        </Menu.Item>

        <Menu.Item
          key="services"
          icon={<ReconciliationOutlined />}
          onClick={() => onClick('/services')}
        >
          Services
        </Menu.Item>
        <SubMenu key="profile" icon={<UserOutlined />} title="Profile">
          <Menu.Item
            key="viewProfile"
            icon={<UserOutlined />}
            onClick={() => onClick('/')}
          >
            My Profile
          </Menu.Item>
          <Menu.Item
            key="6"
            icon={<LeftCircleOutlined />}
            onClick={handleLogout}
          >
            Logout
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Layout>
  );
};

export default HamburgerMenu;
