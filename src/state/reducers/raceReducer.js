import {
  GET_ALL_RACES_START,
  GET_ALL_RACES_SUCCESS,
  GET_ALL_RACES_FAIL,
  GET_ALL_RACES_RESOLVE,
} from '../actions/raceActions';

export const initialRaceState = {
  races: [],
  status: 'Resolved',
  error: '',
};

export const raceReducer = (state = initialRaceState, action) => {
  switch (action.type) {
    case GET_ALL_RACES_START:
      return {
        ...state,
        status: 'Pending...',
      };
    case GET_ALL_RACES_SUCCESS:
      return {
        ...state,
        races: action.payload,
        status: 'Success',
      };
    case GET_ALL_RACES_FAIL:
      return {
        ...state,
        error: action.payload,
        status: 'Failed',
      };
    case GET_ALL_RACES_RESOLVE:
      return {
        ...state,
        status: 'Resolved',
      };
    default:
      return state;
  }
};
