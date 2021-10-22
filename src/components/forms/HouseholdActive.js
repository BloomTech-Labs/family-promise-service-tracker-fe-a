import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../styles/Dashboard.scss';
import 'antd/dist/antd.css';
//../../styles/Dashboard.scss'
// This component allows the user to activate different household eligibilities for each services. All state props
//from householdactiveReducer will drop in this component.

function ServiceDetail(props) {
  if (!props.active) {
    return <h2> Select a service... </h2>;
  }

  return (
    <div className="groupedList">
      <div className="serviceList">
        <h4 className="serviceList"> Showers{props.active.Showers} </h4>
        <h4 className="serviceList"> Laundry {props.active.Laundry}</h4>
        <h4 className="serviceList">
          CaseManagement {props.active.CaseManagement}
        </h4>
        <h4 className="serviceList"> FoodBoxes {props.active.FoodBoxes}</h4>
        <h4 className="serviceList"> GasCard {props.active.GasCard} </h4>
        <h4 className="serviceList"> FoodCard {props.active.FoodCard} </h4>
      </div>
      <div>
        <h4 className="serviceList">
          LifeSkillsClassess{props.active.LifeSkillsClassess}
        </h4>
        <h4 className="serviceList">
          SecurityDeposit{props.active.SecurityDeposit}
        </h4>
        <h4 className="serviceList"> BusToken {props.active.BusToken} </h4>
        <h4 className="serviceList"> BusPasses{props.active.BusPasses} </h4>
        <h4 className="serviceList">
          RentalAssitance{props.active.RentalAssistance}
        </h4>
        <h4 className="serviceList">
          FoodAssistance{props.active.FoodAssistance}
        </h4>
        <h4 className="serviceList">
          MentalHealth {props.active.MentalHealth}
        </h4>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    active: state.active,
  };
}

export default connect(mapStateToProps)(ServiceDetail);
