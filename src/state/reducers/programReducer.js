import {
  GET_ALL_PROGRAM_START,
  GET_ALL_PROGRAM_SUCCESS,
  GET_ALL_PROGRAM_FAIL,
  GET_ALL_PROGRAM_RESOLVE,
  GET_PROGRAM_START,
  GET_PROGRAM_SUCCESS,
  GET_PROGRAM_FAIL,
  GET_PROGRAM_RESOLVE,
  ADD_PROGRAM_START,
  ADD_PROGRAM_SUCCESS,
  ADD_PROGRAM_FAIL,
  ADD_PROGRAM_RESOLVE,
  EDIT_PROGRAM_START,
  EDIT_PROGRAM_SUCCESS,
  EDIT_PROGRAM_FAIL,
  EDIT_PROGRAM_RESOLVE,
  DELETE_PROGRAM_START,
  DELETE_PROGRAM_SUCCESS,
  DELETE_PROGRAM_FAIL,
  DELETE_PROGRAM_RESOLVE,
} from '../actions/programActions';

// Initial Program State

export const initialProgramState = {
  programs: [],
  program: null,
  status: 'Resolved',
  change: '',
  error: '',
};

export const programReducer = (state = initialProgramState, action) => {
  switch (action.type) {
    //Get All Programs
    case GET_ALL_PROGRAM_START:
      return {
        ...state,
        status: 'Pending...',
      };
    case GET_ALL_PROGRAM_SUCCESS:
      return {
        ...state,
        programs: action.payload,
        status: 'Success',
      };
    case GET_ALL_PROGRAM_FAIL:
      return {
        ...state,
        status: 'Failed',
        error: action.payload,
      };
    case GET_ALL_PROGRAM_RESOLVE:
      return {
        ...state,
        status: 'Resolved',
      };
    // Get Program By Id
    case GET_PROGRAM_START:
      return {
        ...state,
        status: 'Pending...',
      };
    case GET_PROGRAM_SUCCESS:
      return {
        ...state,
        program: action.payload,
        status: 'Success',
      };
    case GET_PROGRAM_FAIL:
      return {
        ...state,
        status: 'Failed',
        error: action.payload,
      };
    case GET_PROGRAM_RESOLVE:
      return {
        ...state,
        status: 'Resolved',
      };
    //Add Program
    case ADD_PROGRAM_START:
      return {
        ...state,
        status: 'Pending...',
      };
    case ADD_PROGRAM_SUCCESS:
      return {
        ...state,
        status: 'Success',
        change: 'added',
      };
    case ADD_PROGRAM_FAIL:
      return {
        ...state,
        status: 'Failed',
        error: action.payload,
      };
    case ADD_PROGRAM_RESOLVE:
      return {
        ...state,
        status: 'Resolved',
        change: '',
      };
    //Edit Program
    case EDIT_PROGRAM_START:
      return {
        ...state,
        status: 'Pending...',
      };
    case EDIT_PROGRAM_SUCCESS:
      return {
        ...state,
        status: 'Success',
        change: 'edited',
      };
    case EDIT_PROGRAM_FAIL:
      return {
        ...state,
        status: 'Failed',
        error: action.payload,
      };
    case EDIT_PROGRAM_RESOLVE:
      return {
        ...state,
        status: 'Resolved',
        change: '',
      };
    // Delete Program
    case DELETE_PROGRAM_START:
      return {
        ...state,
        status: 'Pending...',
      };
    case DELETE_PROGRAM_SUCCESS:
      return {
        ...state,
        status: 'Success',
        change: 'deleted',
      };
    case DELETE_PROGRAM_FAIL:
      return {
        ...state,
        status: 'Failed',
        error: action.payload,
      };
    case DELETE_PROGRAM_RESOLVE:
      return {
        ...state,
        status: 'Resolved',
        change: '',
      };
    //Default
    default:
      return state;
  }
};
