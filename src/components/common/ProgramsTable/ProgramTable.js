import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import TagsComponent from './Tags';
import { Table, Input, Typography, Form, Tag, Space, Popconfirm } from 'antd';
import {
  LoadingOutlined,
  PlusOutlined,
  DeleteOutlined,
  EditOutlined,
} from '@ant-design/icons';

//action import
import {
  getAllProgramsAction,
  addProgramAction,
  editProgramAction,
  deleteProgramAction,
} from '../../../state/actions';

const ProgramTable = ({
  getAllProgramsAction,
  editProgramAction,
  deleteProgramAction,
  programs,
}) => {
  const [form] = Form.useForm();
  const [formData, setFormData] = useState('');
  const [editingKey, setEditingKey] = useState('');
  const [programList, setProgramList] = useState(null);
  const [refetched, setFetched] = useState({});

  useEffect(() => {
    getAllProgramsAction();
    setProgramList(programs);
  }, [programList, getAllProgramsAction]);

  console.log('program', programs);

  const isEditing = record => record.key === editingKey;

  const edit = record => {
    form.setFieldsValue({
      name: '',
      role: '',
      programs: [],
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const deleteProgram = key => {
    deleteProgramAction(key);
    console.log('key', key);
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

  const columns = [
    {
      title: 'Program Name',
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
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
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
          <>{record.type}</>
        );
      },
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
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
          <>{record.description} </>
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
                onClick={() => save(record.id)}
                style={{ color: '#1890FF', marginRight: 8 }}
              >
                Save
              </a>
              <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                <a style={{ color: '#1890FF' }}>Cancel</a>
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
              onConfirm={() => {
                deleteProgram(record.id);
              }}
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
      {programs.length < 1 && <LoadingOutlined className="loader" />},
      {programs.length >= 1 && (
        <Table
          className="desktop-table"
          // rowSelection={CheckboxComponent(tableData)}
          columns={columns}
          dataSource={programs}
          bordered
        />
      )}
    </>
  );
};
const mapStateToProps = state => {
  console.log(state);
  return {
    programs: state.program.programs,
    refetched: state.program.refetched,
  };
};

export default connect(mapStateToProps, {
  getAllProgramsAction,
  addProgramAction,
  editProgramAction,
  deleteProgramAction,
})(ProgramTable);
