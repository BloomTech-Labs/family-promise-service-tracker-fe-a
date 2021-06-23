import { axiosWithAuth } from '../../utils/axiosWithAuth';

// PROGRAM ACTION TYPES

export const GET_ALL_CATEGORY_START = 'GET_ALL_CATEGORY_START';
export const GET_ALL_CATEGORY_SUCCESS = 'GET_ALL_CATEGORY_SUCCESS';
export const GET_ALL_CATEGORY_FAIL = 'GET_ALL_CATEGORY_FAIL';
export const GET_ALL_CATEGORY_RESOLVE = 'GET_ALL_CATEGORY_RESOLVE';

export const GET_CATEGORY_START = 'GET_CATEGORY_START';
export const GET_CATEGORY_SUCCESS = 'GET_CATEGORY_SUCCESS';
export const GET_CATEGORY_FAIL = 'GET_CATEGORY_FAIL';
export const GET_CATEGORY_RESOLVE = 'GET_CATEGORY_RESOLVE';

export const ADD_CATEGORY_START = 'ADD_CATEGORY_START';
export const ADD_CATEGORY_SUCCESS = 'ADD_CATEGORY_SUCCESS';
export const ADD_CATEGORY_FAIL = 'ADD_CATEGORY_FAIL';
export const ADD_CATEGORY_RESOLVE = 'ADD_CATEGORY_RESOLVE';

export const EDIT_CATEGORY_START = 'EDIT_CATEGORY_START';
export const EDIT_CATEGORY_SUCCESS = 'EDIT_CATEGORY_SUCCESS';
export const EDIT_CATEGORY_FAIL = 'EDIT_CATEGORY_FAIL';
export const EDIT_CATEGORY_RESOLVE = 'EDIT_CATEGORY_RESOLVE';

export const DELETE_CATEGORY_START = 'DELETE_CATEGORY_START';
export const DELETE_CATEGORY_SUCCESS = 'DELETE_CATEGORY_SUCCESS';
export const DELETE_CATEGORY_FAIL = 'DELETE_CATEGORY_FAIL';
export const DELETE_CATEGORY_RESOLVE = 'DELETE_CATEGORY_RESOLVE';

// CATEGORYS ACTIONS

export const getAllCategoriesAction = () => dispatch => {
  dispatch({ type: GET_ALL_CATEGORY_START });

  axiosWithAuth()
    .get(`/api/categories`)
    .then(res => {
      console.log('HERE', res.data);
      dispatch({ type: GET_ALL_CATEGORY_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_ALL_CATEGORY_FAIL, payload: err.message });
    })
    .finally(() => {
      dispatch({ type: GET_ALL_CATEGORY_RESOLVE });
    });
};

export const getCategoryByIdAction = categoryId => dispatch => {
  dispatch({ type: GET_CATEGORY_START });

  axiosWithAuth()
    .get(`/api/categories/${categoryId}`)
    .then(res => {
      dispatch({ type: GET_CATEGORY_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_CATEGORY_FAIL, payload: err.message });
    })
    .finally(() => {
      dispatch({ type: GET_CATEGORY_RESOLVE });
    });
};

export const addCategoryAction = categoryObj => dispatch => {
  dispatch({ type: ADD_CATEGORY_START });

  axiosWithAuth()
    .post(`/api/categories`, categoryObj)
    .then(res => {
      dispatch({ type: ADD_CATEGORY_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ADD_CATEGORY_FAIL, payload: err.message });
    })
    .finally(() => {
      dispatch({ type: ADD_CATEGORY_RESOLVE });
    });
};

export const editCategoryAction = (categoryId, categoryObj) => dispatch => {
  dispatch({ type: EDIT_CATEGORY_START });

  axiosWithAuth()
    .put(`/api/categories/${categoryId}`, categoryObj)
    .then(res => {
      dispatch({ type: EDIT_CATEGORY_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: EDIT_CATEGORY_FAIL, payload: err.response.data });
    })
    .finally(() => {
      dispatch({ type: EDIT_CATEGORY_RESOLVE });
    });
};

export const deleteCategoryAction = categoryId => dispatch => {
  dispatch({ type: DELETE_CATEGORY_START });

  axiosWithAuth()
    .delete(`/api/categories/${categoryId}`)
    .then(res => {
      dispatch({ type: DELETE_CATEGORY_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: DELETE_CATEGORY_FAIL, payload: err.message });
    })
    .finally(() => {
      dispatch({ type: DELETE_CATEGORY_RESOLVE });
    });
};
