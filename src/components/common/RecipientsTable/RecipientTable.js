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
  getAllHouseholdAction,
} from '../../../state/actions';

const RecipientTable = ({
  getAllHouseholdAction,
  getAllRecipientAction,
  editRecipientAction,
  deleteRecipientAction,
  recipients,
  households,
  change,
}) => {
  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState('');

  useEffect(() => {
    getAllRecipientAction();
    getAllHouseholdAction();
  }, [change]);

  const isEditing = record => record.id === editingKey;

  const edit = record => {
    form.setFieldsValue({
      first_name: '',
      last_name: '',
      age: '',
      gender: '',
      race: '',
      ethnicity: '',
      veteran_status: '',
      household_id: [],
      ...record,
    });
    setEditingKey(record.id);
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

  // const userObjCreator = () => {
  //   if (recipients) {
  //     recipients.map(recipient => {
  //       const households = [];
  //       recipients.households.map(household => {
  //         if (household !== null) {
  //           households.push(household.name);
  //         }
  //       });
  //       return recipients.push({
  //         key: recipient.id,
  //         households: households,
  //       });
  //     });
  //   }
  // };
  // userObjCreator();

  const columns = [
    {
      title: 'First Name',
      dataIndex: 'first_name',
      key: 'first_name',
      editable: true,
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <Form.Item
            first_name="first_name"
            style={{ margin: 0 }}
            rules={[
              {
                required: true,
                message: `Please input a first name!`,
              },
            ]}
          >
            <Input defaultValue={record.first_name} />
          </Form.Item>
        ) : (
          <>{record.first_name}</>
        );
      },
    },
    {
      title: 'Last Name',
      dataIndex: 'last_name',
      key: 'last_name',
      editable: true,
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <Form.Item
            last_name="last_name"
            style={{ margin: 0 }}
            rules={[
              {
                required: true,
                message: `Please input a last name!`,
              },
            ]}
          >
            <Input defaultValue={record.last_name} />
          </Form.Item>
        ) : (
          <>{record.last_name}</>
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
          <>{record.veteran_status ? 'Yes' : 'No'}</>
        );
      },
    },
    {
      title: 'Household ID',
      dataIndex: 'household_id',
      key: 'household_id',
      editable: true,
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <Form.Item
            name="household_id"
            style={{ margin: 0 }}
            rules={[
              {
                required: true,
                message: 'Please input the household size',
              },
            ]}
          >
            <Input defaultValue={record.household_id} />
          </Form.Item>
        ) : (
          <>{record.household_id}</>
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
    <div style={{}}>
      {recipients.length < 1 && <LoadingOutlined className="loader" />},
      {recipients.length >= 1 && (
        <Form form={form}>
          <Table
            className="desktop-table"
            columns={columns}
            dataSource={recipients}
            size="small"
            tableLayout="fixed"
          />
        </Form>
      )}
    </div>
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
  getAllHouseholdAction,
  addRecipientAction,
  editRecipientAction,
  deleteRecipientAction,
})(RecipientTable);
