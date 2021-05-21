import React, { useState } from 'react';
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

const HamburgerMenu = () => {
  const [visible, setVisible] = useState(false);
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
    setVisible(false);
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
        {userRole === 'administrator' ? (
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            className="navBar"
          >
            <Menu.Item
              key="1"
              icon={<UserOutlined />}
              onClick={() => onClick('/')}
            >
              My Profile
            </Menu.Item>

            <Menu.Item
              key="2"
              icon={<TeamOutlined />}
              onClick={() => onClick('/employees')}
            >
              Employees
            </Menu.Item>

            <Menu.Item
              key="3"
              icon={<ProjectOutlined />}
              onClick={() => onClick('/programs')}
            >
              Programs
            </Menu.Item>

            <Menu.Item
              key="4"
              icon={<UsergroupAddOutlined />}
              onClick={() => onClick('/recipients')}
            >
              Recipients
            </Menu.Item>

            <Menu.Item
              key="5"
              icon={<ReconciliationOutlined />}
              onClick={() => onClick('/services')}
            >
              Services
            </Menu.Item>

            <Menu.Item
              key="6"
              icon={<LeftCircleOutlined />}
              onClick={handleLogout}
            >
              Logout
            </Menu.Item>
          </Menu>
        ) : (
          <></>
        )}
        {userRole === 'program_manager' ? (
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            className="navBar"
          >
            <Menu.Item
              key="1"
              icon={<UserOutlined />}
              onClick={() => onClick('/')}
            >
              My Profile
            </Menu.Item>

            <Menu.Item
              key="3"
              icon={<ProjectOutlined />}
              onClick={() => onClick('/programs')}
            >
              Programs
            </Menu.Item>

            <Menu.Item
              key="4"
              icon={<UsergroupAddOutlined />}
              onClick={() => onClick('/recipients')}
            >
              Recipients
            </Menu.Item>

            <Menu.Item
              key="5"
              icon={<ReconciliationOutlined />}
              onClick={() => onClick('/services')}
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
        ) : (
          <></>
        )}
        {userRole === 'service_provider' ? (
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            className="navBar"
          >
            <Menu.Item
              key="1"
              icon={<UserOutlined />}
              onClick={() => onClick('/')}
            >
              My Profile
            </Menu.Item>

            <Menu.Item
              key="5"
              icon={<ReconciliationOutlined />}
              onClick={() => onClick('/services')}
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
        ) : (
          <></>
        )}
      </Header>
    </Layout>
  );
};

export default HamburgerMenu;
