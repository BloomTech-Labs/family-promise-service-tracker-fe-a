// container
import React, { useState, Component, useReducer } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectUser } from '../../state/actions/householdeligibilityActions';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import logo from '../../../src/assets/logo.png';
// This component provides an option for the user to click and observe disparate eligibility for the surrounding area.

function HouseholdList(props) {
  const createListItems = () => {
    return props.services.map(service => {
      return (
        <Button
          type="primary"
          key={service.id}
          onClick={() => props.selectUser(service)}
        >
          {service.Prevention} {service.Shelter} {service.Aftercare}
        </Button>
      );
    });
  };

  return (
    <div className="">
      <div className="serviceButton">{createListItems()}</div>
      );
    </div>
  );
}

// takes an application state and passes to the component as props. You can now pass the service as props...
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
