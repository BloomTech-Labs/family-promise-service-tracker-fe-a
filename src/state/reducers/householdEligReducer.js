import { TOGGLE_EDITING } from '../actions/householdeligibilityActions';

//The item below is an object with a list of arrays. In the HouseHoldActive.js component there are placeholders founded with the same listed data,
//a user click will invoke the data to move over onto the main layout, HouseholdEligibility component.
export const initialState = {
  services: [
    {
      id: 1,
      Prevention: 'Prevention',
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
    {
      id: 2,
      Shelter: 'Shelter',
      Showers: '✔️',
      Laundry: '✔️',
      CaseManagement: '❌',
      FoodBoxes: '❌',
      GasCard: '❌',
      FoodCard: '❌',
      LifeSkillsClassess: '❌',
      SecurityDeposit: '❌',
      BusToken: '✔️',
      BusPasses: '✔️',
      RentalAssistance: '❌',
      FoodAssistance: '✔️',
      MentalHealth: '✔️',
    },
    {
      id: 3,
      Aftercare: 'Aftercare',
      Showers: '✔️',
      Laundry: '✔️',
      CaseManagement: '✔️',
      FoodBoxes: '✔️',
      GasCard: '✔️',
      FoodCard: '✔️',
      LifeSkillsClassess: '❌',
      SecurityDeposit: '✔️',
      BusToken: '✔️',
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
