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
  getAllServicesAction,
  deleteServiceAction,
  editServiceAction,
  getServiceByIdAction,
  getRecipientByIdAction,
  getAllRecipientAction,
  getAllServiceTypesAction,
  addRecipientAction,
  editRecipientAction,
  deleteRecipientAction,
} from '../../../state/actions';
import axios from 'axios';

const RecipientTable = ({
  getAllServicesAction,
  deleteServiceAction,
  editServiceAction,
  getServiceByIdAction,
  getRecipientByIdAction,
  getAllRecipientAction,
  getAllServiceTypesAction,
  editRecipientAction,
  deleteRecipientAction,
  services,
  serviceTypes,
  recipient,
  change,
}) => {
  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState('');

  useEffect(() => {
    getAllRecipientAction();
    getAllServicesAction();
    getAllServiceTypesAction();
  }, []);

  // console.log(serviceTypes, 'this is service types state');
  const isEditing = record => record.id === editingKey;

  const edit = record => {
    form.setFieldsValue({
      first_name: '',
      last_name: '',
      serviceType: '',
      unit: '',
      quantity: '',
      value: '',
      status: '',
      address: '',
      city: '',
      state: '',
      zip_code: '',
      date: '',
      notes: '',
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const deleteRecipient = key => {
    deleteServiceAction(key);
    console.log('key', key);
  };

  const save = async recipientId => {
    try {
      const recipientObj = await form.validateFields();
      // console.log('recipientObj', recipientObj);
      // console.log('recipientId', recipientId);
      editServiceAction(recipientId, recipientObj);
      setEditingKey('');
    } catch (errInfo) {
      // console.log('Validate Failed:', errInfo);
    }
  };

  const columns = [
    {
      title: 'First Name',
      dataIndex: 'first_name',
      key: 'first_name',
      editable: true,
      render: (_, record) => {
        const editable = isEditing(record);
        // const recipientObj2 = getServiceByIdAction(record.recipient_id);
        // console.log(recipientObj2, 'recipient object');
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
            <Input defaultValue={record.recipient.first_name} />
          </Form.Item>
        ) : (
          <>{record.recipient.first_name}</>
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
            <Input defaultValue={record.recipient.last_name} />
          </Form.Item>
        ) : (
          <>{record.recipient.last_name}</>
        );
      },
    },
    {
      title: 'Service Type',
      dataIndex: 'serviceType',
      key: 'serviceType',
      editable: true,
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <Form.Item
            name="service_type_id"
            style={{ margin: 0 }}
            rules={[
              {
                required: true,
                message: `Please input an service type!`,
              },
            ]}
          >
            <Input defaultValue={record.service_type.name} />
            {/* <Select size="middle" mode="multiple">
              {serviceTypes.map(item => (
                <Select.Option key={item} value={item.id}>
                  {item.name}
                </Select.Option>
              ))}
            </Select> */}
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
      editable: true,
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <Form.Item
            name="unit"
            style={{ margin: 0 }}
            rules={[
              {
                required: true,
                message: 'Please select a unit',
              },
            ]}
          >
            <Select size="middle" mode="multiple">
              {services.map(item => (
                <Select.Option key={item} value={item.id}>
                  {item.name}
                </Select.Option>
              ))}
            </Select>
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
      editable: true,
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <Form.Item
            name="quantity"
            style={{ margin: 0 }}
            rules={[
              {
                required: true,
                message: 'Please select a quantity',
              },
            ]}
          >
            <Select size="middle" mode="multiple">
              {services.map(item => (
                <Select.Option key={item} value={item.id}>
                  {item.name}
                </Select.Option>
              ))}
            </Select>
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
      editable: true,
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <Form.Item
            name="value"
            style={{ margin: 0 }}
            rules={[
              {
                required: true,
                message: 'Please select a value',
              },
            ]}
          >
            <Select size="middle" mode="multiple">
              {services.map(item => (
                <Select.Option key={item} value={item.id}>
                  {item.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        ) : (
          <>{record.value}</>
        );
      },
    },
    // {
    //   title: 'Status',
    //   dataIndex: 'status',
    //   key: 'status',
    //   editable: true,
    //   render: (_, record) => {
    //     const editable = isEditing(record);
    //     return editable ? (
    //       <Form.Item
    //         name="service_type_id"
    //         style={{ margin: 0 }}
    //         rules={[
    //           {
    //             required: true,
    //             message: `Please input an service type!`,
    //           },
    //         ]}
    //       >
    //         <Input defaultValue={record.status.name} />
    //         {/* <Select size="middle" mode="multiple">
    //           {serviceTypes.map(item => (
    //             <Select.Option key={item} value={item.id}>
    //               {item.name}
    //             </Select.Option>
    //           ))}
    //         </Select> */}
    //       </Form.Item>
    //     ) : (
    //       <>{record.status.name}</>
    //     );
    //   },
    // },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      editable: true,
      render: (_, record) => {
        const editable = isEditing(record);
        return record.address; /*editable ? (
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
        );*/
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
      title: 'Date & time',
      dataIndex: 'date',
      key: 'date',
      editable: true,
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <Form.Item
            name="date"
            style={{ margin: 0 }}
            rules={[
              {
                required: true,
                message: 'Please select a date and time',
              },
            ]}
          >
            <Input defaultValue={record.provided_at} />
            <Select size="middle" mode="multiple">
              {services.map(item => (
                <Select.Option key={item} value={item.id}>
                  {item.provided_at}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        ) : (
          <>{record.provided_at}</>
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
            rules={[
              {
                required: true,
                message: 'Please select a notes',
              },
            ]}
          >
            <Select size="middle" mode="multiple">
              {services.map(item => (
                <Select.Option key={item} value={item.id}>
                  {item.notes}
                </Select.Option>
              ))}
            </Select>
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
    <div className="servicesTable">
      {services.length < 1 && <LoadingOutlined className="loader" />},
      {services.length >= 1 && (
        <Form form={form}>
          <Table
            className="desktop-table"
            columns={columns}
            dataSource={services}
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
    recipient: state.recipient.recipients,
    services: state.service.services,
    serviceTypes: state.service.serviceTypes,
    change: state.recipient.change,
  };
};

export default connect(mapStateToProps, {
  getAllServicesAction,
  deleteServiceAction,
  editServiceAction,
  getServiceByIdAction,
  getRecipientByIdAction,
  getAllRecipientAction,
  getAllServiceTypesAction,
  addRecipientAction,
  editRecipientAction,
  deleteRecipientAction,
})(RecipientTable);
