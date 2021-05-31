import React, { useState, useEffect } from 'react';
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
}) => {
  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState('');
  const [sortedInfo, setSortedInfo] = useState('');
  const [filteredInfo, setFilteredInfo] = useState('');

  useEffect(() => {
    console.log(services);
    mapDatesToMoment(services);
    console.log(services);
  }, [services]);

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

  const mapDatesToMoment = services => {
    services.map(s => {
      return { ...s, provided_at: moment(s.provided_at) };
    });
  };
  const isEditing = record => record.id === editingKey;

  const edit = record => {
    form.initialValues = {
      service_type: record.service_type,
      provided_at: moment(record.provided_at),
    };
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
        return (
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
      ellipsis: true,
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
      filters: [
        { text: 'Complete', value: 'Complete' },
        { text: 'In Progress', value: 'In Progress' },
        { text: 'Needs Follow-Up', value: 'Needs Follow-Up' },
        { text: 'Not Started', value: 'Not Started' },
      ],
      filteredValue: filteredInfo.status || null,
      onFilter: (value, record) => record.status.name.includes(value),
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
      ellipsis: true,
      editable: false,
      render: (_, record) => {
        return (
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
      // sorter: (a, b) => moment(a.date).unix() - moment(b.date).unix(),
      // sortOrder: sortedInfo.columnKey === 'date' && sortedInfo.order,
      // ellipsis: true,

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
    recipient: state.recipient.recipients,
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
