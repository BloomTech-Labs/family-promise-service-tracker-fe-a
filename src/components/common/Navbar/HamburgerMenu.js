import React from 'react';
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

const HamburgerMenu = () => {
  const { Header } = Layout;
  const history = useHistory();

  const userRole = localStorage.getItem('role');

  const handleLogout = () => {
    localStorage.removeItem('okta-token-storage');
    localStorage.removeItem('okta-cache-storage');
    localStorage.removeItem('username');
    localStorage.removeItem('role');
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
        width: '100%',
      }}
    >
      <Header
        placement="center"
        style={{
          backgroundColor: 'white',
          margin: '0 auto',
          display: 'flex',
        }}
        // position='sticky'
      >
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          className="navBar"
        >
          <Menu.Item key="logo" disabled="true">
            <img src={logo} className="top-bar-img" alt="family promise logo" />
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
      </Header>
    </Layout>
  );
};

export default HamburgerMenu;
