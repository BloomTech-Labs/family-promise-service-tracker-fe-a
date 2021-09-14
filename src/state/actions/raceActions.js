import { axiosWithAuth } from '../../utils/axiosWithAuth';

export const GET_ALL_RACES_START = 'GET_ALL_RACES_START';
export const GET_ALL_RACES_SUCCESS = 'GET_ALL_RACES_SUCCESS';
export const GET_ALL_RACES_FAIL = 'GET_ALL_RACES_FAIL';
export const GET_ALL_RACES_RESOLVE = 'GET_ALL_RACES_RESOLVE';

export const getAllRaceAction = () => dispatch => {
  dispatch({ type: GET_ALL_RACES_START });

  axiosWithAuth()
    .get('/api/race')
    .then(res => {
      dispatch({ type: GET_ALL_RACES_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_ALL_RACES_FAIL, payload: err.message });
    })
    .finally(() => {
      dispatch({ type: GET_ALL_RACES_RESOLVE });
    });
};
