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
  Button,
} from 'antd';
import {
  LoadingOutlined,
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
  const [sortedInfo, setSortedInfo] = useState('');
  const [filteredInfo, setFilteredInfo] = useState('');

  const handleChange = (pagination, filters, sorter) => {
    setSortedInfo(sorter);
    setFilteredInfo(filters);
  };

  const clearFilters = () => {
    setFilteredInfo('');
  };

  const clearAll = () => {
    setSortedInfo('');
    setFilteredInfo('');
  };

  const setAgeSort = () => {
    setSortedInfo({
      order: 'descend',
      columnKey: 'age',
    });
  };

  const setFirstNameSort = () => {
    setSortedInfo({
      order: 'descend',
      columnKey: 'first_name',
    });
  };

  useEffect(() => {
    getAllRecipientAction();
    getAllHouseholdAction();
  }, [change, getAllHouseholdAction, getAllRecipientAction]);

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
  };

  const save = async recipientId => {
    try {
      const recipientObj = await form.validateFields();
      editRecipientAction(recipientId, recipientObj);
      setEditingKey('');
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const columns = [
    {
      title: 'First Name',
      dataIndex: 'first_name',
      key: 'first_name',
      filteredValue: filteredInfo.recipient_first_name || null,
      onFilter: (value, record) => record.recipient_first_name.includes(value),
      sorter: (a, b) =>
        a.recipient_first_name.localeCompare(b.recipient_first_name),
      sortOrder: sortedInfo.columnKey === 'first_name' && sortedInfo.order,
      ellipsis: true,
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
            <Input value={record.recipient_first_name} />
          </Form.Item>
        ) : (
          <>{record.recipient_first_name}</>
        );
      },
    },
    {
      title: 'Last Name',
      dataIndex: 'last_name',
      key: 'last_name',
      filteredValue: filteredInfo.recipient_last_name || null,
      onFilter: (value, record) => record.recipient_last_name.includes(value),
      sorter: (a, b) =>
        a.recipient_last_name.localeCompare(b.recipient_last_name),
      sortOrder: sortedInfo.columnKey === 'last_name' && sortedInfo.order,
      ellipsis: true,
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
            <Input value={record.recipient_last_name} />
          </Form.Item>
        ) : (
          <>{record.recipient_last_name}</>
        );
      },
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      sorter: (a, b) => a.recipient_date_of_birth - b.recipient_date_of_birth,
      sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
      ellipsis: true,
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
            <Input value={record.recipient_date_of_birth} />
          </Form.Item>
        ) : (
          <>{record.recipient_date_of_birth}</>
        );
      },
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
      filters: [
        { text: 'Male', value: 'Male' },
        { text: 'Female', value: 'Female' },
        { text: 'Non Binary', value: 'Nonbinary' },
      ],
      filteredValue: filteredInfo.gender || null,
      onFilter: (value, record) => record.gender === value,
      sortOrder: sortedInfo.columnKey === 'gender' && sortedInfo.order,
      ellipsis: true,
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
            <Select placeholder="Please select their gender">
              <Select.Option value="male">Male</Select.Option>
              <Select.Option value="female">Female</Select.Option>
              <Select.Option value="nonbinary">Non-Binary Gender</Select.Option>
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
      filters: [
        { text: 'Indian Native Alaskan', value: 'Indian Native Alaskan' },
        { text: 'Asian', value: 'Asian' },
        { text: 'Black', value: 'Black' },
        {
          text: 'Hawaiian Pacific Islander',
          value: 'Hawaiian Pacific Islander',
        },
        { text: 'White', value: 'White' },
      ],
      filteredValue: filteredInfo.race || null,
      onFilter: (value, record) => record.race.includes(value),
      sortOrder: sortedInfo.columnKey === 'race' && sortedInfo.order,
      ellipsis: true,
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
            <Input value={record.race} />
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
      filters: [
        { text: 'Hispanic', value: 'Hispanic' },
        { text: 'Non-Hispanic', value: 'Non-Hispanic' },
      ],
      filteredValue: filteredInfo.ethnicity || null,
      onFilter: (value, record) => record.ethnicity.length === value.length,
      sortOrder: sortedInfo.columnKey === 'ethnicity' && sortedInfo.order,
      ellipsis: true,
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
            <Input value={record.ethnicity} />
          </Form.Item>
        ) : (
          <>{record.ethnicity}</>
        );
      },
    },
    {
      title: 'Veteran Status',
      dataIndex: 'recipient_veteran_status',
      key: 'recipient_veteran_status',
      filters: [
        { text: 'Veteran', value: true },
        { text: 'Not a Veteran', value: false },
      ],
      filteredValue: filteredInfo.recipient_veteran_status || null,
      onFilter: (value, record) => record.recipient_veteran_status === value,
      sortOrder: sortedInfo.columnKey === 'veteran_status' && sortedInfo.order,
      ellipsis: true,
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
            <Input value={record.recipient_veteran_status} />
          </Form.Item>
        ) : (
          <>{record.recipient_veteran_status ? 'Yes' : 'No'}</>
        );
      },
    },
    {
      title: 'Household ID',
      dataIndex: 'household_id',
      key: 'household_id',
      sorter: (a, b) => a.household_id - b.household_id,
      sortOrder: sortedInfo.columnKey === 'household_id' && sortedInfo.order,
      ellipsis: true,
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
            <Input value={record.household_id} />
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
      {console.log('rec', recipients)}
      {recipients.length < 1 && <LoadingOutlined className="loader" />},
      {recipients.length >= 1 && (
        <Form form={form} className="recipient-table">
          <Space style={{ marginBottom: 16 }} className="sort-recipient-form">
            <Button onClick={setFirstNameSort}>Sort Name</Button>
            <Button onClick={setAgeSort}>Sort age</Button>
            <Button onClick={clearFilters}>Clear filters</Button>
            <Button onClick={clearAll}>Clear filters and sorters</Button>
          </Space>
          <Table
            onChange={handleChange}
            className="desktop-table"
            columns={columns}
            dataSource={recipients}
            size="small"
            tableLayout="fixed"
            rowKey={record => record.id}
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
