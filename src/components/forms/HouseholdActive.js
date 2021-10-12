import React, { Component } from 'react';
import { connect } from 'react-redux';

// This component allows the user to activate different household eligibilities for each services. All state props
//from householdactiveReducer will drop in this component.

function ServiceDetail(props) {
  if (!props.active) {
    return <h2> Select a service... </h2>;
  }

  return (
    <div>
      <h4> Showers{props.active.Showers} </h4>
      <h4> Laundry {props.active.Laundry}</h4>
      <h4> CaseManagement {props.active.CaseManagement}</h4>
      <h4> FoodBoxes {props.active.FoodBoxes}</h4>
      <h4> GasCard {props.active.GasCard} </h4>
      <h4> FoodCard {props.active.FoodCard} </h4>
      <h4> LifeSkillsClassess{props.active.LifeSkillsClassess} </h4>
      <h4> SecurityDeposit{props.active.SecurityDeposit} </h4>
      <h4> BusToken {props.active.BusToken} </h4>
      <h4> BusPasses{props.active.BusPasses} </h4>
      <h4> RentalAssitance{props.active.RentalAssistance} </h4>
      <h4> FoodAssistance{props.active.FoodAssistance} </h4>
      <h4> MentalHealth {props.active.MentalHealth} </h4>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    active: state.active,
  };
}

export default connect(mapStateToProps)(ServiceDetail);
