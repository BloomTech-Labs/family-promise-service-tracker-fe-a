import {
  GET_ALL_SERVICE_TYPES_START,
  GET_ALL_SERVICE_TYPES_SUCCESS,
  GET_ALL_SERVICE_TYPES_FAIL,
  GET_ALL_SERVICE_TYPES_RESOLVE,
  GET_SERVICE_TYPE_START,
  GET_SERVICE_TYPE_SUCCESS,
  GET_SERVICE_TYPE_FAIL,
  GET_SERVICE_TYPE_RESOLVE,
  ADD_SERVICE_TYPE_START,
  ADD_SERVICE_TYPE_SUCCESS,
  ADD_SERVICE_TYPE_FAIL,
  ADD_SERVICE_TYPE_RESOLVE,
  EDIT_SERVICE_TYPE_START,
  EDIT_SERVICE_TYPE_SUCCESS,
  EDIT_SERVICE_TYPE_FAIL,
  EDIT_SERVICE_TYPE_RESOLVE,
  DELETE_SERVICE_TYPE_START,
  DELETE_SERVICE_TYPE_SUCCESS,
  DELETE_SERVICE_TYPE_FAIL,
  DELETE_SERVICE_TYPE_RESOLVE,
} from '../actions/ServiceTypeActions';

export const initialServiceTypeState = {
  serviceTypes: [],
  serviceType: null,
  status: 'Resolved',
  change: '',
  error: '',
};

export const serviceTypeReducer = (state = initialServiceTypeState, action) => {
  switch (action.type) {
    //get all service types
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
    //get service type by id
    case GET_SERVICE_TYPE_START:
      return {
        ...state,
        status: 'Pending...',
      };
    case GET_SERVICE_TYPE_SUCCESS:
      return {
        ...state,
        serviceType: action.payload,
        status: 'Success',
      };
    case GET_SERVICE_TYPE_FAIL:
      return {
        ...state,
        status: 'Failed',
        error: action.payload,
      };
    case GET_SERVICE_TYPE_RESOLVE:
      return {
        ...state,
        status: 'Resolved',
      };
    //add service
    case ADD_SERVICE_TYPE_START:
      return {
        ...state,
        status: 'Pending...',
      };
    case ADD_SERVICE_TYPE_SUCCESS:
      return {
        ...state,
        status: 'Success',
        serviceTypes: [...state.serviceTypes, action.payload],
        change: 'added',
      };
    case ADD_SERVICE_TYPE_FAIL:
      return {
        ...state,
        status: 'Failed',
        error: action.payload,
      };
    case ADD_SERVICE_TYPE_RESOLVE:
      return {
        ...state,
        status: 'Resolved',
        change: '',
      };
    //edit service types
    case EDIT_SERVICE_TYPE_START:
      return {
        ...state,
        status: 'Pending...',
      };
    case EDIT_SERVICE_TYPE_SUCCESS:
      return {
        ...state,
        status: 'Success',
        serviceTypes: state.serviceTypes.map(serviceType =>
          serviceType.id === action.payload.id ? action.payload : serviceType
        ),
        change: 'edited',
      };
    case EDIT_SERVICE_TYPE_FAIL:
      return {
        ...state,
        status: 'Failed',
        error: action.payload,
      };
    case EDIT_SERVICE_TYPE_RESOLVE:
      return {
        ...state,
        status: 'Resolved',
        change: '',
      };

    //delete service type
    case DELETE_SERVICE_TYPE_START:
      return {
        ...state,
        status: 'Pending...',
      };
    case DELETE_SERVICE_TYPE_SUCCESS:
      return {
        ...state,
        status: 'Success',
        serviceTypes: state.serviceTypes.filter(
          serviceType => serviceType.id !== action.payload
        ),
        change: 'deleted',
      };
    case DELETE_SERVICE_TYPE_FAIL:
      return {
        ...state,
        status: 'Failed',
        error: action.payload,
      };
    case DELETE_SERVICE_TYPE_RESOLVE:
      return {
        ...state,
        status: 'Resolved',
        change: '',
      };
    //default
    default:
      return state;
  }
};
