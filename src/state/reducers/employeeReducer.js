import {
  GET_ALL_EMPLOYEE_START,
  GET_ALL_EMPLOYEE_SUCCESS,
  GET_ALL_EMPLOYEE_FAIL,
  GET_ALL_EMPLOYEE_RESOLVE,
  GET_EMPLOYEE_START,
  GET_EMPLOYEE_SUCCESS,
  GET_EMPLOYEE_FAIL,
  GET_EMPLOYEE_RESOLVE,
  ADD_EMPLOYEE_START,
  ADD_EMPLOYEE_SUCCESS,
  ADD_EMPLOYEE_FAIL,
  ADD_EMPLOYEE_RESOLVE,
  EDIT_EMPLOYEE_START,
  EDIT_EMPLOYEE_SUCCESS,
  EDIT_EMPLOYEE_FAIL,
  EDIT_EMPLOYEE_RESOLVE,
  DELETE_EMPLOYEE_START,
  DELETE_EMPLOYEE_SUCCESS,
  DELETE_EMPLOYEE_FAIL,
  DELETE_EMPLOYEE_RESOLVE,
} from '../actions/employeeActions';

// Initial Employee State

export const initialEmployeeState = {
  employees: [],
  employee: null,
  status: 'Resolved',
  change: '',
  error: '',
};

export const employeeReducer = (state = initialEmployeeState, action) => {
  switch (action.type) {
    //Get All Employees
    case GET_ALL_EMPLOYEE_START:
      return {
        ...state,
        status: 'Pending...',
      };
    case GET_ALL_EMPLOYEE_SUCCESS:
      // console.log(action.payload, 'payload inside reducer');
      return {
        ...state,
        employees: action.payload,
        status: 'Success',
      };
    case GET_ALL_EMPLOYEE_FAIL:
      return {
        ...state,
        status: 'Failed',
        error: action.payload,
      };
    case GET_ALL_EMPLOYEE_RESOLVE:
      // console.log(state.employees, 'state inside reducer');
      return {
        ...state,
        status: 'Resolved',
      };
    // Get Employee By Id
    case GET_EMPLOYEE_START:
      return {
        ...state,
        status: 'Pending...',
      };
    case GET_EMPLOYEE_SUCCESS:
      return {
        ...state,
        employee: action.payload,
        status: 'Success',
      };
    case GET_EMPLOYEE_FAIL:
      return {
        ...state,
        status: 'Failed',
        error: action.payload,
      };
    case GET_EMPLOYEE_RESOLVE:
      return {
        ...state,
        status: 'Resolved',
      };
    //Add Employee
    case ADD_EMPLOYEE_START:
      return {
        ...state,
        status: 'Pending...',
      };
    case ADD_EMPLOYEE_SUCCESS:
      return {
        ...state,
        status: 'Success',
        change: 'added',
      };
    case ADD_EMPLOYEE_FAIL:
      return {
        ...state,
        status: 'Failed',
        error: action.payload,
      };
    case ADD_EMPLOYEE_RESOLVE:
      return {
        ...state,
        status: 'Resolved',
        change: '',
      };
    //Edit Employee
    case EDIT_EMPLOYEE_START:
      return {
        ...state,
        status: 'Pending...',
      };
    case EDIT_EMPLOYEE_SUCCESS:
      return {
        ...state,
        status: 'Success',
        change: 'edited',
      };
    case EDIT_EMPLOYEE_FAIL:
      return {
        ...state,
        status: 'Failed',
        error: action.payload,
      };
    case EDIT_EMPLOYEE_RESOLVE:
      return {
        ...state,
        status: 'Resolved',
        change: '',
      };
    // Delete Employee
    case DELETE_EMPLOYEE_START:
      return {
        ...state,
        status: 'Pending...',
      };
    case DELETE_EMPLOYEE_SUCCESS:
      return {
        ...state,
        status: 'Success',
        change: 'deleted',
      };
    case DELETE_EMPLOYEE_FAIL:
      return {
        ...state,
        status: 'Failed',
        error: action.payload,
      };
    case DELETE_EMPLOYEE_RESOLVE:
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
