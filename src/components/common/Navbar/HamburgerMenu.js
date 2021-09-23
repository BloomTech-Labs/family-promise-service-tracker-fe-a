import React, { useState } from 'react';
import { Menu, Drawer, Layout } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import logo from '../../../assets/logo.png';
import LeftMenu from './LeftMenu';
import '../../../styles/DrawerMenu.scss';

const HamburgerMenu = ({ avatar, click, logout, user }) => {
  const [visible, setVisible] = useState(false);

  const clickVisible = () => {
    setVisible(!visible);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <Layout>
      <Menu>
        <Menu.Item key="hamburger-menu">
          <MenuOutlined onClick={clickVisible} />
        </Menu.Item>
        <Menu.Item className="top-bar-img">
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
          visible={clickVisible}
          onClick={click}
          logout={logout}
          user={user}
        />
      </Drawer>
    </Layout>
  );
};

export default HamburgerMenu;
