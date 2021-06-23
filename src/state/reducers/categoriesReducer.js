import {
  GET_ALL_CATEGORY_START,
  GET_ALL_CATEGORY_SUCCESS,
  GET_ALL_CATEGORY_FAIL,
  GET_ALL_CATEGORY_RESOLVE,
  GET_CATEGORY_START,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_FAIL,
  GET_CATEGORY_RESOLVE,
  ADD_CATEGORY_START,
  ADD_CATEGORY_SUCCESS,
  ADD_CATEGORY_FAIL,
  ADD_CATEGORY_RESOLVE,
  EDIT_CATEGORY_START,
  EDIT_CATEGORY_SUCCESS,
  EDIT_CATEGORY_FAIL,
  EDIT_CATEGORY_RESOLVE,
  DELETE_CATEGORY_START,
  DELETE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_FAIL,
  DELETE_CATEGORY_RESOLVE,
} from '../actions/categoryActions';

// Initial Category State

export const initialCategoryState = {
  categories: [],
  category: null,
  status: 'Resolved',
  change: '',
  error: '',
};

export const categoryReducer = (state = initialCategoryState, action) => {
  switch (action.type) {
    //Get All Categories
    case GET_ALL_CATEGORY_START:
      return {
        ...state,
        status: 'Pending...',
      };
    case GET_ALL_CATEGORY_SUCCESS:
      return {
        ...state,
        categories: action.payload,
        status: 'Success',
      };
    case GET_ALL_CATEGORY_FAIL:
      return {
        ...state,
        status: 'Failed',
        error: action.payload,
      };
    case GET_ALL_CATEGORY_RESOLVE:
      return {
        ...state,
        status: 'Resolved',
      };
    // Get Category By Id
    case GET_CATEGORY_START:
      return {
        ...state,
        status: 'Pending...',
      };
    case GET_CATEGORY_SUCCESS:
      return {
        ...state,
        category: action.payload,
        status: 'Success',
      };
    case GET_CATEGORY_FAIL:
      return {
        ...state,
        status: 'Failed',
        error: action.payload,
      };
    case GET_CATEGORY_RESOLVE:
      return {
        ...state,
        status: 'Resolved',
      };
    //Add Category
    case ADD_CATEGORY_START:
      return {
        ...state,
        status: 'Pending...',
      };
    case ADD_CATEGORY_SUCCESS:
      return {
        ...state,
        status: 'Success',
        change: 'added',
      };
    case ADD_CATEGORY_FAIL:
      return {
        ...state,
        status: 'Failed',
        error: action.payload,
      };
    case ADD_CATEGORY_RESOLVE:
      return {
        ...state,
        status: 'Resolved',
        change: '',
      };
    //Edit Category
    case EDIT_CATEGORY_START:
      return {
        ...state,
        status: 'Pending...',
      };
    case EDIT_CATEGORY_SUCCESS:
      return {
        ...state,
        status: 'Success',
        change: 'edited',
      };
    case EDIT_CATEGORY_FAIL:
      return {
        ...state,
        status: 'Failed',
        error: action.payload,
      };
    case EDIT_CATEGORY_RESOLVE:
      return {
        ...state,
        status: 'Resolved',
        change: '',
      };
    // Delete Category
    case DELETE_CATEGORY_START:
      return {
        ...state,
        status: 'Pending...',
      };
    case DELETE_CATEGORY_SUCCESS:
      return {
        ...state,
        status: 'Success',
        change: 'deleted',
      };
    case DELETE_CATEGORY_FAIL:
      return {
        ...state,
        status: 'Failed',
        error: action.payload,
      };
    case DELETE_CATEGORY_RESOLVE:
      return {
        ...state,
        status: 'Resolved',
        change: '',
      };
    //Default
    default:
      return state;
  }
};
