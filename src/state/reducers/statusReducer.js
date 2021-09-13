import {
  GET_ALL_STATUSES_START,
  GET_ALL_STATUSES_SUCCESS,
  GET_ALL_STATUSES_FAIL,
  GET_ALL_STATUSES_RESOLVE,
} from '../actions/statusActions';

export const initialStatusState = {
  statuses: [],
  status: 'Resolved',
  error: '',
};

export const statusReducer = (state = initialStatusState, action) => {
  switch (action.type) {
    case GET_ALL_STATUSES_START:
      return {
        ...state,
        status: 'Pending...',
      };
    case GET_ALL_STATUSES_SUCCESS:
      return {
        ...state,
        statuses: action.payload,
        status: 'Success',
      };
    case GET_ALL_STATUSES_FAIL:
      return {
        ...state,
        status: 'Failed',
        error: action.payload,
      };
    case GET_ALL_STATUSES_RESOLVE:
      return {
        ...state,
        status: 'Resolved',
      };
    default:
      return state;
  }
};
