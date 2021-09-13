import { axiosWithAuth } from '../../utils/axiosWithAuth';

export const GET_ALL_STATUSES_START = 'GET_ALL_STATUSES_START';
export const GET_ALL_STATUSES_SUCCESS = 'GET_ALL_STATUSES_SUCCESS';
export const GET_ALL_STATUSES_FAIL = 'GET_ALL_STATUSES_FAIL';
export const GET_ALL_STATUSES_RESOLVE = 'GET_ALL_STATUSES_RESOLVE';

export const getAllStatusAction = () => dispatch => {
  dispatch({ type: GET_ALL_STATUSES_START });

  axiosWithAuth()
    .get('/api/statuses')
    .then(res => {
      dispatch({ type: GET_ALL_STATUSES_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_ALL_STATUSES_FAIL, payload: err.message });
    })
    .finally(() => {
      dispatch({ type: GET_ALL_STATUSES_RESOLVE });
    });
};
