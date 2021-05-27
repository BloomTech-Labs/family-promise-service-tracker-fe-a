import {
  GET_ALL_SERVICE_START,
  GET_ALL_SERVICE_SUCCESS,
  GET_ALL_SERVICE_FAIL,
  GET_ALL_SERVICE_RESOLVE,
  GET_SERVICE_START,
  GET_SERVICE_SUCCESS,
  GET_SERVICE_FAIL,
  GET_SERVICE_RESOLVE,
  ADD_SERVICE_START,
  ADD_SERVICE_SUCCESS,
  ADD_SERVICE_FAIL,
  ADD_SERVICE_RESOLVE,
  EDIT_SERVICE_START,
  EDIT_SERVICE_SUCCESS,
  EDIT_SERVICE_FAIL,
  EDIT_SERVICE_RESOLVE,
  DELETE_SERVICE_START,
  DELETE_SERVICE_SUCCESS,
  DELETE_SERVICE_FAIL,
  DELETE_SERVICE_RESOLVE,
  GET_ALL_SERVICE_PROVIDERS_START,
  GET_ALL_SERVICE_PROVIDERS_SUCCESS,
  GET_ALL_SERVICE_PROVIDERS_FAIL,
  GET_ALL_SERVICE_PROVIDERS_RESOLVE,
  GET_ALL_SERVICE_TYPES_START,
  GET_ALL_SERVICE_TYPES_SUCCESS,
  GET_ALL_SERVICE_TYPES_FAIL,
  GET_ALL_SERVICE_TYPES_RESOLVE,
} from '../actions/serviceActions';

// Initial Service State

export const initialServiceState = {
  services: [],
  serviceProviders: [],
  serviceTypes: [],
  status: 'Resolved',
  change: '',
  error: '',
};

export const serviceReducer = (state = initialServiceState, action) => {
  switch (action.type) {
    //Get All Services
    case GET_ALL_SERVICE_START:
      return {
        ...state,
        status: 'Pending...',
      };
    case GET_ALL_SERVICE_SUCCESS:
      return {
        ...state,
        services: action.payload,
        status: 'Success',
      };
    case GET_ALL_SERVICE_FAIL:
      return {
        ...state,
        status: 'Failed',
        error: action.payload,
      };
    case GET_ALL_SERVICE_RESOLVE:
      return {
        ...state,
        status: 'Resolved',
      };
    // Get Service By Id
    case GET_SERVICE_START:
      return {
        ...state,
        status: 'Pending...',
      };
    case GET_SERVICE_SUCCESS:
      return {
        ...state,
        service: action.payload,
        status: 'Success',
      };
    case GET_SERVICE_FAIL:
      return {
        ...state,
        status: 'Failed',
        error: action.payload,
      };
    case GET_SERVICE_RESOLVE:
      return {
        ...state,
        status: 'Resolved',
      };
    //Add Service
    case ADD_SERVICE_START:
      return {
        ...state,
        status: 'Pending...',
      };
    case ADD_SERVICE_SUCCESS:
      return {
        ...state,
        services: action.payload,
        status: 'Success',
      };
    case ADD_SERVICE_FAIL:
      return {
        ...state,
        status: 'Failed',
        error: action.payload,
      };
    case ADD_SERVICE_RESOLVE:
      return {
        ...state,
        status: 'Resolved',
        change: '',
      };
    //Edit Service
    case EDIT_SERVICE_START:
      return {
        ...state,
        status: 'Pending...',
      };
    case EDIT_SERVICE_SUCCESS:
      return {
        ...state,
        services: action.payload,
        status: 'Success',
        change: 'edited',
      };
    case EDIT_SERVICE_FAIL:
      return {
        ...state,
        status: 'Failed',
        error: action.payload,
      };
    case EDIT_SERVICE_RESOLVE:
      return {
        ...state,
        status: 'Resolved',
        change: '',
      };
    // Delete Service
    case DELETE_SERVICE_START:
      return {
        ...state,
        status: 'Pending...',
      };
    case DELETE_SERVICE_SUCCESS:
      return {
        ...state,
        status: 'Success',
        change: 'deleted',
      };
    case DELETE_SERVICE_FAIL:
      return {
        ...state,
        status: 'Failed',
        error: action.payload,
      };
    case DELETE_SERVICE_RESOLVE:
      return {
        ...state,
        status: 'Resolved',
        change: '',
      };
    //get all service providers
    case GET_ALL_SERVICE_PROVIDERS_START:
      return {
        ...state,
        status: 'Pending...',
      };
    case GET_ALL_SERVICE_PROVIDERS_SUCCESS:
      return {
        ...state,
        serviceProviders: action.payload,
        status: 'Success',
      };
    case GET_ALL_SERVICE_PROVIDERS_FAIL:
      return {
        ...state,
        status: 'Failed',
        error: action.payload,
      };
    case GET_ALL_SERVICE_PROVIDERS_RESOLVE:
      return {
        ...state,
        status: 'Resolved',
      };
    // get all service types
    case GET_ALL_SERVICE_TYPES_START:
      return {
        ...state,
        status: 'Pending...',
      };
    case GET_ALL_SERVICE_TYPES_SUCCESS:
      return {
        ...state,
        serviceTypes: action.payload,
        status: 'Success',
      };
    case GET_ALL_SERVICE_TYPES_FAIL:
      return {
        ...state,
        status: 'Failed',
        error: action.payload,
      };
    case GET_ALL_SERVICE_TYPES_RESOLVE:
      return {
        ...state,
        status: 'Resolved',
      };
    //Default
    default:
      return state;
  }
};
