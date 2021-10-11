import { TOGGLE_EDITING } from '../actions/householdeligibilityActions';

export const initialState = {
  services: [
    {
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
    },
  ],
};

export const householdElig = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_EDITING:
      const services = [];
      for (let code in action.payload) {
        services.push({ code: action.payload[code] });
      }
      return {
        services,
      };
    default:
      return state;
  }
};
