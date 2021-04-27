import React, { useState } from 'react';
import { Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const DropdownComponent = props => {
  const initialRole = props.record.role;
  const [role, setRole] = useState(initialRole);

  const onClick = ({ key }) => {
    setRole(key);
  };

  const menu = (
    <Menu onClick={onClick}>
      <Menu.Item key="Administrator">
        <a>Administrator</a>
      </Menu.Item>
      <Menu.Item key="Program Manager">
        <a>Program Manager</a>
      </Menu.Item>
      <Menu.Item key="Service Provider">
        <a>Service Provider</a>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <Dropdown overlay={menu}>
        <a
          className="ant-dropdown-link"
          style={{ color: '#1890FF' }}
          onClick={e => e.preventDefault()}
        >
          {role} <DownOutlined />
        </a>
      </Dropdown>
    </>
  );
};

export default DropdownComponent;
