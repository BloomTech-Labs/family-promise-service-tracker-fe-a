import React, { useState } from 'react';
import {
  Table,
  Input,
  Dropdown,
  Menu,
  Button,
  Typography,
  Form,
  Tag,
  Space,
  Popconfirm,
} from 'antd';
import { DownOutlined } from '@ant-design/icons';

const users = [
  {
    name: 'Ruben Ramirez',
    role: 'Administrator',
    programs: ['Sheltering', 'Aftercare', 'Prevention'],
  },
  {
    name: 'Michael Scott',
    role: 'Program Manager',
    programs: ['Prevention', 'Sheltering', 'Aftercare'],
  },
  {
    name: 'John Legend',
    role: 'Program Manager',
    programs: ['Prevention', 'Aftercare', 'Sheltering'],
  },
  {
    name: 'Mary Higgins',
    role: 'Service Provider',
    programs: ['Sheltering', 'Aftercare'],
  },
  {
    name: 'Bilbo Baggins',
    role: 'Program Manager',
    programs: ['Prevention', 'Aftercare', 'Sheltering'],
  },
  {
    name: 'Frodo Baggins',
    role: 'Service Provider',
    programs: ['Sheltering', 'Aftercare'],
  },
  {
    name: 'Ruben Ramirez',
    role: 'Administrator',
    programs: ['Sheltering', 'Aftercare', 'Prevention'],
  },
  {
    name: 'Michael Scott',
    role: 'Program Manager',
    programs: ['Prevention', 'Sheltering', 'Aftercare'],
  },
  {
    name: 'John Legend',
    role: 'Program Manager',
    programs: ['Prevention', 'Aftercare', 'Sheltering'],
  },
  {
    name: 'Mary Higgins',
    role: 'Service Provider',
    programs: ['Sheltering', 'Aftercare'],
  },
  {
    name: 'Bilbo Baggins',
    role: 'Program Manager',
    programs: ['Prevention', 'Aftercare', 'Sheltering'],
  },
  {
    name: 'Frodo Baggins',
    role: 'Service Provider',
    programs: ['Sheltering', 'Aftercare'],
  },
];

const TableComponent = () => {
  const tableData = [];

  const [form] = Form.useForm();
  const [formData, setFormData] = useState(tableData);
  const [editingKey, setEditingKey] = useState('');
  const [selected, setSelected] = useState([]);
  const [userData, setUserData] = useState(users);

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

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      editable: true,
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <Form form={form} component={false}>
            <td>
              <Form.Item
                name={record.dataIndex}
                style={{ margin: 0 }}
                rules={[
                  {
                    required: true,
                    message: `Please Input ${record.title}!`,
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </td>
          </Form>
        ) : (
          <>{record.name}</>
        );
      },
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
      editable: true,
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <Dropdown overlay={menu}>
            <a
              className="ant-dropdown-link"
              style={{ color: '#1890FF' }}
              onClick={e => e.preventDefault()}
            >
              {record.role} <DownOutlined />
            </a>
          </Dropdown>
        ) : (
          <>{record.role}</>
        );
      },
    },
    {
      title: 'Programs',
      dataIndex: 'programs',
      key: 'programs',
      editable: true,
      render: programs => (
        <>
          {programs.map(program => {
            return (
              <Tag color="magenta" size="small" key={program}>
                {program}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Space size="middle">
              <a
                onClick={() => saveEdit(record.key)}
                style={{ color: '#1890FF', marginRight: 8 }}
              >
                Save
              </a>
              <Popconfirm title="Sure to cancelEdit?" onConfirm={cancelEdit}>
                <a style={{ color: '#1890FF' }}>Cancel</a>
              </Popconfirm>
            </Space>
          </span>
        ) : (
          <Space size="large">
            <Typography.Link
              disabled={editingKey !== ''}
              style={{ color: '#1890FF' }}
              onClick={() => editUser(record)}
            >
              Edit
            </Typography.Link>
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => deleteUser(record.key)}
              danger
            >
              <a>Delete</a>
            </Popconfirm>
          </Space>
        );
      },
    },
  ];

  const userObjCreator = () => {
    let key = 1;
    if (userData) {
      userData.map(user => {
        return tableData.push({
          key: key++,
          name: user.name,
          role: user.role,
          programs: user.programs,
        });
      });
    }
  };
  userObjCreator();

  const isEditing = record => record.key === editingKey;

  const editUser = record => {
    console.log('editing user');
    form.setFieldsValue({
      name: '',
      role: '',
      programs: [],
      ...record,
    });
    console.log(record, 'record');
    setEditingKey(record.key);
  };

  const cancelEdit = () => {
    setEditingKey('');
  };

  const saveEdit = async key => {
    try {
      const row = await form.validateFields();
      console.log(row, 'row');
      console.log(key, 'key');
      const newData = [...formData];
      const index = newData.findIndex(item => key === item.key);

      if (index > -1) {
        const item = newData[index];
        console.log(item, 'item');
        console.log(row, 'row');
        newData.splice(index, 1, { ...item, ...row });
        console.log(newData);
        setFormData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setFormData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const deleteUser = key => {
    console.log('deleting user');
    setUserData(tableData.filter(user => user.key !== key));
  };

  const selectedRowKeys = selected;

  const onSelectChange = selectedRowKeys => {
    setSelected(selectedRowKeys);
    const selectedUsers = [];
    selectedRowKeys.map(key => {
      tableData.map(user => {
        if (user.key === key) {
          selectedUsers.push(user);
        }
      });
    });
    console.log(`Selected User Data:`, selectedUsers);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  //   const mergedColumns = columns.map(col => {
  //     if (!col.editable) {
  //       return col;
  //     }

  //     return {
  //       ...col,
  //       onCell: record => ({
  //         record,
  //         inputType: col.dataIndex === 'text',
  //         dataIndex: col.dataIndex,
  //         title: col.title,
  //         editing: isEditing(record),
  //       }),
  //     };
  //   });

  return (
    <Table
      rowSelection={rowSelection}
      columns={columns}
      //   rowClassName="editable-row"
      //   pagination={{ onChange: cancelEdit }}
      dataSource={tableData}
    />
  );
};

export default TableComponent;
