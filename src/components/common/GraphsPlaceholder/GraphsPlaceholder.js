import React from 'react';
import { Carousel } from 'antd';
import graphA from '../../../assets/graph-a.jpg';
import graphB from '../../../assets/graph-b.jpg';
import graphC from '../../../assets/graph-c.jpg';

export default function GraphsPlaceholder() {
  // let graphs = [graphA, graphB, graphC]

  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  return (
    <div>
      <Carousel autoplay={true}>
        <div>
          <img style={contentStyle} src={graphA} />
        </div>
      </Carousel>
    </div>
  );
}
