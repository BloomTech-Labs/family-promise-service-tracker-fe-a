import React from 'react';
import { Typography, Space } from 'antd';

const MetricsSelected = ({
  program,
  serviceType,
  serviceProvider,
  recipient,
}) => {
  const { Text } = Typography;
  return (
    <div>
      <div className="center">
        <div className="selected-metric-card">
          <Space direction="vertical" className="card-child">
            <Text type="secondary">Program Selected:</Text>
            <Text className="card-text">{program}</Text>
          </Space>
          <Space direction="vertical" className="card-child">
            <Text type="secondary">Service Type Selected:</Text>
            <Text className="card-text">{serviceType}</Text>
          </Space>
          <Space direction="vertical" className="card-child">
            <Text type="secondary">Service Provider Selected:</Text>
            <Text className="card-text">{serviceProvider}</Text>
          </Space>
          <Space direction="vertical" className="card-child">
            <Text type="secondary">Recipient Selected:</Text>
            <Text className="card-text">{recipient}</Text>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default MetricsSelected;
