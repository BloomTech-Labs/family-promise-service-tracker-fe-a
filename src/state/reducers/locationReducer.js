import {
  GET_ALL_LOCATION_START,
  GET_ALL_LOCATION_SUCCESS,
  GET_ALL_LOCATION_FAIL,
  GET_ALL_LOCATION_RESOLVE,
  GET_LOCATION_START,
  GET_LOCATION_SUCCESS,
  GET_LOCATION_FAIL,
  GET_LOCATION_RESOLVE,
  ADD_LOCATION_START,
  ADD_LOCATION_SUCCESS,
  ADD_LOCATION_FAIL,
  ADD_LOCATION_RESOLVE,
  EDIT_LOCATION_START,
  EDIT_LOCATION_SUCCESS,
  EDIT_LOCATION_FAIL,
  EDIT_LOCATION_RESOLVE,
  DELETE_LOCATION_START,
  DELETE_LOCATION_SUCCESS,
  DELETE_LOCATION_FAIL,
  DELETE_LOCATION_RESOLVE,
} from '../actions/locationActions';

export const initialLocationState = {
  locations: [],
  location: null,
  status: 'Resolved',
  change: '',
  error: '',
};

export const locationReducer = (state = initialLocationState, action) => {
  switch (action.type) {
    // Get All Locations
    case GET_ALL_LOCATION_START:
      return {
        ...state,
        status: 'Pending',
      };
    case GET_ALL_LOCATION_SUCCESS:
      return {
        ...state,
        locations: action.payload,
        status: 'Successful',
      };
    case GET_ALL_LOCATION_FAIL:
      return {
        ...state,
        error: action.payload,
        status: 'Failed',
      };
    case GET_ALL_LOCATION_RESOLVE:
      return {
        ...state,
        status: 'Resolved',
      };
    // Get Location by Id
    case GET_LOCATION_START:
      return {
        ...state,
        status: 'Pending...',
      };
    case GET_LOCATION_SUCCESS:
      return {
        ...state,
        location: action.payload,
        status: 'Success',
      };
    case GET_LOCATION_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case GET_LOCATION_RESOLVE:
      return {
        ...state,
        status: 'Resolved',
      };
    // Add Location
    case ADD_LOCATION_START:
      return {
        ...state,
        status: 'Pending...',
      };
    case ADD_LOCATION_SUCCESS:
      return {
        ...state,
        status: 'Success',
        change: 'Added',
      };
    case ADD_LOCATION_FAIL:
      return {
        ...state,
        status: 'Failed',
        error: action.payload,
      };
    case ADD_LOCATION_RESOLVE:
      return {
        ...state,
        status: 'Resolved',
        change: '',
      };
    // Edit Location
    case EDIT_LOCATION_START:
      return {
        ...state,
        status: 'Pending...',
      };
    case EDIT_LOCATION_SUCCESS:
      return {
        ...state,
        status: 'Success',
        change: 'Edited',
      };
    case EDIT_LOCATION_FAIL:
      return {
        ...state,
        status: 'Failed',
        error: action.payload,
      };
    case EDIT_LOCATION_RESOLVE:
      return {
        ...state,
        status: 'Resolved',
        change: '',
      };
    // Delete Location
    case DELETE_LOCATION_START:
      return {
        ...state,
        status: 'Pending...',
      };
    case DELETE_LOCATION_SUCCESS:
      return {
        ...state,
        status: 'Success',
        change: 'Deleted',
      };
    case DELETE_LOCATION_FAIL:
      return {
        ...state,
        status: 'Failed',
        error: action.payload,
      };
    case DELETE_LOCATION_RESOLVE:
      return {
        ...state,
        status: 'Resolved',
        change: '',
      };
    default:
      return state;
  }
};
