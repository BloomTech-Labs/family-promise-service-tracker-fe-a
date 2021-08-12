import { axiosWithAuth } from '../../utils/axiosWithAuth';

// SERVICES ACTION TYPES

export const GET_ALL_SERVICE_START = 'GET_ALL_SERVICE_START';
export const GET_ALL_SERVICE_SUCCESS = 'GET_ALL_SERVICE_SUCCESS';
export const GET_ALL_SERVICE_FAIL = 'GET_ALL_SERVICE_FAIL';
export const GET_ALL_SERVICE_RESOLVE = 'GET_ALL_SERVICE_RESOLVE';

export const GET_SERVICE_START = 'GET_SERVICE_START';
export const GET_SERVICE_SUCCESS = 'GET_SERVICE_SUCCESS';
export const GET_SERVICE_FAIL = 'GET_SERVICE_FAIL';
export const GET_SERVICE_RESOLVE = 'GET_SERVICE_RESOLVE';

export const ADD_SERVICE_START = 'ADD_SERVICE_START';
export const ADD_SERVICE_SUCCESS = 'ADD_SERVICE_SUCCESS';
export const ADD_SERVICE_FAIL = 'ADD_SERVICE_FAIL';
export const ADD_SERVICE_RESOLVE = 'ADD_SERVICE_RESOLVE';

export const EDIT_SERVICE_START = 'EDIT_SERVICE_START';
export const EDIT_SERVICE_SUCCESS = 'EDIT_SERVICE_SUCCESS';
export const EDIT_SERVICE_FAIL = 'EDIT_SERVICE_FAIL';
export const EDIT_SERVICE_RESOLVE = 'EDIT_SERVICE_RESOLVE';

export const DELETE_SERVICE_START = 'DELETE_SERVICE_START';
export const DELETE_SERVICE_SUCCESS = 'DELETE_SERVICE_SUCCESS';
export const DELETE_SERVICE_FAIL = 'DELETE_SERVICE_FAIL';
export const DELETE_SERVICE_RESOLVE = 'DELETE_SERVICE_RESOLVE';

export const GET_ALL_SERVICE_PROVIDERS_START =
  'GET_ALL_SERVICE_PROVIDERS_START';
export const GET_ALL_SERVICE_PROVIDERS_SUCCESS =
  'GET_ALL_SERVICE_PROVIDERS_SUCCESS';
export const GET_ALL_SERVICE_PROVIDERS_FAIL = 'GET_ALL_SERVICE_PROVIDERS_FAIL';
export const GET_ALL_SERVICE_PROVIDERS_RESOLVE =
  'GET_ALL_SERVICE_PROVIDERS_RESOLVE';

// SERVICES ACTIONS

export const getAllServicesAction = () => dispatch => {
  dispatch({ type: GET_ALL_SERVICE_START });

  axiosWithAuth()
    .get(`/api/service_entries`)
    .then(res => {
      dispatch({ type: GET_ALL_SERVICE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_ALL_SERVICE_FAIL, payload: err.message });
    })
    .finally(() => {
      dispatch({ type: GET_ALL_SERVICE_RESOLVE });
    });
};

export const getServiceByIdAction = serviceId => dispatch => {
  dispatch({ type: GET_SERVICE_START });

  axiosWithAuth()
    .get(`/api/service_entries/${serviceId}`)
    .then(res => {
      dispatch({ type: GET_SERVICE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_SERVICE_FAIL, payload: err.message });
    })
    .finally(() => {
      dispatch({ type: GET_SERVICE_RESOLVE });
    });
};

export const addServiceAction = serviceObj => dispatch => {
  dispatch({ type: ADD_SERVICE_START });
  console.log('serviceObj from addServiceAction', serviceObj);
  axiosWithAuth()
    .post(`/api/service_entries`, serviceObj)
    .then(res => {
      console.log('res from addServiceAction', res.data);
      dispatch({ type: ADD_SERVICE_SUCCESS, payload: res.data.newEntry });
    })
    .catch(err => {
      dispatch({ type: ADD_SERVICE_FAIL, payload: err.message });
    })
    .finally(() => {
      dispatch({ type: ADD_SERVICE_RESOLVE });
    });
};

export const editServiceAction = (serviceId, serviceObj) => dispatch => {
  dispatch({ type: EDIT_SERVICE_START });

  axiosWithAuth()
    .put(`/api/service_entries/${serviceId}`, serviceObj)
    .then(res => {
      dispatch({ type: EDIT_SERVICE_SUCCESS, payload: res.data.editedEntry });
    })
    .catch(err => {
      dispatch({ type: EDIT_SERVICE_FAIL, payload: err.message });
    })
    .finally(() => {
      dispatch({ type: EDIT_SERVICE_RESOLVE });
    });
};

export const deleteServiceAction = serviceId => dispatch => {
  dispatch({ type: DELETE_SERVICE_START });
  axiosWithAuth()
    .delete(`/api/service_entries/${serviceId}`)
    .then(res => {
      dispatch({ type: DELETE_SERVICE_SUCCESS, payload: serviceId });
    })
    .catch(err => {
      dispatch({ type: DELETE_SERVICE_FAIL, payload: err.message });
    })
    .finally(() => {
      dispatch({ type: DELETE_SERVICE_RESOLVE });
    });
};
export const getServiceProviders = () => dispatch => {
  dispatch({ type: GET_ALL_SERVICE_PROVIDERS_START });

  axiosWithAuth()
    .get(`api/providers`)
    .then(res => {
      console.log('PROVIDERS', res.data);
      dispatch({ type: GET_ALL_SERVICE_PROVIDERS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_ALL_SERVICE_PROVIDERS_FAIL, payload: err.message });
    })
    .finally(() => {
      dispatch({ type: GET_ALL_SERVICE_PROVIDERS_RESOLVE });
    });
};
