import React, { PureComponent } from 'react';

let pinStyle = {
  cursor: 'pointer',
  fill: '#d00',
  stroke: 'none',
};

export default class CityPin extends PureComponent {
  render() {
    const { size = 20, name, onClick } = this.props;
    // Change the colors base on the "name" through pinStyle
    if (name === 'Prevention') {
      pinStyle.fill = '#7e3d74';
    } else if (name === 'Shelter Support') {
      pinStyle.fill = '#015c9b';
    } else if (name === 'Aftercare') {
      pinStyle.fill = '#dba94f';
    } else {
      pinStyle.fill = '#cad1d8';
    }

    return (
      <svg
        height={size}
        viewBox="0 0 24 24"
        style={{
          ...pinStyle,
          transform: `translate(${-size / 2}px,${-size}px)`,
        }}
        onClick={onClick}
      >
        <circle cx="10" cy="10" r="5" stroke-width="1" fill={pinStyle.fill} />
      </svg>
    );
  }
}
