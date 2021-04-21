import React, { useState, useEffect } from 'react';
import { TagsComponent, CheckboxComponent, DropdownComponent } from '../index';
import { Table, Input, Typography, Form, Tag, Space, Popconfirm } from 'antd';

const users = [
  {
    name: 'Ruben Ramirez',
    role: 'Administrator',
    programs: ['Sheltering', 'Aftercare', 'Prevention'],
  },
  {
    name: 'Michael Scott',
    role: 'Program Manager',
    programs: ['Prevention'],
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

const tableData = [];

const TableComponent = () => {
  const [form] = Form.useForm();
  const [formData, setFormData] = useState(tableData);
  const [editingKey, setEditingKey] = useState('');
  const [userData, setUserData] = useState(users);

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
          <DropdownComponent record={record} />
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
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <>
            <TagsComponent users={record} />
          </>
        ) : (
          <>
            {record.programs.map(program => {
              return (
                <Tag color="magenta" size="small" key={program}>
                  {program}
                </Tag>
              );
            })}
          </>
        );
      },
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
                onClick={() => save(record.key)}
                style={{ color: '#1890FF', marginRight: 8 }}
              >
                Save
              </a>
              <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                <a href="javascript;:" style={{ color: '#1890FF' }}>
                  Cancel
                </a>
              </Popconfirm>
            </Space>
          </span>
        ) : (
          <Space size="large">
            <Typography.Link
              disabled={editingKey !== ''}
              style={{ color: '#1890FF' }}
              onClick={() => edit(record)}
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

  const edit = record => {
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

  const cancel = () => {
    setEditingKey('');
  };

  const save = async key => {
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

  return (
    <Table
      rowSelection={CheckboxComponent(tableData)}
      columns={columns}
      dataSource={tableData}
    />
  );
};

export default TableComponent;
