import { axiosWithAuth } from '../../utils/axiosWithAuth';

export const GET_ALL_SERVICE_TYPES_START = 'GET_ALL_SERVICE_TYPES_START';
export const GET_ALL_SERVICE_TYPES_SUCCESS = 'GET_ALL_SERVICE_TYPES_SUCCESS';
export const GET_ALL_SERVICE_TYPES_FAIL = 'GET_ALL_SERVICE_TYPES_FAIL';
export const GET_ALL_SERVICE_TYPES_RESOLVE = 'GET_ALL_SERVICE_TYPES_RESOLVE';

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

export const getAllServiceTypesAction = () => dispatch => {
  dispatch({ type: GET_ALL_SERVICE_TYPES_START });

  axiosWithAuth()
    .get('/api/service_types')
    .then(res => {
      dispatch({ type: GET_ALL_SERVICE_TYPES_SUCCESS, payload: res.data });
      console.log(res.data);
    })
    .catch(err => {
      dispatch({ type: GET_ALL_SERVICE_TYPES_FAIL, payload: err.message });
    })
    .finally(() => {
      dispatch({ type: GET_ALL_SERVICE_TYPES_RESOLVE });
    });
};

export const getServiceTypeByIdAction = typeId => dispatch => {
  dispatch({ type: GET_SERVICE_TYPE_START });

  axiosWithAuth()
    .get(`/api/service_type/${typeId}`)
    .then(res => {
      dispatch({ type: GET_SERVICE_TYPE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_SERVICE_TYPE_FAIL, payload: err.message });
    })
    .finally(() => {
      dispatch({ type: GET_SERVICE_TYPE_RESOLVE });
    });
};

export const editServiceTypeAction = (typeId, typeObj) => dispatch => {
  dispatch({ type: EDIT_SERVICE_TYPE_START });

  axiosWithAuth()
    .put(`/api/service_type/${typeId}`, typeObj)
    .then(res => {
      dispatch({
        type: EDIT_SERVICE_TYPE_SUCCESS,
        payload: res.data.service_type,
      });
    })
    .catch(err => {
      dispatch({ type: EDIT_SERVICE_TYPE_FAIL, payload: err.message });
    })
    .finally(() => {
      dispatch({ type: EDIT_SERVICE_TYPE_RESOLVE });
    });
};
export const addServiceTypeAction = typeObj => dispatch => {
  dispatch({ type: ADD_SERVICE_TYPE_START });

  axiosWithAuth()
    .post(`/api/service_types/`, typeObj)
    .then(res => {
      dispatch({
        type: ADD_SERVICE_TYPE_SUCCESS,
        payload: res.data.service_type,
      });
    })
    .catch(err => {
      dispatch({ type: ADD_SERVICE_TYPE_FAIL, payload: err.message });
    })
    .finally(() => {
      dispatch({ type: ADD_SERVICE_TYPE_RESOLVE });
    });
};

export const deleteServiceTypeAction = typeId => dispatch => {
  dispatch({ type: DELETE_SERVICE_TYPE_START });

  axiosWithAuth()
    .delete(`/api/service_type/${typeId}`)
    .then(res => {
      // backend is returning id of deleted object in a message string - this is a
      // brittle method to get that id but will work without making backend changes
      const id = parseInt(res.data.message.match(/\d+/)[0]);
      dispatch({ type: DELETE_SERVICE_TYPE_SUCCESS, payload: id });
    })
    .catch(err => {
      dispatch({ type: DELETE_SERVICE_TYPE_FAIL, payload: err.message });
    })
    .finally(() => {
      dispatch({ type: DELETE_SERVICE_TYPE_RESOLVE });
    });
};
