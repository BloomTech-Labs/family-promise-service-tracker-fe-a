import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import {
  Table,
  Input,
  Typography,
  Form,
  Tag,
  Space,
  Popconfirm,
  Select,
} from 'antd';
import {
  LoadingOutlined,
  DeleteOutlined,
  EditOutlined,
} from '@ant-design/icons';

//action import
import {
  getAllEmployeeAction,
  editEmployeeAction,
  deleteEmployeeAction,
  getAllProgramsAction,
} from '../../../state/actions';

const TableComponent = ({
  getAllEmployeeAction,
  editEmployeeAction,
  getAllProgramsAction,
  employees,
  programs,
  change,
}) => {
  // tableData is what is consumed by the antd table on render
  const tableData = [];

  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState('');

  useEffect(() => {
    getAllEmployeeAction();
    getAllProgramsAction();
  }, [change, getAllEmployeeAction, getAllProgramsAction]);

  const isEditing = record => record.key === editingKey;

  const edit = record => {
    form.setFieldsValue({
      firstName: '',
      lastName: '',
      role: '',
      programs: [],
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async employeeId => {
    try {
      const employeeObj = await form.validateFields();
      editEmployeeAction(employeeId, employeeObj);
      setEditingKey('');
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  // Delete functionality is on hold for now
  const deleteUser = key => {
    // deleteEmployeeAction(key);
  };

  const selectRole = role => {
    return role === 1
      ? 'Administrator'
      : role === 2
      ? 'Program Manager'
      : role === 3
      ? 'Service Provider'
      : role === 'unassigned'
      ? 'None'
      : role;
  };

  const userObjCreator = () => {
    if (employees) {
      employees.forEach(employee => {
        const programsArray = [];
        programs.forEach(program => {
          if (program !== null) {
            programsArray.push(program.program_name);
          }
        });
        tableData.push({
          key: employee.provider_id,
          firstName: employee.provider_first_name,
          lastName: employee.provider_last_name,
          role: selectRole(employee.provider_role_id),
          programs: programsArray,
        });
      });
    }
  };
  userObjCreator();

  const columns = [
    {
      title: 'First Name',
      dataIndex: 'firstName',
      key: 'firstName',
      editable: true,
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <Form.Item
            name="firstName"
            style={{ margin: 0 }}
            rules={[
              {
                required: true,
                message: `Please Input First Name!`,
              },
            ]}
          >
            <Input value={record.firstName} />
          </Form.Item>
        ) : (
          <>{record.firstName}</>
        );
      },
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastName',
      editable: true,
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <Form.Item
            name="lastName"
            style={{ margin: 0 }}
            rules={[
              {
                required: true,
                message: `Please Input Last Name!`,
              },
            ]}
          >
            <Input value={record.lastName} />
          </Form.Item>
        ) : (
          <>{record.lastName}</>
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
          <Form.Item name="role" style={{ margin: 0 }}>
            <Select size="middle" value={record.role}>
              {/* Could be dynamic by mapping through list of roles */}
              <Select.Option value="Administrator">Administrator</Select.Option>
              <Select.Option value="Program Manager">
                Program Manager
              </Select.Option>
              <Select.Option value="service_provider">
                Service Provider
              </Select.Option>
              ))
            </Select>
          </Form.Item>
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
          <Form.Item
            name="programs"
            style={{ margin: 0 }}
            rules={[
              {
                required: true,
                message: 'Please select programs',
              },
            ]}
          >
            <Select size="middle" mode="multiple">
              {programs.map(item => (
                <Select.Option key={item.program_id} value={item.program_id}>
                  {item.program_name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        ) : (
          <>
            {record.programs.map(program => {
              return (
                <Tag
                  color={
                    program === 'Prevention'
                      ? 'blue'
                      : program === 'Sheltering'
                      ? 'purple'
                      : program === 'Aftercare'
                      ? 'gold'
                      : 'magenta'
                  }
                  size="small"
                  key={program}
                >
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
              <button
                onClick={() => save(record.key)}
                style={{ color: '#1890FF', marginRight: 8 }}
              >
                Save
              </button>
              <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                <button style={{ color: '#1890FF' }}>Cancel</button>
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
              {<EditOutlined />}
            </Typography.Link>
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => deleteUser(record.key)}
              danger
            >
              {<DeleteOutlined />}
            </Popconfirm>
          </Space>
        );
      },
    },
  ];

  return (
    <>
      {tableData.length < 1 && <LoadingOutlined className="loader" />},
      {tableData.length >= 1 && (
        <Form form={form}>
          <Table
            className="desktop-table"
            // rowSelection={CheckboxComponent(tableData)}
            columns={columns}
            dataSource={tableData}
            bordered
          />
        </Form>
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    employees: state.employee.employees,
    programs: state.program.programs,
    change: state.employee.change,
  };
};

export default connect(mapStateToProps, {
  getAllEmployeeAction,
  editEmployeeAction,
  deleteEmployeeAction,
  getAllProgramsAction,
})(TableComponent);
