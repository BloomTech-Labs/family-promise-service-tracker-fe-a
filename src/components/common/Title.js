import React from 'react';
import { Typography } from 'antd';

function TitleComponent({ TitleText }) {
  //Be sure to pass the TitleText in quotes when you render component
  const { Title } = Typography;
  return (
    <div className="title-container desktop-title">
      <Title level={2}>{TitleText}</Title>
    </div>
  );
}

export default TitleComponent;
