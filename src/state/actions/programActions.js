import { axiosWithAuth } from '../../utils/axiosWithAuth';

// PROGRAM ACTION TYPES

export const GET_ALL_PROGRAM_START = 'GET_ALL_PROGRAM_START';
export const GET_ALL_PROGRAM_SUCCESS = 'GET_ALL_PROGRAM_SUCCESS';
export const GET_ALL_PROGRAM_FAIL = 'GET_ALL_PROGRAM_FAIL';
export const GET_ALL_PROGRAM_RESOLVE = 'GET_ALL_PROGRAM_RESOLVE';

export const GET_PROGRAM_START = 'GET_PROGRAM_START';
export const GET_PROGRAM_SUCCESS = 'GET_PROGRAM_SUCCESS';
export const GET_PROGRAM_FAIL = 'GET_PROGRAM_FAIL';
export const GET_PROGRAM_RESOLVE = 'GET_PROGRAM_RESOLVE';

export const ADD_PROGRAM_START = 'ADD_PROGRAM_START';
export const ADD_PROGRAM_SUCCESS = 'ADD_PROGRAM_SUCCESS';
export const ADD_PROGRAM_FAIL = 'ADD_PROGRAM_FAIL';
export const ADD_PROGRAM_RESOLVE = 'ADD_PROGRAM_RESOLVE';

export const EDIT_PROGRAM_START = 'EDIT_PROGRAM_START';
export const EDIT_PROGRAM_SUCCESS = 'EDIT_PROGRAM_SUCCESS';
export const EDIT_PROGRAM_FAIL = 'EDIT_PROGRAM_FAIL';
export const EDIT_PROGRAM_RESOLVE = 'EDIT_PROGRAM_RESOLVE';

export const DELETE_PROGRAM_START = 'DELETE_PROGRAM_START';
export const DELETE_PROGRAM_SUCCESS = 'DELETE_PROGRAM_SUCCESS';
export const DELETE_PROGRAM_FAIL = 'DELETE_PROGRAM_FAIL';
export const DELETE_PROGRAM_RESOLVE = 'DELETE_PROGRAM_RESOLVE';

// PROGRAMS ACTIONS

export const getAllProgramsAction = () => dispatch => {
  dispatch({ type: GET_ALL_PROGRAM_START });

  axiosWithAuth()
    .get(`/api/programs`)
    .then(res => {
      dispatch({ type: GET_ALL_PROGRAM_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_ALL_PROGRAM_FAIL, payload: err.message });
    })
    .finally(() => {
      dispatch({ type: GET_ALL_PROGRAM_RESOLVE });
    });
};

export const getProgramByIdAction = programId => dispatch => {
  dispatch({ type: GET_PROGRAM_START });

  axiosWithAuth()
    .get(`/api/programs/${programId}`)
    .then(res => {
      dispatch({ type: GET_PROGRAM_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_PROGRAM_FAIL, payload: err.message });
    })
    .finally(() => {
      dispatch({ type: GET_PROGRAM_RESOLVE });
    });
};

export const addProgramAction = programObj => dispatch => {
  dispatch({ type: ADD_PROGRAM_START });

  axiosWithAuth()
    .post(`/api/programs`, programObj)
    .then(res => {
      dispatch({ type: ADD_PROGRAM_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ADD_PROGRAM_FAIL, payload: err.message });
    })
    .finally(() => {
      dispatch({ type: ADD_PROGRAM_RESOLVE });
    });
};

export const editProgramAction = (programId, programObj) => dispatch => {
  dispatch({ type: EDIT_PROGRAM_START });

  axiosWithAuth()
    .put(`/api/programs/${programId}`, programObj)
    .then(res => {
      dispatch({ type: EDIT_PROGRAM_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: EDIT_PROGRAM_FAIL, payload: err.response.data });
    })
    .finally(() => {
      dispatch({ type: EDIT_PROGRAM_RESOLVE });
    });
};

export const deleteProgramAction = programId => dispatch => {
  dispatch({ type: DELETE_PROGRAM_START });

  axiosWithAuth()
    .delete(`/api/programs/${programId}`)
    .then(res => {
      dispatch({ type: DELETE_PROGRAM_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: DELETE_PROGRAM_FAIL, payload: err.message });
    })
    .finally(() => {
      dispatch({ type: DELETE_PROGRAM_RESOLVE });
    });
};
