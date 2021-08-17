import React from 'react';
import { Typography, Space } from 'antd';

/* 
      Renders a text area with results of selection from dropdown, used to be imported into MetricsFilterBar.js and shown below the dropdown, needed to be passed the following props 
      as well / this is the code that appeared below the dropdown code for the MetricsFilterBar:

      <MetricsSelected
        program={drilledProgram}
        serviceType={drilledServiceType}
        serviceProvider={drilledServiceProvider}
        recipient={drilledRecipient}
      />
    */

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
