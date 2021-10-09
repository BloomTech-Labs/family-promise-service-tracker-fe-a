// container
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class list extends Component {
  render() {
    return (
      <ul>
        <li> Prevention</li>
        <li> Sheleter Support</li>
        <li> AfterCare </li>
      </ul>
    );
  }
}

export default list;
