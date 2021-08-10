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
  // ControlOutlined,
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
import TextArea from 'antd/lib/input/TextArea';

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

  const clearFilters = () => setFilteredInfo('');
  const clearAll = () => setSortedInfo('') && setFilteredInfo('');
  const isEditing = record => record.id === editingKey;
  const edit = record => setEditingKey(record.id);
  const cancel = () => setEditingKey('');
  const deleteService = key => deleteServiceAction(key);

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
      title: 'Service Type',
      dataIndex: 'service_type',
      key: 'service_type',
      filters: serviceTypes.map(s => {
        return { text: s.name, value: s.name };
      }),
      filteredValue: filteredInfo.serviceType || null,
      onFilter: (value, record) =>
        record.service_type.service_type_name.includes(value),
      editable: true,
      render: (_, record) => {
        const editable = isEditing(record);

        return editable ? (
          <Form.Item
            name="service_type_id"
            style={{ margin: 0 }}
            initialValue={record.service_type_id}
            rules={[
              {
                required: true,
                message: `Please input an service type!`,
              },
            ]}
          >
            <Select size="middle" value={record.service_type_id}>
              {serviceTypes.map(serviceType => (
                <Select.Option
                  key={serviceType.service_type_id}
                  value={serviceType.service_type_id}
                >
                  {serviceType.service_type_name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        ) : (
          <>{record.service_type.service_type_name}</>
        );
      },
    },
    // {
    //   title: 'Qty', ## No current use for this table
    //   dataIndex: 'quantity',
    //   key: 'quantity',
    //   sorter: (a, b) => a.quantity - b.quantity,
    //   sortOrder: sortedInfo.columnKey === 'quantity' && sortedInfo.order,
    //   ellipsis: true,
    //   editable: true,
    //   className: 'col-sm',
    //   render: (_, record) => {
    //     const editable = isEditing(record);
    //     return editable ? (
    //       <Form.Item
    //         name="quantity"
    //         style={{ margin: 0 }}
    //         initialValue={record.quantity}
    //         rules={[
    //           {
    //             required: true,
    //             message: 'Please select a quantity',
    //           },
    //         ]}
    //       >
    //         <Input value={record.quantity} />
    //       </Form.Item>
    //     ) : (
    //       <>{record.quantity}</>
    //     );
    //   },
    // },
    // {
    //   title: 'Unit',
    //   dataIndex: 'unit',
    //   key: 'unit',
    //   filteredValue: filteredInfo.unit || null,
    //   onFilter: (value, record) => record.unit.includes(value),
    //   sorter: (a, b) => a.unit.localeCompare(b.unit),
    //   sortOrder: sortedInfo.columnKey === 'unit' && sortedInfo.order,
    //   editable: true,
    //   render: (_, record) => {
    //     const editable = isEditing(record);
    //     return editable ? (
    //       <Form.Item
    //         name="unit"
    //         style={{ margin: 0 }}
    //         initialValue={record.unit}
    //         rules={[
    //           {
    //             required: true,
    //             message: 'Please select a unit',
    //           },
    //         ]}
    //       >
    //         <Input value={record.unit} />
    //       </Form.Item>
    //     ) : (
    //       <>{record.unit}</>
    //     );
    //   },
    // },
    // {
    //   title: 'Value',
    //   dataIndex: 'value',
    //   key: 'value',
    //   className: 'col-sm',
    //   sorter: (a, b) => a.value - b.value,
    //   sortOrder: sortedInfo.columnKey === 'value' && sortedInfo.order,
    //   ellipsis: true,
    //   editable: true,
    //   render: (_, record) => {
    //     const editable = isEditing(record);
    //     return editable ? (
    //       <Form.Item
    //         name="value"
    //         style={{ margin: 0 }}
    //         initialValue={record.value}
    //         rules={[
    //           {
    //             required: true,
    //             message: 'Please select a value',
    //           },
    //         ]}
    //       >
    //         <Input value={record.value} />
    //       </Form.Item>
    //     ) : (
    //       <>{record.value}</>
    //     );
    //   },
    // },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      filters: STATUSES.map(s => {
        return { text: s.type, value: s.type };
      }),
      filteredValue: filteredInfo.status || null,
      onFilter: (value, record) =>
        record.service_entry_data.default.Status.includes(value),
      ellipsis: true,
      editable: true,
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <Form.Item
            name="status_id"
            initialValue={record.service_entry_data.default.Status}
            style={{ margin: 0 }}
            rules={[
              {
                required: true,
                message: `Please select a status`,
              },
            ]}
          >
            <Select
              size="middle"
              value={record.service_entry_data.default.Status}
            >
              {STATUSES.map(status => (
                <Select.Option key={status.id} value={status.id}>
                  {status.type}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        ) : (
          <>{record.service_entry_data.default.Status}</>
        );
      },
    },
    {
      title: 'Recipient',
      dataIndex: 'recipient',
      key: 'recipient',
      editable: false,
      filteredValue: filteredInfo.recipient || null,
      sorter: (a, b) =>
        a.recipient.recipient_last_name.localeCompare(
          b.recipient.recipient_last_name
        ),
      sortOrder: sortedInfo.columnKey === 'recipient' && sortedInfo.order,
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <Form.Item
            name="recipient_id"
            initialValue={record.recipient.recipient_id}
            rules={[
              {
                required: true,
                message: 'Please select the Recipient',
              },
            ]}
          >
            <Select size="medium" placeholder="Select Recipient">
              {recipients.map(recipient => (
                <Select.Option
                  key={recipient.recipient_id}
                  value={recipient.recipient_id}
                >
                  {recipient.recipient_first_name +
                    ' ' +
                    recipient.recipient_last_name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        ) : (
          <>
            {record.recipient.recipient_first_name}{' '}
            {record.recipient.recipient_last_name}
          </>
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
              initialValue={record.location.address}
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
              initialValue={record.location.city}
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
              initialValue={record.location.state}
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
              name="zip"
              initialValue={record.location.zip}
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
            initialValue={record.service_entry_data.default.Notes}
            rules={[
              {
                required: false,
                message: 'Please select a notes',
              },
            ]}
          >
            <TextArea
              value={record.service_entry_data.default.Notes}
              rows={10}
            />
          </Form.Item>
        ) : (
          <>
            {record.service_entry_data.default.Notes
              ? record.service_entry_data.default.Notes
              : 'N/A'}
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
            name="service_date"
            initialValue={moment(record.service_date)}
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
            {moment(record.service_date).format('MMM Do YYYY')}
            <br />
            {moment(record.service_date).format('h:mm a')}
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
        const editable = isEditing(record);
        return editable ? (
          <span>
            <button
              onClick={() => save(record.id)}
              style={{ color: '#1890FF', marginBottom: 8 }}
            >
              Save
            </button>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <button style={{ color: '#1890FF' }}>Cancel</button>
            </Popconfirm>
          </span>
        ) : (
          <Space size="middle">
            <Typography.Link
              disabled={editingKey !== ''}
              onClick={() => edit(record)}
            >
              {<EditOutlined style={{ color: '#1890FF', fontSize: '1.5em' }} />}
            </Typography.Link>

            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => {
                deleteService(record.id);
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
    <div className="servicesTable">
      {services.length < 1 && <LoadingOutlined className="loader" />},
      {services.length >= 1 && (
        <Form form={form}>
          <Space className="filters" align="baseline">
            <p>Filtering Tools:</p>
            <Button onClick={clearFilters}>Clear filters</Button>
            <Button onClick={clearAll}>Clear filters and sorters</Button>
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
