import {
  GET_USER_START,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  GET_USER_RESOLVE,
  EDIT_USER_START,
  EDIT_USER_SUCCESS,
  EDIT_USER_FAIL,
  EDIT_USER_RESOLVE,
} from '../actions/userActions';

// Initial User State

export const initialUserState = {
  user: {
    avatarUrl: '',
    created_at: '',
    email: '',
    id: '',
    firstName: '',
    lastName: '',
    role: '',
    updated_at: '',
  },
  status: 'Resolved',
  error: '',
};

export const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case GET_USER_START:
      return {
        ...state,
        status: 'Pending...',
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        user: {
          avatarUrl: action.payload.avatarUrl,
          created_at: action.payload.created_at,
          email: action.payload.email,
          id: action.payload.id,
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          role: action.payload.role,
          updated_at: action.payload.updated_at,
        },
        status: 'Success!',
        error: '',
      };
    case GET_USER_FAIL:
      return {
        ...state,
        status: 'Failed',
        error: action.payload,
      };
    case GET_USER_RESOLVE:
      return {
        ...state,
        status: 'Resolved',
      };
    case EDIT_USER_START:
      return {
        ...state,
        status: 'Pending...',
      };
    case EDIT_USER_SUCCESS:
      return {
        ...state,
        user: {
          avatarUrl: action.payload.avatarUrl,
          created_at: action.payload.created_at,
          email: action.payload.email,
          id: action.payload.id,
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          role: action.payload.role,
          updated_at: action.payload.updated_at,
        },
        status: 'Success!',
        error: '',
      };
    case EDIT_USER_FAIL:
      return {
        ...state,
        status: 'Failed',
        error: action.payload,
      };
    case EDIT_USER_RESOLVE:
      return {
        ...state,
        status: 'Resolved',
      };
    default:
      return state;
  }
};
