import { axiosWithAuth } from '../../utils/axiosWithAuth';

export const GET_ALL_GENDERS_START = 'GET_ALL_GENDERS_START';
export const GET_ALL_GENDERS_SUCCESS = 'GET_ALL_GENDERS_SUCCESS';
export const GET_ALL_GENDERS_FAIL = 'GET_ALL_GENDERS_FAIL';
export const GET_ALL_GENDERS_RESOLVE = 'GET_ALL_GENDERS_RESOLVE';

export const getAllGenderAction = () => dispatch => {
  dispatch({ type: GET_ALL_GENDERS_START });

  axiosWithAuth()
    .get('/api/gender')
    .then(res => {
      dispatch({ type: GET_ALL_GENDERS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_ALL_GENDERS_FAIL, payload: err.message });
    })
    .finally(() => {
      dispatch({ type: GET_ALL_GENDERS_RESOLVE });
    });
};
