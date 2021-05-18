import {
  GET_ALL_HOUSEHOLD_START,
  GET_ALL_HOUSEHOLD_SUCCESS,
  GET_ALL_HOUSEHOLD_FAIL,
  GET_ALL_HOUSEHOLD_RESOLVE,
  GET_HOUSEHOLD_START,
  GET_HOUSEHOLD_SUCCESS,
  GET_HOUSEHOLD_FAIL,
  GET_HOUSEHOLD_RESOLVE,
  ADD_HOUSEHOLD_START,
  ADD_HOUSEHOLD_SUCCESS,
  ADD_HOUSEHOLD_FAIL,
  ADD_HOUSEHOLD_RESOLVE,
  EDIT_HOUSEHOLD_START,
  EDIT_HOUSEHOLD_SUCCESS,
  EDIT_HOUSEHOLD_FAIL,
  EDIT_HOUSEHOLD_RESOLVE,
  DELETE_HOUSEHOLD_START,
  DELETE_HOUSEHOLD_SUCCESS,
  DELETE_HOUSEHOLD_FAIL,
  DELETE_HOUSEHOLD_RESOLVE,
} from '../actions/householdActions';

// Initial Household State

export const initialHouseholdState = {
  households: [],
  household: null,
  status: 'Resolved',
  change: '',
  error: '',
};

export const householdReducer = (state = initialHouseholdState, action) => {
  switch (action.type) {
    // Get ALL Households
    case GET_ALL_HOUSEHOLD_START:
      return {
        ...state,
        status: 'Pending...',
      };
    case GET_ALL_HOUSEHOLD_SUCCESS:
      return {
        ...state,
        households: action.payload,
        status: 'Success',
      };
    case GET_ALL_HOUSEHOLD_FAIL:
      return {
        ...state,
        status: 'Failed',
        error: action.payload,
      };
    case GET_ALL_HOUSEHOLD_RESOLVE:
      return {
        ...state,
        status: 'Resolved',
      };
    // Get Household By Id
    case GET_HOUSEHOLD_START:
      return {
        ...state,
        status: 'Pending...',
      };
    case GET_HOUSEHOLD_SUCCESS:
      return {
        ...state,
        households: action.payload,
        status: 'Success',
      };
    case GET_HOUSEHOLD_FAIL:
      return {
        ...state,
        status: 'Failed',
        error: action.payload,
      };
    case GET_HOUSEHOLD_RESOLVE:
      return {
        ...state,
        status: 'Resolved',
      };
    // Add Household
    case ADD_HOUSEHOLD_START:
      return {
        ...state,
        status: 'Pending...',
      };
    case ADD_HOUSEHOLD_SUCCESS:
      return {
        ...state,
        status: 'Success',
        change: 'Added',
      };
    case ADD_HOUSEHOLD_FAIL:
      return {
        ...state,
        status: 'Failed',
        error: action.payload,
      };
    case ADD_HOUSEHOLD_RESOLVE:
      return {
        ...state,
        status: 'Resolved',
        change: '',
      };
    // Edit Household
    case EDIT_HOUSEHOLD_START:
      return {
        ...state,
        status: 'Pending...',
      };
    case EDIT_HOUSEHOLD_SUCCESS:
      return {
        ...state,
        status: 'Success',
        change: 'Edited',
      };
    case EDIT_HOUSEHOLD_FAIL:
      return {
        ...state,
        status: 'Failed',
        error: action.payload,
      };
    case EDIT_HOUSEHOLD_RESOLVE:
      return {
        ...state,
        status: 'Resolved',
        change: '',
      };
    // Delete Household
    case DELETE_HOUSEHOLD_START:
      return {
        ...state,
        status: 'Pending...',
      };
    case DELETE_HOUSEHOLD_SUCCESS:
      return {
        ...state,
        status: 'Success',
        change: 'Deleted',
      };
    case DELETE_HOUSEHOLD_FAIL:
      return {
        ...state,
        status: 'Failed',
        error: action.payload,
      };
    case DELETE_HOUSEHOLD_RESOLVE:
      return {
        ...state,
        status: 'Resolved',
        change: '',
      };
    // Default
    default:
      return state;
  }
};
