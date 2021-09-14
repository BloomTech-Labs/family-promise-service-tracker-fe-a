import {
  GET_ALL_ETHNICITIES_START,
  GET_ALL_ETHNICITIES_SUCCESS,
  GET_ALL_ETHNICITIES_FAIL,
  GET_ALL_ETHNICITIES_RESOLVE,
} from '../actions/ethnicityActions';

export const initialEthnicityState = {
  ethnicities: [],
  status: 'Resolved',
  error: '',
};

export const ethnicityReducer = (state = initialEthnicityState, action) => {
  switch (action.type) {
    case GET_ALL_ETHNICITIES_START:
      return {
        ...state,
        status: 'Pending...',
      };
    case GET_ALL_ETHNICITIES_SUCCESS:
      return {
        ...state,
        ethnicities: action.payload,
        status: 'Success',
      };
    case GET_ALL_ETHNICITIES_FAIL:
      return {
        ...state,
        error: action.payload,
        status: 'Failed',
      };
    case GET_ALL_ETHNICITIES_RESOLVE:
      return {
        ...state,
        status: 'Resolved',
      };
    default:
      return state;
  }
};
