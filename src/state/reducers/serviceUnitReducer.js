import {
  GET_ALL_SERVICE_UNITS_START,
  GET_ALL_SERVICE_UNITS_SUCCESS,
  GET_ALL_SERVICE_UNITS_FAIL,
  GET_ALL_SERVICE_UNITS_RESOLVE,
} from '../actions/serviceUnitActions';

export const initialServiceUnitState = {
  serviceUnits: [],
  status: 'Resolved',
  error: '',
};

export const serviceUnitReducer = (state = initialServiceUnitState, action) => {
  switch (action.type) {
    case GET_ALL_SERVICE_UNITS_START:
      return {
        ...state,
        status: 'Pending...',
      };
    case GET_ALL_SERVICE_UNITS_SUCCESS:
      return {
        ...state,
        serviceUnits: action.payload,
        status: 'Success',
      };
    case GET_ALL_SERVICE_UNITS_FAIL:
      return {
        ...state,
        error: action.payload,
        status: 'Failed',
      };
    case GET_ALL_SERVICE_UNITS_RESOLVE:
      return {
        ...state,
        status: 'Resolved',
      };
    default:
      return state;
  }
};
