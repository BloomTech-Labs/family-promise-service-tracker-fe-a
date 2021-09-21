import { axiosWithAuth } from '../../utils/axiosWithAuth';

export const GET_ALL_ETHNICITIES_START = 'GET_ALL_ETHNICITIES_START';
export const GET_ALL_ETHNICITIES_SUCCESS = 'GET_ALL_ETHNICITIES_SUCCESS';
export const GET_ALL_ETHNICITIES_FAIL = 'GET_ALL_ETHNICITIES_FAIL';
export const GET_ALL_ETHNICITIES_RESOLVE = 'GET_ALL_ETHNICITIES_RESOLVE';

export const getAllEthnicityAction = () => dispatch => {
  dispatch({ type: GET_ALL_ETHNICITIES_START });

  axiosWithAuth()
    .get('/api/ethnicity')
    .then(res => {
      dispatch({ type: GET_ALL_ETHNICITIES_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_ALL_ETHNICITIES_FAIL, payload: err.message });
    })
    .finally(() => {
      dispatch({ type: GET_ALL_ETHNICITIES_RESOLVE });
    });
};
