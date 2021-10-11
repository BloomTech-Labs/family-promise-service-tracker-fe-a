// container
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class list extends Component {
  constructor(props) {
    super(props);
    this.createListItems = this.createListItems.bind(this); // Explicitly bind the meaning of `this` inside the function
  }
  // The rest stays the same...

  // The rest stays the same...

  render() {
    return <ul>{this.createListItems()}</ul>;
  }
}

// takes an application state and passes to the component as props. You can now pass the service as props.
function mapStateToProps(state) {
  return {
    services: state.services,
  };
}

export default connect(mapStateToProps)(list);
