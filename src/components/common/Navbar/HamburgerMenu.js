import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import { useHistory } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  UserOutlined,
  TeamOutlined,
  ProjectOutlined,
  ReconciliationOutlined,
  UsergroupAddOutlined,
  MenuFoldOutlined,
  LeftCircleOutlined,
} from '@ant-design/icons';
import './navbar.css';

const HamburgerMenu = () => {
  const [visible, setVisible] = useState(false);
  const { Sider } = Layout;
  const history = useHistory();

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('okta-token-storage');
    localStorage.removeItem('okta-cache-storage');
    localStorage.removeItem('username');
    history.push('/login');
  };

  return (
    <>
      <Button type="dark" onClick={showDrawer} className="menu-button">
        {visible ? (
          <MenuFoldOutlined className="menu-icon" />
        ) : (
          <MenuUnfoldOutlined className="menu-icon" />
        )}
      </Button>
      <Drawer
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visible}
        width="200"
      >
        <Sider>
          <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item
              key="1"
              icon={<UserOutlined />}
              onClick={() => history.push('/')}
            >
              My Profile
            </Menu.Item>

            <Menu.Item
              key="2"
              icon={<TeamOutlined />}
              onClick={() => history.push('/employees')}
            >
              Employees
            </Menu.Item>

            <Menu.Item
              key="3"
              icon={<ProjectOutlined />}
              onClick={() => history.push('/programs')}
            >
              Programs
            </Menu.Item>

            <Menu.Item
              key="4"
              icon={<UsergroupAddOutlined />}
              onClick={() => history.push('/recipients')}
            >
              Recipients
            </Menu.Item>

            <Menu.Item
              key="5"
              icon={<ReconciliationOutlined />}
              onClick={() => history.push('/services')}
            >
              Services
            </Menu.Item>

            <Menu.Item
              key="6"
              icon={<LeftCircleOutlined />}
              className="logout-ctn"
              onClick={handleLogout}
            >
              Logout
            </Menu.Item>
          </Menu>
        </Sider>
      </Drawer>
    </>
  );
};

export default HamburgerMenu;
