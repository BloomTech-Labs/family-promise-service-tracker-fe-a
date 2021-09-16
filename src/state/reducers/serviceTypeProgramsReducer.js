import {
  GET_ALL_SERVICE_TYPE_PROGRAMS_START,
  GET_ALL_SERVICE_TYPE_PROGRAMS_SUCCESS,
  GET_ALL_SERVICE_TYPE_PROGRAMS_FAIL,
  GET_ALL_SERVICE_TYPE_PROGRAMS_RESOLVE,
  GET_SERVICE_TYPE_PROGRAMS_START,
  GET_SERVICE_TYPE_PROGRAMS_SUCCESS,
  GET_SERVICE_TYPE_PROGRAMS_FAIL,
  GET_SERVICE_TYPE_PROGRAMS_RESOLVE,
  ADD_SERVICE_TYPE_PROGRAMS_START,
  ADD_SERVICE_TYPE_PROGRAMS_SUCCESS,
  ADD_SERVICE_TYPE_PROGRAMS_FAIL,
  ADD_SERVICE_TYPE_PROGRAMS_RESOLVE,
  EDIT_SERVICE_TYPE_PROGRAMS_START,
  EDIT_SERVICE_TYPE_PROGRAMS_SUCCESS,
  EDIT_SERVICE_TYPE_PROGRAMS_FAIL,
  EDIT_SERVICE_TYPE_PROGRAMS_RESOLVE,
  DELETE_SERVICE_TYPE_PROGRAMS_START,
  DELETE_SERVICE_TYPE_PROGRAMS_SUCCESS,
  DELETE_SERVICE_TYPE_PROGRAMS_FAIL,
  DELETE_SERVICE_TYPE_PROGRAMS_RESOLVE,
} from '../actions/serviceTypeProgramsActions';

export const initialServiceTypeProgramsState = {
  serviceTypePrograms: [],
  serviceTypeProgram: null,
  status: 'Resolved',
  change: '',
  error: '',
};

export const serviceTypeProgramsReducer = (
  state = initialServiceTypeProgramsState,
  action
) => {
  switch (action.type) {
    //get all service type programs
    case GET_ALL_SERVICE_TYPE_PROGRAMS_START:
      return {
        ...state,
        status: 'Pending...',
      };
    case GET_ALL_SERVICE_TYPE_PROGRAMS_SUCCESS:
      return {
        ...state,
        serviceTypePrograms: action.payload,
        status: 'Success',
      };
    case GET_ALL_SERVICE_TYPE_PROGRAMS_FAIL:
      return {
        ...state,
        status: 'Failed',
        error: action.payload,
      };
    case GET_ALL_SERVICE_TYPE_PROGRAMS_RESOLVE:
      return {
        ...state,
        status: 'Resolved',
      };
    //get service type programs by id
    case GET_SERVICE_TYPE_PROGRAMS_START:
      return {
        ...state,
        status: 'Pending...',
      };
    case GET_SERVICE_TYPE_PROGRAMS_SUCCESS:
      return {
        ...state,
        serviceTypeProgram: action.payload,
        status: 'Success',
      };
    case GET_SERVICE_TYPE_PROGRAMS_FAIL:
      return {
        ...state,
        status: 'Failed',
        error: action.payload,
      };
    case GET_SERVICE_TYPE_PROGRAMS_RESOLVE:
      return {
        ...state,
        status: 'Resolved',
      };
    //add service
    case ADD_SERVICE_TYPE_PROGRAMS_START:
      return {
        ...state,
        status: 'Pending...',
      };
    case ADD_SERVICE_TYPE_PROGRAMS_SUCCESS:
      return {
        ...state,
        status: 'Success',
        serviceTypePrograms: [...state.serviceTypePrograms, action.payload],
        change: 'added',
      };
    case ADD_SERVICE_TYPE_PROGRAMS_FAIL:
      return {
        ...state,
        status: 'Failed',
        error: action.payload,
      };
    case ADD_SERVICE_TYPE_PROGRAMS_RESOLVE:
      return {
        ...state,
        status: 'Resolved',
        change: '',
      };
    //edit service types
    case EDIT_SERVICE_TYPE_PROGRAMS_START:
      return {
        ...state,
        status: 'Pending...',
      };
    case EDIT_SERVICE_TYPE_PROGRAMS_SUCCESS:
      return {
        ...state,
        status: 'Success',
        serviceTypePrograms: state.serviceTypePrograms.map(serviceTypeProgram =>
          serviceTypeProgram.id === action.payload.id
            ? action.payload
            : serviceTypeProgram
        ),
        change: 'edited',
      };
    case EDIT_SERVICE_TYPE_PROGRAMS_FAIL:
      return {
        ...state,
        status: 'Failed',
        error: action.payload,
      };
    case EDIT_SERVICE_TYPE_PROGRAMS_RESOLVE:
      return {
        ...state,
        status: 'Resolved',
        change: '',
      };

    //delete service type programs
    case DELETE_SERVICE_TYPE_PROGRAMS_START:
      return {
        ...state,
        status: 'Pending...',
      };
    case DELETE_SERVICE_TYPE_PROGRAMS_SUCCESS:
      return {
        ...state,
        status: 'Success',
        serviceTypePrograms: state.serviceTypePrograms.filter(
          serviceTypeProgram => serviceTypeProgram.id !== action.payload
        ),
        change: 'deleted',
      };
    case DELETE_SERVICE_TYPE_PROGRAMS_FAIL:
      return {
        ...state,
        status: 'Failed',
        error: action.payload,
      };
    case DELETE_SERVICE_TYPE_PROGRAMS_RESOLVE:
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
