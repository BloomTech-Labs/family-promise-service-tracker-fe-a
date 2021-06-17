import { axiosWithAuth } from '../../utils/axiosWithAuth';

// EMPLOYEE ACTION TYPES

export const GET_ALL_EMPLOYEE_START = 'GET_ALL_EMPLOYEE_START';
export const GET_ALL_EMPLOYEE_SUCCESS = 'GET_ALL_EMPLOYEE_SUCCESS';
export const GET_ALL_EMPLOYEE_FAIL = 'GET_ALL_EMPLOYEE_FAIL';
export const GET_ALL_EMPLOYEE_RESOLVE = 'GET_ALL_EMPLOYEE_RESOLVE';

export const GET_EMPLOYEE_START = 'GET_EMPLOYEE_START';
export const GET_EMPLOYEE_SUCCESS = 'GET_EMPLOYEE_SUCCESS';
export const GET_EMPLOYEE_FAIL = 'GET_EMPLOYEE_FAIL';
export const GET_EMPLOYEE_RESOLVE = 'GET_EMPLOYEE_RESOLVE';

export const ADD_EMPLOYEE_START = 'ADD_EMPLOYEE_START';
export const ADD_EMPLOYEE_SUCCESS = 'ADD_EMPLOYEE_SUCCESS';
export const ADD_EMPLOYEE_FAIL = 'ADD_EMPLOYEE_FAIL';
export const ADD_EMPLOYEE_RESOLVE = 'ADD_EMPLOYEE_RESOLVE';

export const EDIT_EMPLOYEE_START = 'EDIT_EMPLOYEE_START';
export const EDIT_EMPLOYEE_SUCCESS = 'EDIT_EMPLOYEE_SUCCESS';
export const EDIT_EMPLOYEE_FAIL = 'EDIT_EMPLOYEE_FAIL';
export const EDIT_EMPLOYEE_RESOLVE = 'EDIT_EMPLOYEE_RESOLVE';

export const DELETE_EMPLOYEE_START = 'DELETE_EMPLOYEE_START';
export const DELETE_EMPLOYEE_SUCCESS = 'DELETE_EMPLOYEE_SUCCESS';
export const DELETE_EMPLOYEE_FAIL = 'DELETE_EMPLOYEE_FAIL';
export const DELETE_EMPLOYEE_RESOLVE = 'DELETE_EMPLOYEE_RESOLVE';

// EMPLOYEE ACTIONS

export const getAllEmployeeAction = () => dispatch => {
  dispatch({ type: GET_ALL_EMPLOYEE_START });

  axiosWithAuth()
    .get(`/api/providers`)
    .then(res => {
      dispatch({ type: GET_ALL_EMPLOYEE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_ALL_EMPLOYEE_FAIL, payload: err.message });
    })
    .finally(() => {
      dispatch({ type: GET_ALL_EMPLOYEE_RESOLVE });
    });
};

export const getEmployeeByIdAction = employeeId => dispatch => {
  dispatch({ type: GET_EMPLOYEE_START });

  axiosWithAuth()
    .get(`/api/providers/${employeeId}`)
    .then(res => {
      dispatch({ type: GET_EMPLOYEE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_EMPLOYEE_FAIL, payload: err.message });
    })
    .finally(() => {
      dispatch({ type: GET_EMPLOYEE_RESOLVE });
    });
};

export const addEmployeeAction = employeeObj => dispatch => {
  dispatch({ type: ADD_EMPLOYEE_START });

  axiosWithAuth()
    .post(`/api/providers`, employeeObj)
    .then(res => {
      dispatch({ type: ADD_EMPLOYEE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ADD_EMPLOYEE_FAIL, payload: err.message });
    })
    .finally(() => {
      dispatch({ type: ADD_EMPLOYEE_RESOLVE });
    });
};

export const editEmployeeAction = (employeeId, employeeObj) => dispatch => {
  dispatch({ type: EDIT_EMPLOYEE_START });

  axiosWithAuth()
    .put(`/api/providers/${employeeId}`, employeeObj)
    .then(res => {
      dispatch({ type: EDIT_EMPLOYEE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: EDIT_EMPLOYEE_FAIL, payload: err.message });
    })
    .finally(() => {
      dispatch({ type: EDIT_EMPLOYEE_RESOLVE });
    });
};

export const deleteEmployeeAction = employeeId => dispatch => {
  dispatch({ type: DELETE_EMPLOYEE_START });

  axiosWithAuth()
    .delete(`/api/providers/${employeeId}`)
    .then(res => {
      dispatch({ type: DELETE_EMPLOYEE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: DELETE_EMPLOYEE_FAIL, payload: err.message });
    })
    .finally(() => {
      dispatch({ type: DELETE_EMPLOYEE_RESOLVE });
    });
};
