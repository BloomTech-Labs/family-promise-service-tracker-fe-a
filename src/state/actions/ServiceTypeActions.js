import axios from 'axios';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { DELETE_EMPLOYEE_FAIL } from './employeeActions';
import { EDIT_PROGRAM_SUCCESS } from './programActions';
import { GET_SERVICE_FAIL } from './serviceActions';

export const GET_ALL_SERVICE_TYPE_START = 'GET_ALL_SERVICE_TYPE_START';
export const GET_ALL_SERVICE_TYPE_SUCCESS = 'GET_ALL_SERVICE_TYPE_SUCCESS';
export const GET_ALL_SERVICE_TYPE_FAIL = 'GET_ALL_SERVICE_TYPE_FAIL';
export const GET_ALL_SERVICE_TYPE_RESOLVE = 'GET_ALL_SERVICE_TYPE_RESOLVE';

export const GET_SERVICE_TYPE_START = 'GET_SERVICE_TYPE_START';
export const GET_SERVICE_TYPE_SUCCESS = 'GET_SERVICE_TYPE_SUCCESS';
export const GET_SERVICE_TYPE_FAIL = 'GET_SERVICE_TYPE_FAIL';
export const GET_SERVICE_TYPE_RESOLVE = 'GET_SERVICE_TYPE_RESOLVE';

export const ADD_SERVICE_TYPE_START = 'ADD_SERVICE_TYPE_START';
export const ADD_SERVICE_TYPE_SUCCESS = 'ADD_SERVICE_TYPE_SUCCESS';
export const ADD_SERVICE_TYPE_FAIL = 'ADD_SERVICE_TYPE_FAIL';
export const ADD_SERVICE_TYPE_RESOLVE = 'ADD_SERVICE_TYPE_RESOLVE';

export const EDIT_SERVICE_TYPE_START = 'EDIT_SERVICE_TYPE_START';
export const EDIT_SERVICE_TYPE_SUCCESS = 'EDIT_SERVICE_TYPE_SUCCESS';
export const EDIT_SERVICE_TYPE_FAIL = 'EDIT_SERVICE_TYPE_FAIL';
export const EDIT_SERVICE_TYPE_RESOLVE = 'EDIT_SERVICE_TYPE_RESOLVE';

export const DELETE_SERVICE_TYPE_START = 'DELETE_SERVICE_TYPE_START';
export const DELETE_SERVICE_TYPE_SUCCESS = 'DELETE_SERVICE_TYPE_SUCCESS';
export const DELETE_SERVICE_TYPE_FAIL = 'DELETE_SERVICE_TYPE_FAIL';
export const DELETE_SERVICE_TYPE_RESOLVE = 'DELETE_SERVICE_TYPE_RESOLVE';

export const getAllServiceTypes = () => dispatch => {
  dispatch({ type: GET_ALL_SERVICE_TYPE_START });

  axiosWithAuth()
    .get('service type endpoint')
    .then(res => {
      dispatch({ type: GET_ALL_SERVICE_TYPE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_ALL_SERVICE_TYPE_FAIL, payload: err.message });
    })
    .finally(() => {
      dispatch({ type: GET_ALL_SERVICE_TYPE_RESOLVE });
    });
};

export const getServiceTypeByIdAction = typeId => dispatch => {
  dispatch({ type: GET_SERVICE_TYPE_START });

  axiosWithAuth()
    .get(`service type endpoint ${typeId}`)
    .then(res => {
      dispatch({ type: GET_SERVICE_TYPE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_SERVICE_FAIL, payload: err.message });
    })
    .finally(() => {
      dispatch({ type: GET_SERVICE_TYPE_RESOLVE });
    });
};

export const editServiceType = (typeId, typeObj) => dispatch => {
  dispatch({ type: EDIT_SERVICE_TYPE_START });

  axiosWithAuth()
    .put('service type endpoint', typeObj)
    .then(res => {
      dispatch({ type: EDIT_PROGRAM_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: EDIT_SERVICE_TYPE_FAIL, payload: err.message });
    })
    .finally(() => {
      dispatch({ type: EDIT_SERVICE_TYPE_RESOLVE });
    });
};

export const deleteServiceType = typeId => dispatch => {
  dispatch({ type: DELETE_SERVICE_TYPE_START });

  axiosWithAuth()
    .delete(`service type endpoint/${typeId}`)
    .then(res => {
      dispatch({ type: DELETE_SERVICE_TYPE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: DELETE_SERVICE_TYPE_FAIL, payload: err.message });
    })
    .finally(() => {
      dispatch({ type: DELETE_SERVICE_TYPE_RESOLVE });
    });
};
