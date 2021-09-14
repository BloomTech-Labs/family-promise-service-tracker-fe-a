import {
  GET_ALL_GENDERS_START,
  GET_ALL_GENDERS_SUCCESS,
  GET_ALL_GENDERS_FAIL,
  GET_ALL_GENDERS_RESOLVE,
} from '../actions/genderActions';

export const initialGenderState = {
  genders: [],
  status: 'Resolved',
  error: '',
};

export const genderReducer = (state = initialGenderState, action) => {
  switch (action.type) {
    case GET_ALL_GENDERS_START:
      return {
        ...state,
        status: 'Pending...',
      };
    case GET_ALL_GENDERS_SUCCESS:
      return {
        ...state,
        genders: action.payload,
        status: 'Success',
      };
    case GET_ALL_GENDERS_FAIL:
      return {
        ...state,
        error: action.payload,
        status: 'Failed',
      };
    case GET_ALL_GENDERS_RESOLVE:
      return {
        ...state,
        status: 'Resolved',
      };
    default:
      return state;
  }
};
