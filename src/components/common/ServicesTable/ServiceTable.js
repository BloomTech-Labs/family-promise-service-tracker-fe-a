import React, { useState } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { STATUSES } from '../../../const';
import {
  Table,
  Input,
  Typography,
  Form,
  Space,
  Popconfirm,
  Select,
  Button,
  DatePicker,
} from 'antd';
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
  recipients,
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

  const isEditing = record => record.id === editingKey;

  const edit = record => {
    setEditingKey(record.id);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const deleteService = key => {
    deleteServiceAction(key);
  };

  const save = async serviceId => {
    try {
      const serviceObj = await form.validateFields();
      editServiceAction(serviceId, serviceObj);
      setEditingKey('');
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const columns = [
    {
      title: 'Recipient',
      dataIndex: 'recipient',
      key: 'recipient',
      editable: false,
      filteredValue: filteredInfo.recipient || null,
      sorter: (a, b) =>
        a.recipient.last_name.localeCompare(b.recipient.last_name),
      sortOrder: sortedInfo.columnKey === 'recipient' && sortedInfo.order,
      ellipsis: true,
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <Form.Item
            name="recipient_id"
            initialValue={record.recipient.id}
            rules={[
              {
                required: true,
                message: 'Please select the Recipient',
              },
            ]}
          >
            <Select size="medium" placeholder="Select Recipient">
              {recipients.map(recipient => (
                <Select.Option key={recipient.id} value={recipient.id}>
                  {recipient.first_name + ' ' + recipient.last_name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        ) : (
          <>
            {record.recipient.first_name} {record.recipient.last_name}
          </>
        );
      },
    },
    {
      title: 'Service Type',
      dataIndex: 'serviceType',
      key: 'serviceType',
      filteredValue: filteredInfo.serviceType || null,
      onFilter: (value, record) => record.service_type.name.includes(value),
      sorter: (a, b) => a.service_type.name.localeCompare(b.service_type.name),
      sortOrder: sortedInfo.columnKey === 'serviceType' && sortedInfo.order,
      editable: true,
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <Form.Item
            name="service_type_id"
            style={{ margin: 0 }}
            initialValue={record.service_type.id}
            rules={[
              {
                required: true,
                message: `Please input an service type!`,
              },
            ]}
          >
            <Select size="middle" value={record.service_type.id}>
              {serviceTypes.map(serviceType => (
                <Select.Option key={serviceType.id} value={serviceType.id}>
                  {serviceType.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        ) : (
          <>{record.service_type.name}</>
        );
      },
    },
    {
      title: 'Unit',
      dataIndex: 'unit',
      key: 'unit',
      filteredValue: filteredInfo.unit || null,
      onFilter: (value, record) => record.unit.includes(value),
      sorter: (a, b) => a.unit.localeCompare(b.unit),
      sortOrder: sortedInfo.columnKey === 'unit' && sortedInfo.order,
      editable: true,
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <Form.Item
            name="unit"
            style={{ margin: 0 }}
            initialValue={record.unit}
            rules={[
              {
                required: true,
                message: 'Please select a unit',
              },
            ]}
          >
            <Input value={record.unit} />
          </Form.Item>
        ) : (
          <>{record.unit}</>
        );
      },
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
      sorter: (a, b) => a.quantity - b.quantity,
      sortOrder: sortedInfo.columnKey === 'quantity' && sortedInfo.order,
      ellipsis: true,
      editable: true,
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <Form.Item
            name="quantity"
            style={{ margin: 0 }}
            initialValue={record.quantity}
            rules={[
              {
                required: true,
                message: 'Please select a quantity',
              },
            ]}
          >
            <Input value={record.quantity} />
          </Form.Item>
        ) : (
          <>{record.quantity}</>
        );
      },
    },
    {
      title: 'Value',
      dataIndex: 'value',
      key: 'value',
      sorter: (a, b) => a.value - b.value,
      sortOrder: sortedInfo.columnKey === 'value' && sortedInfo.order,
      ellipsis: true,
      editable: true,
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <Form.Item
            name="value"
            style={{ margin: 0 }}
            initialValue={record.value}
            rules={[
              {
                required: true,
                message: 'Please select a value',
              },
            ]}
          >
            <Input value={record.value} />
          </Form.Item>
        ) : (
          <>{record.value}</>
        );
      },
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      filteredValue: filteredInfo.status || null,
      onFilter: (value, record) => record.status.name.includes(value),
      sorter: (a, b) => a.status.name.localeCompare(b.status.name),
      sortOrder: sortedInfo.columnKey === 'status' && sortedInfo.order,
      ellipsis: true,
      editable: true,
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <Form.Item
            name="status_id"
            initialValue={record.status_id}
            style={{ margin: 0 }}
            rules={[
              {
                required: true,
                message: `Please select a status`,
              },
            ]}
          >
            <Select size="middle" value={record.status_id}>
              {STATUSES.map(status => (
                <Select.Option key={status.id} value={status.id}>
                  {status.type}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        ) : (
          <>{record.status.name}</>
        );
      },
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
      editable: false,
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <>
            <Form.Item
              name="address"
              initialValue={record.address}
              style={{ margin: 1 }}
              rules={[
                {
                  required: true,
                  message: 'Please enter the address',
                },
              ]}
            >
              <Input size="medium" />
            </Form.Item>
            <Form.Item
              name="city"
              initialValue={record.city}
              style={{ margin: 1 }}
              rules={[
                {
                  required: true,
                  message: 'Please enter the city',
                },
              ]}
            >
              <Input size="medium" />
            </Form.Item>
            <Form.Item
              name="state"
              initialValue={record.state}
              style={{ margin: 1 }}
              rules={[
                {
                  required: true,
                  message: 'Please enter the state',
                },
              ]}
            >
              <Input size="medium" />
            </Form.Item>
            <Form.Item
              name="zip_code"
              initialValue={record.zip_code}
              style={{ margin: 1 }}
              rules={[
                {
                  required: true,
                  message: 'Please enter the zip code',
                },
              ]}
            >
              <Input size="medium" />
            </Form.Item>
          </>
        ) : (
          <>
            {record.address}
            <br />
            {record.city}, {record.state}
            <br />
            {record.zip_code}
          </>
        );
      },
    },
    {
      title: 'Date Provided',
      dataIndex: 'date',
      key: 'date',
      editable: true,
      sorter: (a, b) => moment(a.provided_at) - moment(b.provided_at),
      sortOrder: sortedInfo.columnKey === 'date' && sortedInfo.order,
      defaultSortOrder: 'descend',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <Form.Item
            name="provided_at"
            initialValue={moment(record.provided_at)}
            rules={[
              {
                required: true,
                message: 'Enter Date',
              },
            ]}
          >
            <DatePicker
              showTime
              use12Hours
              format="MMMM Do YYYY, h:mm a"
              size="medium"
            />
          </Form.Item>
        ) : (
          <>
            {moment(record.provided_at).format('MMM Do YYYY')}
            <br />
            {moment(record.provided_at).format('h:mm a')}
          </>
        );
      },
    },
    {
      title: 'Notes',
      dataIndex: 'notes',
      key: 'notes',
      editable: true,
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <Form.Item
            name="notes"
            style={{ margin: 0 }}
            initialValue={record.notes}
            rules={[
              {
                required: true,
                message: 'Please select a notes',
              },
            ]}
          >
            <Input value={record.notes} />
          </Form.Item>
        ) : (
          <>{record.notes}</>
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
                deleteService(record.id);
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
    <div className="servicesTable">
      {services.length < 1 && <LoadingOutlined className="loader" />},
      {services.length >= 1 && (
        <Form form={form}>
          <Space style={{ marginBottom: 16 }}>
            <Button onClick={clearFilters}>Clear filters</Button>
            <Button onClick={clearAll}>Clear filters and sorters</Button>
          </Space>
          <Table
            className="desktop-table"
            columns={columns}
            dataSource={services}
            size="small"
            tableLayout="fixed"
            onChange={handleChange}
            rowKey={record => record.id}
            pagination={{
              defaultPageSize: 50,
              showSizeChanger: true,
              pageSizeOptions: ['25', '50', '100'],
            }}
          />
        </Form>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    recipients: state.recipient.recipients,
    services: state.service.services,
    serviceTypes: state.serviceType.serviceTypes,
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
