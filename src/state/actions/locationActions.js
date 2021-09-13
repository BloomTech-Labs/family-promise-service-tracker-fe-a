import { axiosWithAuth } from '../../utils/axiosWithAuth';

export const GET_ALL_LOCATION_START = 'GET_ALL_LOCATION_START';
export const GET_ALL_LOCATION_SUCCESS = 'GET_ALL_LOCATION_SUCCESS';
export const GET_ALL_LOCATION_FAIL = 'GET_ALL_LOCATION_FAIL';
export const GET_ALL_LOCATION_RESOLVE = 'GET_ALL_LOCATION_RESOLVE';

export const GET_LOCATION_START = 'GET_LOCATION_START';
export const GET_LOCATION_SUCCESS = 'GET_LOCATION_SUCCESS';
export const GET_LOCATION_FAIL = 'GET_LOCATION_FAIL';
export const GET_LOCATION_RESOLVE = 'GET_LOCATION_RESOLVE';

export const ADD_LOCATION_START = 'ADD_LOCATION_START';
export const ADD_LOCATION_SUCCESS = 'ADD_LOCATION_SUCCESS';
export const ADD_LOCATION_FAIL = 'ADD_LOCATION_FAIL';
export const ADD_LOCATION_RESOLVE = 'ADD_LOCATION_RESOLVE';

export const EDIT_LOCATION_START = 'EDIT_LOCATION_START';
export const EDIT_LOCATION_SUCCESS = 'EDIT_LOCATION_SUCCESS';
export const EDIT_LOCATION_FAIL = 'EDIT_LOCATION_FAIL';
export const EDIT_LOCATION_RESOLVE = 'EDIT_LOCATION_RESOLVE';

export const DELETE_LOCATION_START = 'DELETE_LOCATION_START';
export const DELETE_LOCATION_SUCCESS = 'DELETE_LOCATION_SUCCESS';
export const DELETE_LOCATION_FAIL = 'DELETE_LOCATION_FAIL';
export const DELETE_LOCATION_RESOLVE = 'DELETE_LOCATION_RESOLVE';

export const getAllLocationAction = () => dispatch => {
  dispatch({ type: GET_ALL_LOCATION_START });

  axiosWithAuth()
    .get('/api/locations')
    .then(res => {
      dispatch({ type: GET_ALL_LOCATION_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_ALL_LOCATION_FAIL, payload: err.message });
    })
    .finally(() => {
      dispatch({ type: GET_ALL_LOCATION_RESOLVE });
    });
};

export const getLocationByIdAction = () => locationId => dispatch => {
  dispatch({ type: GET_LOCATION_START });

  axiosWithAuth()
    .get(`/api/locations/${locationId}`)
    .then(res => {
      dispatch({ type: GET_LOCATION_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_LOCATION_FAIL, payload: err.message });
    })
    .finally(() => {
      dispatch({ type: GET_LOCATION_RESOLVE });
    });
};

export const addLocationAction = locationObj => dispatch => {
  dispatch({ type: ADD_LOCATION_START });

  axiosWithAuth()
    .post(`/api/locations`, locationObj)
    .then(res => {
      dispatch({ type: ADD_LOCATION_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ADD_LOCATION_FAIL, payload: err.message });
    })
    .finally(() => {
      dispatch({ type: ADD_LOCATION_RESOLVE });
    });
};

export const editLocationAction = (locationId, locationObj) => dispatch => {
  dispatch({ type: EDIT_LOCATION_START });

  axiosWithAuth()
    .put(`/api/locations/${locationId}`, locationObj)
    .then(res => {
      dispatch({ type: EDIT_LOCATION_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: EDIT_LOCATION_FAIL, payload: err.message });
    })
    .finally(() => {
      dispatch({ type: EDIT_LOCATION_RESOLVE });
    });
};

export const deleteLocationAction = locationId => dispatch => {
  dispatch({ type: DELETE_LOCATION_START });

  axiosWithAuth()
    .delete(`/api/locations/${locationId}`)
    .then(res => {
      dispatch({ type: DELETE_LOCATION_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: DELETE_LOCATION_FAIL, payload: err.message });
    })
    .finally(() => {
      dispatch({ type: DELETE_LOCATION_RESOLVE });
    });
};
