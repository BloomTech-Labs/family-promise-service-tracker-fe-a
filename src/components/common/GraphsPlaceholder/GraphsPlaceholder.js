import React from 'react';
import graphA from '../../../assets/graph-a.jpg';
import graphB from '../../../assets/graph-b.jpg';
import graphC from '../../../assets/graph-c.jpg';

export default function GraphsPlaceholder() {
  let graphs = [graphA, graphB, graphC];

  const contentStyle = {
    height: '160px',
    padding: '1rem',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
  };

  const flexStyle = {
    display: 'flex',
    margin: '0 auto',
    width: '80vw',
  };

  return (
    <div style={flexStyle}>
      {graphs.map(graph => {
        return (
          <div>
            <img style={contentStyle} src={graph} />
          </div>
        );
      })}
    </div>
  );
}
