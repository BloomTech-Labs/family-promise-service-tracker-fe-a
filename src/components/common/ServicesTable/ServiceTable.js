import React, { useState } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { STATUSES } from '../../../const';
import '../../../styles/Services.scss';
import EditServiceForm from '../../forms/EditServiceForm';
import { Table, Typography, Space, Popconfirm, Button, message } from 'antd';
import {
  LoadingOutlined,
  DeleteOutlined,
  EditOutlined,
} from '@ant-design/icons';

// Action Imports
import {
  deleteServiceAction,
  editServiceAction,
  getServiceByIdAction,
  addRecipientAction,
  editRecipientAction,
  deleteRecipientAction,
} from '../../../state/actions';

const ServicesTable = ({
  deleteServiceAction,
  editServiceAction,
  services,
  serviceTypes,
}) => {
  const [visible, setVisible] = useState(false);
  const [serviceToEdit, setServiceToEdit] = useState({});

  const [sortedInfo, setSortedInfo] = useState('');
  const [filteredInfo, setFilteredInfo] = useState('');

  const onEdit = (id, values) => {
    setVisible(false);
    editServiceAction(id, values);
  };

  const handleChange = (pagination, filters, sorter) => {
    setSortedInfo(sorter);
    setFilteredInfo(filters);
  };
  // NOTE: each row of the table of logged services is "record"
  const clearFilters = () => setFilteredInfo('');
  const clearAll = () => setSortedInfo('') && setFilteredInfo('');
  const edit = record => {
    setServiceToEdit(record);
    setVisible(true);
  };
  const deleteService = key => {
    deleteServiceAction(key);
  };

  const columns = [
    {
      title: 'Date Provided',
      dataIndex: 'date',
      key: 'date',
      width: 100,
      editable: true,
      sorter: (a, b) => moment(a.service_date) - moment(b.service_date),
      sortOrder: sortedInfo.columnKey === 'date' && sortedInfo.order,
      defaultSortOrder: 'descend',

      render: (_, record) => {
        return (
          <>
            {moment(record.service_date).format('MMM Do YYYY')}
            <br />
            {moment(record.service_date).format('h:mm a')}
          </>
        );
      },
    },
    {
      title: 'Service Type',
      dataIndex: 'service_type',
      key: 'service_type',
      width: 100,
      filters: serviceTypes.map(s => {
        return { text: s.service_type_name, value: s.service_type_name };
      }),
      filteredValue: filteredInfo.service_type || null,
      onFilter: (value, record) =>
        record.service_type.service_type_name.includes(value),
      ellipsis: true,
      editable: true,
      render: (_, record) => {
        return <>{record.service_type.service_type_name}</>;
      },
    },
    {
      title: 'Service Status',
      dataIndex: 'status',
      key: 'status',
      width: 100,
      filters: STATUSES.map(s => {
        return { text: s.type, value: s.type };
      }),
      filteredValue: filteredInfo.status || null,
      onFilter: (value, record) => record.status.status.includes(value),
      ellipsis: true,
      editable: true,
      render: (_, record) => {
        return <>{record.status.status}</>;
      },
    },
    {
      title: 'Service Recipient',
      dataIndex: 'recipient',
      key: 'recipient',
      width: 140,
      editable: false,
      filteredValue: filteredInfo.recipient || null,
      sorter: (a, b) =>
        a.recipient.recipient_last_name.localeCompare(
          b.recipient.recipient_last_name
        ),
      sortOrder: sortedInfo.columnKey === 'recipient' && sortedInfo.order,
      render: (_, record) => {
        return (
          <>
            {record.recipient.recipient_first_name}{' '}
            {record.recipient.recipient_last_name}
          </>
        );
      },
    },
    {
      title: 'Location Service Received',
      dataIndex: 'location',
      key: 'location',
      width: 175,
      editable: false,
      render: (_, record) => {
        return (
          <>
            {record.location.address}
            <br />
            {record.location.city}, {record.location.state}
            <br />
            {record.location.zip}
          </>
        );
      },
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
      width: 75,
      render: (_, record) => {
        return (
          <Space size="middle">
            <Typography.Link onClick={() => edit(record)}>
              {<EditOutlined style={{ color: '#1890FF', fontSize: '1.5em' }} />}
            </Typography.Link>

            <Popconfirm
              title="Are you sure?"
              onConfirm={() => {
                message.success('Deleted Successfully');
                deleteService(record.service_entry_id);
              }}
              danger
            >
              {<DeleteOutlined style={{ fontSize: '1.5em' }} />}
            </Popconfirm>
          </Space>
        );
      },
    },
  ];

  return (
    <>
      <div>
        <EditServiceForm
          visible={visible}
          service={serviceToEdit}
          onEdit={onEdit}
          onCancel={() => {
            setServiceToEdit({});
            setVisible(false);
          }}
        />
      </div>
      <div className="servicesTable">
        {services.length < 1 && <LoadingOutlined className="loader" />}
        {services.length >= 1 && (
          <>
            <Space className="filters" align="baseline">
              <p>Filtering Tools:</p>
              <Button onClick={clearFilters}>Clear filters</Button>
              <Button onClick={clearAll}>Clear sorters</Button>
            </Space>
            <Table
              className="desktop-table"
              columns={columns}
              dataSource={services}
              size="middle"
              tableLayout="fixed"
              onChange={handleChange}
              rowKey={record => record.id}
              pagination={{
                defaultPageSize: 50,
                showSizeChanger: true,
                pageSizeOptions: ['25', '50', '100'],
              }}
            />
          </>
        )}
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    recipients: state.recipient.recipients,
    services: state.service.services,
    serviceTypes: state.serviceType.serviceTypes,
    serviceProviders: state.serviceProviders,
  };
};

export default connect(mapStateToProps, {
  deleteServiceAction,
  editServiceAction,
  getServiceByIdAction,
  addRecipientAction,
  editRecipientAction,
  deleteRecipientAction,
})(ServicesTable);
