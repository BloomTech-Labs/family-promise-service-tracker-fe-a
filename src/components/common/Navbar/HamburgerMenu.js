import React, { useState } from 'react';
import { Menu, Drawer, Layout } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import logo from '../../../assets/logo.png';
import LeftMenu from './LeftMenu';
import '../../../styles/DrawerMenu.scss';

const HamburgerMenu = ({ onClick }) => {
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
        <LeftMenu visible={clickVisible} onClick={onClick} />
      </Drawer>
    </Layout>
  );
};

export default HamburgerMenu;
