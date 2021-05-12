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
      name: '',
      age: '',
      gender: '',
      address: '',
      city: '',
      state: '',
      zip_code: '',
      race: '',
      ethnicity: '',
      veteran_status: '',
      household_size: [],
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
      dataIndex: 'name',
      key: 'name',
      editable: true,
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <Form.Item
            name="name"
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
      dataIndex: 'gender',
      key: 'gender',
      editable: true,
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <Form.Item
            name="gender"
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
          <>{record.gender}</>
        );
      },
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      editable: true,
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <Form.Item
            name="address"
            style={{ margin: 0 }}
            rules={[
              {
                required: true,
                message: 'Please input an address',
              },
            ]}
          >
            <Input defaultValue={record.address} />
          </Form.Item>
        ) : (
          <>{record.address}</>
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
      title: 'State',
      dataIndex: 'state',
      key: 'state',
      editable: true,
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <Form.Item
            name="state"
            style={{ margin: 0 }}
            rules={[
              {
                required: true,
                message: 'Please input a state',
              },
            ]}
          >
            <Input defaultValue={record.state} />
          </Form.Item>
        ) : (
          <>{record.state}</>
        );
      },
    },
    {
      title: 'Zip Code',
      dataIndex: 'zip_code',
      key: 'zip_code',
      editable: true,
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <Form.Item
            name="state"
            style={{ margin: 0 }}
            rules={[
              {
                required: true,
                message: 'Please input a zip code',
              },
            ]}
          >
            <Input defaultValue={record.zip_code} />
          </Form.Item>
        ) : (
          <>{record.zip_code}</>
        );
      },
    },
    {
      title: 'Race',
      dataIndex: 'race',
      key: 'race',
      editable: true,
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <Form.Item
            name="race"
            style={{ margin: 0 }}
            rules={[
              {
                required: true,
                message: 'Please select a race',
              },
            ]}
          >
            <Input defaultValue={record.race} />
          </Form.Item>
        ) : (
          <>{record.race}</>
        );
      },
    },
    {
      title: 'Ethnicity',
      dataIndex: 'ethnicity',
      key: 'ethnicity',
      editable: true,
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <Form.Item
            name="ethnicity"
            style={{ margin: 0 }}
            rules={[
              {
                required: true,
                message: 'Please select an ethnicity',
              },
            ]}
          >
            <Input defaultValue={record.ethnicity} />
          </Form.Item>
        ) : (
          <>{record.ethnicity}</>
        );
      },
    },
    {
      title: 'Veteran Status',
      dataIndex: 'veteran_status',
      key: 'veteran_status',
      editable: true,
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <Form.Item
            name="veteran_status"
            style={{ margin: 0 }}
            rules={[
              {
                required: true,
                message: 'Please select a veteran status',
              },
            ]}
          >
            <Input defaultValue={record.veteran_status} />
          </Form.Item>
        ) : (
          <>{record.veteran_status}</>
        );
      },
    },
    {
      title: 'Household Size',
      dataIndex: 'household_size',
      key: 'household_size',
      editable: true,
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <Form.Item
            name="household_size"
            style={{ margin: 0 }}
            rules={[
              {
                required: true,
                message: 'Please input the household size',
              },
            ]}
          >
            <Input defaultValue={record.household_size} />
          </Form.Item>
        ) : (
          <>{record.household_size}</>
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
