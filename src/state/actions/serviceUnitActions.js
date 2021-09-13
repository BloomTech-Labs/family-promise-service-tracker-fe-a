import { axiosWithAuth } from '../../utils/axiosWithAuth';

export const GET_ALL_SERVICE_UNITS_START = 'GET_ALL_SERVICE_UNITS_START';
export const GET_ALL_SERVICE_UNITS_SUCCESS = 'GET_ALL_SERVICE_UNITS_SUCCESS';
export const GET_ALL_SERVICE_UNITS_FAIL = 'GET_ALL_SERVICE_UNITS_FAIL';
export const GET_ALL_SERVICE_UNITS_RESOLVE = 'GET_ALL_SERVICE_UNITS_RESOLVE';

export const getAllServiceUnitAction = () => dispatch => {
  dispatch({ type: GET_ALL_SERVICE_UNITS_START });

  axiosWithAuth()
    .get('/api/serviceUnits')
    .then(res => {
      dispatch({ type: GET_ALL_SERVICE_UNITS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_ALL_SERVICE_UNITS_FAIL, payload: err.message });
    })
    .finally(() => {
      dispatch({ type: GET_ALL_SERVICE_UNITS_RESOLVE });
    });
};
