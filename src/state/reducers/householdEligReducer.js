import { TOGGLE_EDITING } from '../actions/householdeligibilityActions';

export const initialState = {
  id: 1,
  Showers: '✔️',
  Laundry: '❌',
  CaseManagement: '✔️',
  FoodBoxes: '❌',
  GasCard: '✔️',
  FoodCard: '❌',
  LifeSkillsClassess: '❌',
  SecurityDeposit: '✔️',
  BusToken: '❌',
  BusPasses: '✔️',
  RentalAssistance: '❌',
  FoodAssistance: '✔️',
  MentalHealth: '❌',
};

export const householdElig = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_EDITING:
      return {
        ...state,
        editing: !state.editing,
      };
    default:
      return state;
  }
};
