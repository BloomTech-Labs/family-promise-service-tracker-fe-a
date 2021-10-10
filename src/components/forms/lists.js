// container
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const list = props => {
  return (
    <div>
      <ul>Lists </ul>
    </div>
  );
};

// takes an application state and passes to the component as props. You can now pass the service as props.
function mapStateToProps(state) {
  return {
    services: state.services,
    Laundry: state.Laundry,
  };
}

export default connect(mapStateToProps)(list);
