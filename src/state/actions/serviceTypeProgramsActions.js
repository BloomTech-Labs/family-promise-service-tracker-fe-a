import { axiosWithAuth } from '../../utils/axiosWithAuth';

export const GET_ALL_SERVICE_TYPE_PROGRAMS_START =
  'GET_ALL_SERVICE_TYPE_PROGRAMS_START';
export const GET_ALL_SERVICE_TYPE_PROGRAMS_SUCCESS =
  'GET_ALL_SERVICE_TYPE_PROGRAMS_SUCCESS';
export const GET_ALL_SERVICE_TYPE_PROGRAMS_FAIL =
  'GET_ALL_SERVICE_TYPE_PROGRAMS_FAIL';
export const GET_ALL_SERVICE_TYPE_PROGRAMS_RESOLVE =
  'GET_ALL_SERVICE_TYPE_PROGRAMS_RESOLVE';

export const GET_SERVICE_TYPE_PROGRAMS_START =
  'GET_SERVICE_TYPE_PROGRAMS_START';
export const GET_SERVICE_TYPE_PROGRAMS_SUCCESS =
  'GET_SERVICE_TYPE_PROGRAMS_SUCCESS';
export const GET_SERVICE_TYPE_PROGRAMS_FAIL = 'GET_SERVICE_TYPE_PROGRAMS_FAIL';
export const GET_SERVICE_TYPE_PROGRAMS_RESOLVE =
  'GET_SERVICE_TYPE_PROGRAMS_RESOLVE';

export const ADD_SERVICE_TYPE_PROGRAMS_START =
  'ADD_SERVICE_TYPE_PROGRAMS_START';
export const ADD_SERVICE_TYPE_PROGRAMS_SUCCESS =
  'ADD_SERVICE_TYPE_PROGRAMS_SUCCESS';
export const ADD_SERVICE_TYPE_PROGRAMS_FAIL = 'ADD_SERVICE_TYPE_PROGRAMS_FAIL';
export const ADD_SERVICE_TYPE_PROGRAMS_RESOLVE =
  'ADD_SERVICE_TYPE_PROGRAMS_RESOLVE';

export const EDIT_SERVICE_TYPE_PROGRAMS_START =
  'EDIT_SERVICE_TYPE_PROGRAMS_START';
export const EDIT_SERVICE_TYPE_PROGRAMS_SUCCESS =
  'EDIT_SERVICE_TYPE_PROGRAMS_SUCCESS';
export const EDIT_SERVICE_TYPE_PROGRAMS_FAIL =
  'EDIT_SERVICE_TYPE_PROGRAMS_FAIL';
export const EDIT_SERVICE_TYPE_PROGRAMS_RESOLVE =
  'EDIT_SERVICE_TYPE_PROGRAMS_RESOLVE';

export const DELETE_SERVICE_TYPE_PROGRAMS_START =
  'DELETE_SERVICE_TYPE_PROGRAMS_START';
export const DELETE_SERVICE_TYPE_PROGRAMS_SUCCESS =
  'DELETE_SERVICE_TYPE_PROGRAMS_SUCCESS';
export const DELETE_SERVICE_TYPE_PROGRAMS_FAIL =
  'DELETE_SERVICE_TYPE_PROGRAMS_FAIL';
export const DELETE_SERVICE_TYPE_PROGRAMS_RESOLVE =
  'DELETE_SERVICE_TYPE_PROGRAMS_RESOLVE';

export const getAllServiceTypeProgramsAction = () => dispatch => {
  dispatch({ type: GET_ALL_SERVICE_TYPE_PROGRAMS_START });

  axiosWithAuth()
    .get('/api/serviceTypePrograms')
    .then(res => {
      dispatch({
        type: GET_ALL_SERVICE_TYPE_PROGRAMS_SUCCESS,
        payload: res.data,
      });
      console.log(res.data);
    })
    .catch(err => {
      dispatch({
        type: GET_ALL_SERVICE_TYPE_PROGRAMS_FAIL,
        payload: err.message,
      });
    })
    .finally(() => {
      dispatch({ type: GET_ALL_SERVICE_TYPE_PROGRAMS_RESOLVE });
    });
};

export const getServiceTypeProgramsByIdAction = typeId => dispatch => {
  dispatch({ type: GET_SERVICE_TYPE_PROGRAMS_START });

  axiosWithAuth()
    .get(`/api/serviceTypePrograms/${typeId}`)
    .then(res => {
      dispatch({ type: GET_SERVICE_TYPE_PROGRAMS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_SERVICE_TYPE_PROGRAMS_FAIL, payload: err.message });
    })
    .finally(() => {
      dispatch({ type: GET_SERVICE_TYPE_PROGRAMS_RESOLVE });
    });
};

export const editServiceTypeProgramsAction = (typeId, typeObj) => dispatch => {
  dispatch({ type: EDIT_SERVICE_TYPE_PROGRAMS_START });

  axiosWithAuth()
    .put(`/api/serviceTypePrograms/${typeId}`, typeObj)
    .then(res => {
      dispatch({
        type: EDIT_SERVICE_TYPE_PROGRAMS_SUCCESS,
        payload: res.data.service_type_programs,
      });
    })
    .catch(err => {
      dispatch({ type: EDIT_SERVICE_TYPE_PROGRAMS_FAIL, payload: err.message });
    })
    .finally(() => {
      dispatch({ type: EDIT_SERVICE_TYPE_PROGRAMS_RESOLVE });
    });
};
export const addServiceTypeProgramsAction = typeObj => dispatch => {
  dispatch({ type: ADD_SERVICE_TYPE_PROGRAMS_START });

  axiosWithAuth()
    .post(`/api/serviceTypePrograms/`, typeObj)
    .then(res => {
      dispatch({
        type: ADD_SERVICE_TYPE_PROGRAMS_SUCCESS,
        payload: res.data.service_type_programs,
      });
    })
    .catch(err => {
      dispatch({ type: ADD_SERVICE_TYPE_PROGRAMS_FAIL, payload: err.message });
    })
    .finally(() => {
      dispatch({ type: ADD_SERVICE_TYPE_PROGRAMS_RESOLVE });
    });
};

export const deleteServiceTypeProgramsAction = typeId => dispatch => {
  dispatch({ type: DELETE_SERVICE_TYPE_PROGRAMS_START });

  axiosWithAuth()
    .delete(`/api/serviceTypePrograms/${typeId}`)
    .then(res => {
      // backend is returning id of deleted object in a message string - this is a
      // brittle method to get that id but will work without making backend changes
      const id = parseInt(res.data.message.match(/\d+/)[0]);
      dispatch({ type: DELETE_SERVICE_TYPE_PROGRAMS_SUCCESS, payload: id });
    })
    .catch(err => {
      dispatch({
        type: DELETE_SERVICE_TYPE_PROGRAMS_FAIL,
        payload: err.message,
      });
    })
    .finally(() => {
      dispatch({ type: DELETE_SERVICE_TYPE_PROGRAMS_RESOLVE });
    });
};
