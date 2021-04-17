import React from 'react';
import { Typography } from 'antd';

function TitleComponent({ TitleText }) {
  const { Title } = Typography;
  return (
    <div className="title-container">
      <Title level={2}>{TitleText}</Title>
    </div>
  );
}

export default TitleComponent;
