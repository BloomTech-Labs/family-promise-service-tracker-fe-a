import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { TagsComponent, CheckboxComponent, DropdownComponent } from '../index';
import { Table, Input, Typography, Form, Tag, Space, Popconfirm } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

//action import
import {
  getAllEmployeeAction,
  editEmployeeAction,
  deleteEmployeeAction,
  getEmployeeByIdAction,
} from '../../../state/actions';

//0. Import the actions ✅
//1. Obtain employee data from the backend using action from store and setting that to users array using useEffect  ✅
//2. Bring in delete action and edit action from store  ✅
//3. Change color of programs -Jose
//4. Make Programs area dynamic for when people have more than 3 programs
//5. Comment out checkboxes  ✅
//6. Replace Edit and Delete with Pencil and Trash icon (preferably from Ant D)
//7. Changing

const TableComponent = ({
  getAllEmployeeAction,
  editEmployeeAction,
  deleteEmployeeAction,
  employees,
}) => {
  const tableData = [];
  const users = employees;

  const [form] = Form.useForm();
  const [formData, setFormData] = useState(tableData);
  const [editingKey, setEditingKey] = useState('');
  // const [userData, setUserData] = useState(users);

  useEffect(() => {
    getAllEmployeeAction();
  }, []);

  useEffect(() => {
    console.log('tableData:', tableData);
    console.log('tableData length:', tableData.length);
  }, [tableData]);

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
        // console.log(record, 'record');
        // console.log(record.programs, 'record programs');
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
            {/* <Popconfirm
              title="Sure to delete?"
              onConfirm={() => deleteUser(record.key)}
              danger
            >
              <a>Delete</a>
            </Popconfirm> */}
          </Space>
        );
      },
    },
  ];

  const userObjCreator = () => {
    console.log('I just ran');
    let key = 1;
    if (users) {
      users.map(user => {
        const programs = [];
        user.programs.map(program => {
          if (program !== null) {
            programs.push(program.name);
          }
        });
        return tableData.push({
          key: key++,
          name: `${user.firstName} ${user.lastName}`,
          role: user.role,
          programs: programs,
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

  // const deleteUser = key => {
  //   console.log('deleting user');
  //   setUserData(tableData.filter(user => user.key !== key));
  // };

  return (
    <>
      {tableData.length < 1 && <LoadingOutlined className="loader" />},
      {tableData.length >= 1 && (
        <Table
          // rowSelection={CheckboxComponent(tableData)}
          columns={columns}
          dataSource={tableData}
        />
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    employees: state.employee.employees,
  };
};

export default connect(mapStateToProps, {
  getAllEmployeeAction,
  editEmployeeAction,
  deleteEmployeeAction,
})(TableComponent);
