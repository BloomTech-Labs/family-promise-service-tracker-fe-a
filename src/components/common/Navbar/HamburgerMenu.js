import React, { useState } from 'react';
import { Menu, Drawer, Layout } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import logo from '../../../assets/logo.png';
import LeftMenu from './LeftMenu';
import '../../../styles/DrawerMenu.scss';

let current = 'menu-dashboard';

const HamburgerMenu = ({ avatar, click, logout, user }) => {
  const [visible, setVisible] = useState(false);
  const [key, setkey] = useState({ current });

  const clickVisible = () => {
    setVisible(!visible);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <Layout>
      <Menu
        theme="light"
        mode="horizontal"
        className="sub-hambuger-menu"
        id="hamburger-nav"
        onDeselect={() => setkey({ current })}
        selectedKeys={[key.current]}
      >
        <Menu.Item key="hamburger-menu">
          <MenuOutlined onClick={clickVisible} style={{ fontSize: '24px' }} />
        </Menu.Item>
        <Menu.Item className="top-bar-img" style={{ border: 'none' }}>
          <img src={logo} alt="Family Promise Logo" />
        </Menu.Item>
      </Menu>
      <Drawer
        visible={visible}
        closable={true}
        onClose={onClose}
        placement="left"
      >
        <LeftMenu
          avatar={avatar}
          current={current}
          visible={clickVisible}
          click={click}
          logout={logout}
          user={user}
        />
      </Drawer>
    </Layout>
  );
};

export default HamburgerMenu;
