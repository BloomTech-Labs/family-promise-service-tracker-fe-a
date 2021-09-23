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
  AppstoreOutlined,
  FileSearchOutlined,
} from '@ant-design/icons';
import logo from '../../../assets/logo.png';
import SubMenu from 'antd/lib/menu/SubMenu';
import Avatar from 'antd/lib/avatar/avatar';

const TabMenu = ({ userRole, avatar }) => {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem('okta-token-storage');
    localStorage.removeItem('okta-cache-storage');
    localStorage.removeItem('username');
    history.push('/login');
    window.location.reload();
  };

  const onClick = path => {
    history.push(path);
  };

  return (
    <Layout
      className="navBar"
      style={{
        backgroundColor: 'white',
        maxWidth: '100%',
        margin: '0px auto',
      }}
    >
      <div className="navBar">
        <Menu
          theme="light"
          mode="horizontal"
          className="sub-navBar"
          id="top-nav"
        >
          <Menu.Item
            key="logo"
            id="nav-logo"
            onClick={() => onClick('/dashboard')}
          >
            <img src={logo} className="top-bar-img" alt="Family Promise Logo" />
          </Menu.Item>
          <SubMenu
            key="profile"
            id="nav-profile"
            icon={
              <Avatar size="large" icon={<img src={avatar} alt="avatar" />} />
            }
            title=""
          >
            <Menu.Item
              key="viewProfile"
              icon={<UserOutlined />}
              onClick={() => onClick('/profile')}
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
        <Menu theme="light" mode="horizontal" className="sub-navBar">
          <Menu.Item
            key="dashboard"
            icon={<AppstoreOutlined />}
            onClick={() => onClick('/dashboard')}
          >
            Dashboard
          </Menu.Item>
          {userRole === 1 || userRole === 2 ? (
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
            key="services"
            icon={<ReconciliationOutlined />}
            onClick={() => onClick('/services')}
          >
            Services
          </Menu.Item>
          {/* TO DO: update employee as Providers */}
          {userRole === 1 ? (
            <Menu.Item
              key="employees"
              icon={<TeamOutlined />}
              onClick={() => onClick('/employees')}
            >
              Providers
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
            key="reports"
            icon={<FileSearchOutlined />}
            onClick={() => onClick('/reports')}
          >
            Reports
          </Menu.Item>
        </Menu>
      </div>
    </Layout>
  );
};

export default TabMenu;
