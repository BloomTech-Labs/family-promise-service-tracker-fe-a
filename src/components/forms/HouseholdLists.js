// container
import React, { Component } from 'react';
import { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectUser } from '../../state/actions/householdeligibilityActions';
import 'antd/dist/antd.css';
import { Button } from 'antd';

import logo from '../../../src/assets/logo.png';
// This component provides an option for the user to click and observe disparate eligibility for the surrounding area.

function HouseholdList(props) {
  return (
    <div>
      {console.log(props.services.services)}
      {props.services.map(service => {
        return (
          <div key={service.id} onClick={() => props.selectUser(service)}>
            <div className="serviceButtons">
              <h3 id="yellowButton">{service.Prevention}</h3>
              <h3 id="blueButton">{service.Shelter}</h3>
              <h3 id="greenButton">{service.Aftercare}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// takes an application state and passes to the component as props. You can now pass the service as props.
function mapStateToProps(state) {
  console.log(state);
  return {
    services: state.services.services,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ selectUser: selectUser }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(HouseholdList);
