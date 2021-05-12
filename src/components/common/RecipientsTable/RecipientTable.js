import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  Table,
  Input,
  Typography,
  Form,
  Space,
  Popconfirm,
  Select,
} from 'antd';
import {
  LoadingOutlined,
  PlusOutlined,
  DeleteOutlined,
  EditOutlined,
} from '@ant-design/icons';

// Action Imports
import {
  getAllRecipientAction,
  addRecipientAction,
  editRecipientAction,
  deleteRecipientAction,
} from '../../../state/actions';

const RecipientTable = ({
  getAllRecipientAction,
  editRecipientAction,
  deleteRecipientAction,
  recipients,
  change,
}) => {
  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState('');

  useEffect(() => {
    getAllRecipientAction();
  }, [change]);

  const isEditing = record => record.id === editingKey;

  const edit = record => {
    form.setFieldsValue({
      recipient_name: '',
      age: '',
      select: [],
      Address: '',
      city: '',
      state: '',
      zipcode: '',
      selectrace: [],
      ethnicity: [],
      vet_status: [],
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const deleteRecipient = key => {
    deleteRecipientAction(key);
    console.log('key', key);
  };

  const save = async recipientId => {
    try {
      const recipientObj = await form.validateFields();
      console.log('recipientObj', recipientObj);
      console.log('recipientId', recipientId);
      editRecipientAction(recipientId, recipientObj);
      setEditingKey('');
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const columns = [
    {
      title: 'Recipients Name',
      dataIndex: 'recipient_name',
      key: 'recipient_name',
      editable: true,
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <Form.Item
            name="recipient_name"
            style={{ margin: 0 }}
            rules={[
              {
                required: true,
                message: `Please input a name!`,
              },
            ]}
          >
            <Input defaultValue={record.name} />
          </Form.Item>
        ) : (
          <>{record.name}</>
        );
      },
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      editable: true,
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <Form.Item
            name="age"
            style={{ margin: 0 }}
            rules={[
              {
                required: true,
                message: `Please input an age!`,
              },
            ]}
          >
            <Input defaultValue={record.age} />
          </Form.Item>
        ) : (
          <>{record.age}</>
        );
      },
    },
    {
      title: 'Gender',
      dataIndex: 'select',
      key: 'select',
      editable: true,
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <Form.Item
            name="select"
            style={{ margin: 0 }}
            rules={[
              {
                required: true,
                message: 'Please select a gender',
              },
            ]}
          >
            <Select size="middle" mode="multiple">
              {recipients.map(item => (
                <Select.Option key={item} value={item.id}>
                  {item.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        ) : (
          <>{record.select}</>
        );
      },
    },
    {
      title: 'Address',
      dataIndex: 'Address',
      key: 'Address',
      editable: true,
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <Form.Item
            name="Address"
            style={{ margin: 0 }}
            rules={[
              {
                required: true,
                message: 'Please input an address',
              },
            ]}
          >
            <Input defaultValue={record.Address} />
          </Form.Item>
        ) : (
          <>{record.Address}</>
        );
      },
    },
    {
      title: 'City',
      dataIndex: 'city',
      key: 'city',
      editable: true,
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <Form.Item
            name="city"
            style={{ margin: 0 }}
            rules={[
              {
                required: true,
                message: 'Please input a city',
              },
            ]}
          >
            <Input defaultValue={record.city} />
          </Form.Item>
        ) : (
          <>{record.city}</>
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
                deleteRecipient(record.id);
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
      {recipients.length < 1 && <LoadingOutlined className="loader" />},
      {recipients.length >= 1 && (
        <Form form={form}>
          <Table
            className="desktop-table"
            columns={columns}
            dataSource={recipients}
            bordered
          />
        </Form>
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    recipients: state.recipient.recipients,
    change: state.recipient.change,
  };
};

export default connect(mapStateToProps, {
  getAllRecipientAction,
  addRecipientAction,
  editRecipientAction,
  deleteRecipientAction,
})(RecipientTable);
