import React, { Link } from 'react';
import { Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const DropdownComponent = props => {
  console.log(props, 'role');
  const menu = (
    <Menu>
      <Menu.Item>
        <a>Administrator</a>
      </Menu.Item>
      <Menu.Item>
        <a>Program Manager</a>
      </Menu.Item>
      <Menu.Item>
        <a>Service Provider</a>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <Dropdown overlay={menu}>
        <Link
          className="ant-dropdown-link"
          style={{ color: '#1890FF' }}
          onClick={e => e.preventDefault()}
        >
          {props.record.role} <DownOutlined />
        </Link>
      </Dropdown>
    </>
  );
};

export default DropdownComponent;
