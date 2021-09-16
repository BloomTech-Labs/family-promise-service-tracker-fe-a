import {
  GET_ALL_SERVICE_RATINGS_START,
  GET_ALL_SERVICE_RATINGS_SUCCESS,
  GET_ALL_SERVICE_RATINGS_FAIL,
  GET_ALL_SERVICE_RATINGS_RESOLVE,
} from '../actions/serviceRatingActions';

export const initialServiceRatingState = {
  serviceRatings: [],
  status: 'Resolved',
  error: '',
};

export const serviceRatingReducer = (
  state = initialServiceRatingState,
  action
) => {
  switch (action.type) {
    case GET_ALL_SERVICE_RATINGS_START:
      return {
        ...state,
        status: 'Pending...',
      };
    case GET_ALL_SERVICE_RATINGS_SUCCESS:
      return {
        ...state,
        serviceRatings: action.payload,
        status: 'Success',
      };
    case GET_ALL_SERVICE_RATINGS_FAIL:
      return {
        ...state,
        error: action.payload,
        status: 'Failed',
      };
    case GET_ALL_SERVICE_RATINGS_RESOLVE:
      return {
        ...state,
        status: 'Resolved',
      };
    default:
      return state;
  }
};
