// container
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectUser } from '../../state/actions/householdeligibilityActions';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import logo from '../../../src/assets/logo.png';
// This component provides an option for the user to click and observe disparate eligibility for the surrounding area.

function HouseholdList(props) {
  return (
    <div className="service">
      <Button> All </Button>
      {console.log(props.services.services)}
      {props.services.map(service => {
        return (
          <div key={service.id} onClick={() => props.selectUser(service)}>
            <div>
              <header className="service">
                <Button type="primary" className="serviceButtonPurpl">
                  {service.Prevention}{' '}
                </Button>
                <Button type="primary" className="serviceButtonYello">
                  {service.Shelter}{' '}
                </Button>
                <Button type="primary" className="serviceButtonBlu">
                  {service.Aftercare}{' '}
                </Button>
              </header>
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
