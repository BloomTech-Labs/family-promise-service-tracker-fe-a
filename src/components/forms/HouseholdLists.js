// container
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectUser } from '../../state/actions/householdeligibilityActions';

// This component provides an option for the user to click and observe disparate eligibility for the surrounding area.

function HouseholdList(props) {
  return (
    <div className="service">
      {console.log(props.services.services)}
      {props.services.map(service => {
        return (
          <div key={service.id} onClick={() => props.selectUser(service)}>
            <div className="service">
              <h5 className="serviceButtonPurple">{service.Prevention} </h5>
              <h5 className="serviceButtonYellow">{service.Shelter} </h5>
              <h5 className="serviceButtonBlue">{service.Aftercare} </h5>
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
