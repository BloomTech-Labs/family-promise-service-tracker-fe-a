import { axiosWithAuth } from '../../utils/axiosWithAuth';

// HOUSEHOLD ACTION TYPES

export const GET_ALL_HOUSEHOLD_START = 'GET_ALL_HOUSEHOLD_START';
export const GET_ALL_HOUSEHOLD_SUCCESS = 'GET_ALL_HOUSEHOLD_SUCCESS';
export const GET_ALL_HOUSEHOLD_FAIL = 'GET_ALL_HOUSEHOLD_FAIL';
export const GET_ALL_HOUSEHOLD_RESOLVE = 'GET_ALL_HOUSEHOLD_RESOLVE';

export const GET_HOUSEHOLD_START = 'GET_HOUSEHOLD_START';
export const GET_HOUSEHOLD_SUCCESS = 'GET_HOUSEHOLD_SUCCESS';
export const GET_HOUSEHOLD_FAIL = 'GET_HOUSEHOLD_FAIL';
export const GET_HOUSEHOLD_RESOLVE = 'GET_HOUSEHOLD_RESOLVE';

export const ADD_HOUSEHOLD_START = 'ADD_HOUSEHOLD_START';
export const ADD_HOUSEHOLD_SUCCESS = 'ADD_HOUSEHOLD_SUCCESS';
export const ADD_HOUSEHOLD_FAIL = 'ADD_HOUSEHOLD_FAIL';
export const ADD_HOUSEHOLD_RESOLVE = 'ADD_HOUSEHOLD_RESOLVE';

export const EDIT_HOUSEHOLD_START = 'EDIT_HOUSEHOLD_START';
export const EDIT_HOUSEHOLD_SUCCESS = 'EDIT_HOUSEHOLD_SUCCESS';
export const EDIT_HOUSEHOLD_FAIL = 'EDIT_HOUSEHOLD_FAIL';
export const EDIT_HOUSEHOLD_RESOLVE = 'EDIT_HOUSEHOLD_RESOLVE';

export const DELETE_HOUSEHOLD_START = 'DELETE_HOUSEHOLD_START';
export const DELETE_HOUSEHOLD_SUCCESS = 'DELETE_HOUSEHOLD_START';
export const DELETE_HOUSEHOLD_FAIL = 'DELETE_HOUSEHOLD_START';
export const DELETE_HOUSEHOLD_RESOLVE = 'DELETE_HOUSEHOLD_START';

// HOUSEHOLD ACTIONS

export const getAllHouseholdAction = () => dispatch => {
  dispatch({ type: GET_ALL_HOUSEHOLD_START });

  axiosWithAuth()
    .get(`/api/households`)
    .then(res => {
      dispatch({ type: GET_ALL_HOUSEHOLD_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_ALL_HOUSEHOLD_FAIL, payload: err.message });
    })
    .finally(() => {
      dispatch({ type: GET_ALL_HOUSEHOLD_RESOLVE });
    });
};

export const getHouseholdByIdAction = householdId => dispatch => {
  dispatch({ type: GET_HOUSEHOLD_START });

  axiosWithAuth()
    .get(`/api/household/${householdId}`)
    .then(res => {
      dispatch({ type: GET_HOUSEHOLD_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_HOUSEHOLD_FAIL, payload: err.message });
    })
    .finally(() => {
      dispatch({ type: GET_HOUSEHOLD_RESOLVE });
    });
};

export const addHouseholdAction = householdObj => dispatch => {
  dispatch({ type: ADD_HOUSEHOLD_START });

  axiosWithAuth()
    .post(`/api/household`, householdObj)
    .then(res => {
      dispatch({ type: ADD_HOUSEHOLD_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ADD_HOUSEHOLD_FAIL, payload: err.message });
    })
    .finally(() => {
      dispatch({ type: ADD_HOUSEHOLD_RESOLVE });
    });
};

export const editHouseholdAction = (householdId, householdObj) => dispatch => {
  dispatch({ type: EDIT_HOUSEHOLD_START });

  axiosWithAuth()
    .put(`/api/household/${householdId}`, householdObj)
    .then(res => {
      dispatch({ type: EDIT_HOUSEHOLD_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: EDIT_HOUSEHOLD_FAIL, payload: err.message });
    })
    .finally(() => {
      dispatch({ type: EDIT_HOUSEHOLD_RESOLVE });
    });
};

export const deleteHouseholdAction = householdId => dispatch => {
  dispatch({ type: DELETE_HOUSEHOLD_START });

  axiosWithAuth()
    .delete(`/api/household/${householdId}`)
    .then(res => {
      dispatch({ type: DELETE_HOUSEHOLD_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: DELETE_HOUSEHOLD_FAIL, payload: err.message });
    })
    .finally(() => {
      dispatch({ type: DELETE_HOUSEHOLD_RESOLVE });
    });
};
