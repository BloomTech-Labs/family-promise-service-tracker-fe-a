// container
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectUser } from '../../state/actions/householdeligibilityActions';
import 'antd/dist/antd.css';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

// This component provides an option for the user to click and observe disparate eligibility for the surrounding area.

function HouseholdList(props) {
  const createListItems = () => {
    return props.services.map(service => {
      return (
        <TabPane
          tab={service.type}
          key={service.id}
          className={service.type.toLowerCase()}
        >
          {service.Prevention} {service.Shelter} {service.Aftercare}
        </TabPane>
      );
    });
  };

  const handleTabClick = tabId => {
    let service = {};
    props.services.forEach(item => {
      if (String(item.id) === tabId) {
        service = item;
      }
    });
    props.selectUser(service);
  };

  return (
    <Tabs defaultActiveKey="1" centered onTabClick={handleTabClick}>
      {createListItems()}
    </Tabs>
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
