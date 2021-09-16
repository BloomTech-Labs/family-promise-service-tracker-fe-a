import { axiosWithAuth } from '../../utils/axiosWithAuth';

export const GET_ALL_SERVICE_RATINGS_START = 'GET_ALL_SERVICE_RATINGS_START';
export const GET_ALL_SERVICE_RATINGS_SUCCESS =
  'GET_ALL_SERVICE_RATINGS_SUCCESS';
export const GET_ALL_SERVICE_RATINGS_FAIL = 'GET_ALL_SERVICE_RATINGS_FAIL';
export const GET_ALL_SERVICE_RATINGS_RESOLVE =
  'GET_ALL_SERVICE_RATINGS_RESOLVE';

export const getAllServiceRatingAction = () => dispatch => {
  dispatch({ type: GET_ALL_SERVICE_RATINGS_START });

  axiosWithAuth()
    .get('/api/serviceRating')
    .then(res => {
      dispatch({ type: GET_ALL_SERVICE_RATINGS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_ALL_SERVICE_RATINGS_FAIL, payload: err.message });
    })
    .finally(() => {
      dispatch({ type: GET_ALL_SERVICE_RATINGS_RESOLVE });
    });
};
