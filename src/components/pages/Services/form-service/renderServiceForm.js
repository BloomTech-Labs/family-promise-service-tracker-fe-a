import React from 'react';
import {
  Form,
  Input,
  Button,
  Select,
  InputNumber,
  DatePicker,
  TimePicker,
} from 'antd';
import { Row, Col } from 'antd';

const { TextArea } = Input;

const formLayout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const validateMessages = {
  required: 'Please enter first name',
};

const programs = ['Prevention', 'After Care', 'Sheltering'];

const status = ['Complete', 'In Progress', 'Needs Follow-Up', 'Not Started'];

const providers = ['Ruth Higgins', 'John Wick', 'Samuel G.'];

function RenderServiceForm() {
  return (
    <>
      <div className="service-form">
        <Form {...formLayout} layout="vertical">
          <Row>
            <Col span={8}>
              <Form.Item
                label="Recipient Name"
                rules={[
                  {
                    required: true,
                    message: 'Please select the Recipient',
                  },
                ]}
              >
                <Input placeholder="Enter Name" size="large" />
              </Form.Item>

              <Form.Item
                label="Project Single"
                rules={[
                  {
                    required: true,
                    message: 'Please select the Project',
                  },
                ]}
              >
                <Select size="large" placeholder="Select Program">
                  {programs.map(item => (
                    <Select.Option key={item}> {item}</Select.Option>
                  ))}
                </Select>
              </Form.Item>

              <Form.Item
                label="Location"
                rules={[
                  {
                    required: true,
                    message: 'Please enter the address',
                  },
                ]}
              >
                <Input placeholder="Enter address" size="large" />
              </Form.Item>

              <Form.Item
                label="Quantity"
                //   rules={[
                //     {
                //       required: false,
                //       message: 'Select Time',
                //     },
                //   ]}
              >
                <InputNumber size="large" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Project Multiple"
                rules={[
                  {
                    required: true,
                    message: 'Please select the Project',
                  },
                ]}
              >
                <Select
                  size="large"
                  placeholder="Select Programs"
                  mode="multiple"
                >
                  {programs.map(item => (
                    <Select.Option key={item}> {item}</Select.Option>
                  ))}
                </Select>
              </Form.Item>

              <Form.Item
                label="Status"
                rules={[
                  {
                    required: true,
                    message: 'Please select the program',
                  },
                ]}
              >
                <Select placeholder="Select Status" size="large">
                  {status.map(item => (
                    <Select.Option key={item}> {item}</Select.Option>
                  ))}
                </Select>
              </Form.Item>
              <div className="date-time-wrapper">
                <Form.Item
                  label="Date"
                  rules={[
                    {
                      required: true,
                      message: 'Enter Date',
                    },
                  ]}
                >
                  <DatePicker size="large" />
                </Form.Item>

                <Form.Item
                  label="Time"
                  rules={[
                    {
                      required: true,
                      message: 'Select Time',
                    },
                  ]}
                >
                  <TimePicker use12Hours format="h:mm a" size="large" />
                </Form.Item>
              </div>
              <Form.Item
                label="Provider(s)"
                rules={[
                  {
                    required: true,
                    message: 'Please select the providers',
                  },
                ]}
              >
                <Select
                  placeholder="Select Providers"
                  mode="multiple"
                  size="large"
                >
                  {providers.map(item => (
                    <Select.Option key={item}> {item}</Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Form.Item label="Insert Description">
            <TextArea showCount maxLength={240} />
          </Form.Item>
          <Button size="large">Cancel</Button>
          <Button type="primary" size="large">
            Enter Service
          </Button>
        </Form>
      </div>
    </>
  );
}

export default RenderServiceForm;
