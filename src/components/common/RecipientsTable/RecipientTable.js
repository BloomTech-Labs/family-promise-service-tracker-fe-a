import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import EditRecipientForm from '../../forms/EditRecipientForm';
import { Table, Typography, Form, Space, Button } from 'antd';
import {
  LoadingOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  SettingOutlined,
} from '@ant-design/icons';

// Action Imports
import {
  getAllRecipientAction,
  addRecipientAction,
  editRecipientAction,
  deleteRecipientAction,
  getAllHouseholdAction,
} from '../../../state/actions';

const genders = [
  '',
  'Female',
  'Male',
  'Transgender: M to F',
  'Transgender: F to M',
  'Gender fluid',
  'Agender',
  'Androgynous',
  'Bi-gender',
  'Non-binary',
  'Demi-boy',
  'Demi-girl',
  'Genderqueer',
  'Gender noncomforming',
  'Tri-gender',
  'All genders',
  'In the middle of boy and girl',
  'Intersex',
  'Not sure',
  'Prefer not to say',
  'Other',
];

const ethnicities = [
  '',
  'Hispanic/Latino',
  'Non-Hispanic/Non-Latino',
  'Prefer not to say',
];

const races = [
  '',
  'White',
  'Black/African-Americian',
  'Asian',
  'Native Americian/First Peoples',
  'Hawaiian/Pacific Islander',
  'Other',
  'Prefer not to say',
];

const RecipientTable = ({
  getAllHouseholdAction,
  getAllRecipientAction,
  editRecipientAction,
  deleteRecipientAction,
  recipients,
  change,
}) => {
  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState('');
  const [sortedInfo, setSortedInfo] = useState('');
  const [filteredInfo, setFilteredInfo] = useState('');
  const [editing, setEditing] = useState(false);
  const [key, setKey] = useState('');
  const [recipientToEdit, setRecipientToEdit] = useState({});

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
    console.log('CURRENT_RECIPIENT: ', recipientToEdit);
    // change is a one of the attribute in application state, when it
    // changed, the useEffect will be invoke. Any change for the data is
    // just an two moves, one is use axio call to perform a specific move
    // and then grab all the data again.
  }, [change, getAllHouseholdAction, getAllRecipientAction, recipientToEdit]);

  const deleteRecipient = key => {
    deleteRecipientAction(key);
  };

  const save = (recipientId, values) => {
    try {
      editRecipientAction(recipientId, values);
      setEditingKey('');
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const columns = [
    {
      title: 'Name',
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
        return (
          <>{`${record.recipient_first_name}, ${record.recipient_last_name}`}</>
        );
      },
    },
    {
      title: 'Date of Birth',
      dataIndex: 'Date of Birth',
      key: 'Date of Birth',
      width: 140,
      filteredValue: filteredInfo.recipient_date_of_birth || null,
      onFilter: (value, record) =>
        record.recipient_date_of_birth.includes(value),
      sorter: (a, b) =>
        a.recipient_date_of_birth.localeCompare(b.recipient_date_of_birth),
      sortOrder: sortedInfo.columnKey === 'Date of Birth' && sortedInfo.order,
      ellipsis: true,
      editable: true,
      render: (_, record) => {
        return (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {record.recipient_date_of_birth}
          </div>
        );
      },
    },
    {
      title: 'Gender',
      dataIndex: 'gender_id',
      width: 100,
      key: 'gender_id',
      filters: [
        { text: 'Female', value: 1 },
        { text: 'Male', value: 2 },
        { text: 'Transgender: M to F', value: 3 },
        { text: 'Transgender: F to M', value: 4 },
        { text: 'Gender fluid', value: 5 },
        { text: 'Agender', value: 6 },
        { text: 'Androgynous', value: 7 },
        { text: 'Bi-gender', value: 8 },
        { text: 'Non-binary', value: 9 },
        { text: 'Demi-boy', value: 10 },
        { text: 'Demi-girl', value: 11 },
        { text: 'Genderqueer', value: 12 },
        { text: 'Gender noncomforming', value: 13 },
        { text: 'Tri-gender', value: 14 },
        { text: 'All genders', value: 15 },
        { text: 'In the middle of boy and girl', value: 16 },
        { text: 'Intersex', value: 17 },
        { text: 'Not sure', value: 18 },
        { text: 'Prefer not to say', value: 19 },
        { text: 'Other', value: 20 },
      ],
      filteredValue: filteredInfo.gender_id || null,
      onFilter: (value, record) => record.gender_id === value,
      sortOrder: sortedInfo.columnKey === 'gender_id' && sortedInfo.order,
      ellipsis: true,
      editable: true,
      render: (_, record) => {
        return <>{genders[record.gender_id]}</>;
      },
    },
    {
      title: 'Race',
      dataIndex: 'race_id',
      key: 'race_id',
      filters: [
        { text: 'White', value: 1 },
        { text: 'Black/African-Americian', value: 2 },
        { text: 'Asian', value: 3 },
        { text: 'Native Americian/First Peoples', value: 4 },
        { text: 'Hawaiian/Pacific Islander', value: 5 },
        { text: 'Other', value: 6 },
        { text: 'Prefer not to say', value: 7 },
      ],
      filteredValue: filteredInfo.race_id || null,
      onFilter: (value, record) => record.race_id === value,
      sortOrder: sortedInfo.columnKey === 'race_id' && sortedInfo.order,
      ellipsis: true,
      editable: true,
      render: (_, record) => {
        return <>{races[record.race_id]}</>;
      },
    },
    {
      title: 'Ethnicity',
      dataIndex: 'ethnicity_id',
      key: 'ethnicity_id',
      width: 150,
      filters: [
        { text: 'Hispanic/Latino', value: 1 },
        { text: 'Non-Hispanic/Non-Latino', value: 2 },
        { text: 'Prefer not to say', value: 3 },
      ],
      filteredValue: filteredInfo.ethnicity_id || null,
      onFilter: (value, record) => record.ethnicity_id === value,
      sortOrder: sortedInfo.columnKey === 'ethnicity_id' && sortedInfo.order,
      ellipsis: true,
      editable: true,
      render: (_, record) => {
        return <>{ethnicities[record.ethnicity_id]}</>;
      },
    },
    {
      title: 'Veteran',
      dataIndex: 'recipient_veteran_status',
      key: 'recipient_veteran_status',
      width: 100,
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
        return (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {record.recipient_veteran_status ? 'Yes' : 'No'}
          </div>
        );
      },
    },
    {
      title: 'Household ID',
      dataIndex: 'household_id',
      key: 'household_id',
      filteredValue: filteredInfo.household_id || null,
      onFilter: (value, record) => record.household_id.includes(value),
      sorter: (a, b) => a.household_id.localeCompare(b.household_id),
      sortOrder: sortedInfo.columnKey === 'household_id' && sortedInfo.order,
      ellipsis: true,
      editable: true,
      render: (_, record) => {
        return <>{record.household_id}</>;
      },
    },
    {
      title: 'Active',
      dataIndex: 'recipient_is_active',
      key: 'recipient_is_active',
      width: 80,
      filters: [
        { text: 'Yes', value: true },
        { text: 'No', value: false },
      ],
      filteredValue: filteredInfo.recipient_is_active || null,
      onFilter: (value, record) => record.recipient_is_active === value,
      sortOrder:
        sortedInfo.columnKey === 'recipient_is_active' && sortedInfo.order,
      ellipsis: true,
      editable: true,
      render: (_, record) => {
        return (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {record.recipient_is_active ? (
              <CheckCircleOutlined style={{ color: '#53c31b' }} />
            ) : (
              <CloseCircleOutlined style={{ color: '#FF4848' }} />
            )}
          </div>
        );
      },
    },
    {
      title: 'Setting',
      dataIndex: 'setting',
      key: 'setting',
      width: 70,
      render: (_, record) => {
        return (
          <Space
            size="large"
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <Typography.Link
              disabled={editingKey !== ''}
              style={{ color: '#1890FF' }}
              onClick={() => {
                setKey(record.recipient_id);
                setEditing(true);
                setRecipientToEdit(record);
                console.log('new state recipient', key);
              }}
            >
              {<SettingOutlined />}
            </Typography.Link>
          </Space>
        );
      },
    },
  ];

  return (
    <div style={{}}>
      {editing ? (
        <EditRecipientForm
          visible={editing}
          recipientToEdit={recipientToEdit}
          onCreate={values => {
            save(key, values);
            alert('This is submited');
          }}
          onCancel={() => {
            setEditing(false);
            setRecipientToEdit({});
          }}
          recipient_id={key}
        />
      ) : null}
      {console.log(recipients)}
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
            rowKey={record => record.recipient_id}
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
