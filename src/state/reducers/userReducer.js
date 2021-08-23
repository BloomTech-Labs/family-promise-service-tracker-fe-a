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
    employee_id: '',
    firstName: '',
    lastName: '',
    role: '',
    updated_at: '',
    programs: [],
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
          avatarUrl: action.payload.provider_avatar_url,
          created_at: action.payload.created_at,
          email: action.payload.provider_email,
          phone: action.payload.provider_phone_number,
          employee_id: action.payload.employee_id,
          firstName: action.payload.provider_first_name,
          lastName: action.payload.provider_last_name,
          role: action.payload.provider_role_id,
          updated_at: action.payload.updated_at,
          programs: action.payload.programs,
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
          avatarUrl: action.payload.provider_avatar_url,
          created_at: action.payload.created_at,
          email: action.payload.provider_email,
          phone: action.payload.provider_phone_number,
          employee_id: action.payload.employee_id,
          firstName: action.payload.provider_first_name,
          lastName: action.payload.provider_last_name,
          role: action.payload.provider_role_id,
          updated_at: action.payload.updated_at,
          programs: action.payload.programs,
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
