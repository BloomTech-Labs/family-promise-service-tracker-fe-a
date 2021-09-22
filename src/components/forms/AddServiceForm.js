import React from 'react';
import { connect } from 'react-redux';
import {
  Form,
  Input,
  Select,
  InputNumber,
  DatePicker,
  TimePicker,
  Modal,
} from 'antd';
import {
  getServiceProviders,
  addServiceAction,
} from '../../state/actions/serviceActions';

const { TextArea } = Input;

function AddServiceForm({
  visible,
  onCreate,
  onCancel,
  serviceProviders,
  recipients,
  serviceTypePrograms,
  serviceUnits,
  statuses,
  locations,
  serviceRatings,
}) {
  const [form] = Form.useForm();

  return (
    <>
      <Modal
        visible={visible}
        title="Log New Service"
        okText="Log Service"
        cancelText="Cancel"
        width="80%"
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then(values => {
              form.resetFields();
              onCreate(values);
            })
            .catch(info => {
              console.log('Validate Failed', info);
            });
        }}
      >
        <Form
          layout="vertical"
          form={form}
          initialValues={{
            modifier: 'public',
          }}
        >
          <div className="date-time-wrapper">
            <Form.Item
              label="Date & Time of Service"
              name="provided_at"
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
                size="large"
              />
            </Form.Item>
          </div>
          <Form.Item label="Duration of Service (HH:MM:SS)" name="duration">
            <TimePicker />
          </Form.Item>
          <Form.Item
            label="Recipient Name"
            name="primary_recipient_id"
            rules={[
              {
                required: true,
                message: 'Please select the Recipient',
              },
            ]}
          >
            <Select size="large" placeholder="Select Recipient">
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
          <Form.Item
            label="Service Address (not always permanent address)"
            name="location_id"
            rules={[
              {
                required: true,
                message: 'Please enter the address',
              },
            ]}
          >
            <Select size="large" placeholder="Select Location">
              {locations.map(location => (
                <Select.Option
                  key={location.location_id}
                  value={location.location_id}
                >
                  {location.address_line2
                    ? `${location.address}, ${location.address_line2}, 
                      ${location.city}, ${location.state} ${location.zip}`
                    : `${location.address} ${location.city}, 
                      ${location.state} ${location.zip}`}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            label="Service Provider"
            name="primary_provider_id"
            rules={[
              {
                required: true,
                message: 'Please select the provider',
              },
            ]}
          >
            <Select placeholder="Select Provider" size="large">
              {serviceProviders.map(provider => (
                <Select.Option
                  key={provider.provider_id}
                  value={provider.provider_id}
                >
                  {provider.provider_first_name +
                    ' ' +
                    provider.provider_last_name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            label="Service Type Program"
            name="service_type_program_id"
            rules={[
              {
                required: true,
                message: 'Please select the Service Type',
              },
            ]}
          >
            <Select size="large" placeholder="Select Service Type">
              {serviceTypePrograms.map(item => (
                <Select.Option
                  key={item.service_type_program_id}
                  value={item.service_type_program_id}
                >
                  {`${item.program_name} - ${item.service_type_name}`}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            label="Service Status"
            name="status_id"
            rules={[
              {
                required: true,
                message: 'Please select the program',
              },
            ]}
          >
            <Select placeholder="Select Status" size="large">
              {statuses.map(item => (
                <Select.Option key={item.status_id} value={item.status_id}>
                  {item.status}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            label="Unit (Class, Tickets, etc)"
            name="service_unit_id"
            rules={[
              {
                required: true,
                message: 'Please select the unit',
              },
            ]}
          >
            <Select size="large" placeholder="Select Unit Type">
              {serviceUnits.map(item => (
                <Select.Option
                  key={item.service_unit_id}
                  value={item.service_unit_id}
                >
                  {item.service_unit_name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="Quantity Of Units" name="service_quantity">
            <InputNumber type="number" size="large" min="0" />
          </Form.Item>
          <Form.Item label="Value of Services In Dollars" name="service_value">
            <InputNumber type="number" size="large" min="0" />
          </Form.Item>
          <Form.Item label="Case Notes" name="service_entry_notes">
            <TextArea
              placeholder="Enter Details..."
              showCount
              maxLength={240}
            />
          </Form.Item>
          <Form.Item
            label="Rating"
            name="service_rating_id"
            rules={[
              {
                required: true,
                message: 'Please select the rating',
              },
            ]}
          >
            <Select size="large" placeholder="Select Rating">
              {serviceRatings.map(item => (
                <Select.Option
                  key={item.service_rating_id}
                  value={item.service_rating_id}
                >
                  {item.service_rating_description
                    ? `${item.service_rating} (${item.service_rating_description})`
                    : `${item.service_rating}`}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
const mapStateToProps = state => {
  return {
    serviceProviders: state.service.serviceProviders,
    recipients: state.recipient.recipients,
    serviceTypePrograms: state.serviceTypePrograms.serviceTypePrograms,
    serviceUnits: state.serviceUnit.serviceUnits,
    statuses: state.status.statuses,
    locations: state.location.locations,
    serviceRatings: state.serviceRating.serviceRatings,
  };
};
export default connect(mapStateToProps, {
  addServiceAction,
  getServiceProviders,
})(AddServiceForm);
