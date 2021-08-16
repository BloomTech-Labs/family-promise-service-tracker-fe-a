import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Table, Input, Typography, Form, Space, Popconfirm } from 'antd';
import {
  LoadingOutlined,
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
  change,
}) => {
  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState('');

  useEffect(() => {
    getAllProgramsAction();
  }, [change, getAllProgramsAction]);

  const isEditing = record => record.program_id === editingKey;

  const edit = record => {
    form.setFieldsValue({
      program_name: '',
      program_description: '',
      ...record,
    });
    setEditingKey(record.program_id);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const deleteProgram = key => {
    deleteProgramAction(key);
  };

  const save = async programId => {
    try {
      const programObj = await form.validateFields();
      editProgramAction(programId, programObj);
      setEditingKey('');
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const columns = [
    {
      title: 'Program Name',
      dataIndex: 'program_name',
      key: 'program_name',
      editable: true,
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <Form.Item
            name="program_name"
            style={{ margin: 0 }}
            rules={[
              {
                required: true,
                message: `Please Input name!`,
              },
            ]}
          >
            <Input value={record.program_name} />
          </Form.Item>
        ) : (
          <>{record.program_name}</>
        );
      },
    },
    {
      title: 'Description',
      dataIndex: 'program_description',
      key: 'program_description',
      editable: true,
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <Form.Item
            name="program_description"
            style={{ margin: 0 }}
            rules={[
              {
                required: true,
                message: `Please Input description!`,
              },
            ]}
          >
            <Input value={record.program_description} />
          </Form.Item>
        ) : (
          <>{record.program_description} </>
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
                onClick={() => save(record.id)}
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
              onConfirm={() => {
                deleteProgram(record.program_id);
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
        <Form form={form}>
          <Table
            className="desktop-table"
            columns={columns}
            dataSource={programs}
            rowKey={record => record.id}
          />
        </Form>
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    programs: state.program.programs,
    change: state.program.change,
  };
};

export default connect(mapStateToProps, {
  getAllProgramsAction,
  addProgramAction,
  editProgramAction,
  deleteProgramAction,
})(ProgramTable);
