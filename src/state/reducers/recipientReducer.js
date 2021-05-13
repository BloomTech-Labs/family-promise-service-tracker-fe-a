import {
  GET_ALL_RECIPIENT_START,
  GET_ALL_RECIPIENT_SUCCESS,
  GET_ALL_RECIPIENT_FAIL,
  GET_ALL_RECIPIENT_RESOLVE,
  GET_RECIPIENT_START,
  GET_RECIPIENT_SUCCESS,
  GET_RECIPIENT_FAIL,
  GET_RECIPIENT_RESOLVE,
  ADD_RECIPIENT_START,
  ADD_RECIPIENT_SUCCESS,
  ADD_RECIPIENT_FAIL,
  ADD_RECIPIENT_RESOLVE,
  EDIT_RECIPIENT_START,
  EDIT_RECIPIENT_SUCCESS,
  EDIT_RECIPIENT_FAIL,
  EDIT_RECIPIENT_RESOLVE,
  DELETE_RECIPIENT_START,
  DELETE_RECIPIENT_SUCCESS,
  DELETE_RECIPIENT_FAIL,
  DELETE_RECIPIENT_RESOLVE,
} from '../actions/recipientActions';

// Initial Recipient State

export const initialRecipientState = {
  recipients: [],
  recipient: null,
  status: 'Resolved',
  change: '',
  error: '',
};

export const recipientReducer = (state = initialRecipientState, action) => {
  switch (action.type) {
    // Get All Recipients
    case GET_ALL_RECIPIENT_START:
      return {
        ...state,
        status: 'Pending...',
      };
    case GET_ALL_RECIPIENT_SUCCESS:
      // console.log(action.payload, 'payload inside reducer');
      return {
        ...state.recipient,
        recipients: action.payload,
        status: 'Success',
      };
    case GET_ALL_RECIPIENT_FAIL:
      return {
        ...state,
        status: 'Failed',
        error: action.payload,
      };
    case GET_ALL_RECIPIENT_RESOLVE:
      // console.log(state.recipient, 'state inside reducer');
      return {
        ...state,
        status: 'Resolved',
      };

    // Get Recipient By Id
    case GET_RECIPIENT_START:
      return {
        ...state,
        status: 'Pending...',
      };
    case GET_RECIPIENT_SUCCESS:
      return {
        ...state,
        recipient: action.payload,
        status: 'Success',
      };
    case GET_RECIPIENT_FAIL:
      return {
        ...state,
        status: 'Failed',
        error: action.payload,
      };
    case GET_RECIPIENT_RESOLVE:
      return {
        ...state,
        status: 'Resolved',
      };

    // Add Recipient
    case ADD_RECIPIENT_START:
      return {
        ...state,
        status: 'Pending...',
      };
    case ADD_RECIPIENT_SUCCESS:
      return {
        ...state,
        status: 'Success',
        change: 'added',
      };
    case ADD_RECIPIENT_FAIL:
      return {
        ...state,
        status: 'Failed',
        error: action.payload,
      };
    case ADD_RECIPIENT_RESOLVE:
      return {
        ...state,
        status: 'Resolved',
        change: '',
      };

    // Edit Recipient
    case EDIT_RECIPIENT_START:
      return {
        ...state,
        status: 'Pending...',
      };
    case EDIT_RECIPIENT_SUCCESS:
      return {
        ...state,
        status: 'Success',
        change: 'edited',
      };
    case EDIT_RECIPIENT_FAIL:
      return {
        ...state,
        status: 'Failed',
        error: action.payload,
      };
    case EDIT_RECIPIENT_RESOLVE:
      return {
        ...state,
        status: 'Resolved',
        change: '',
      };

    // Delete Recipient
    case DELETE_RECIPIENT_START:
      return {
        ...state,
        status: 'Pending...',
      };
    case DELETE_RECIPIENT_SUCCESS:
      return {
        ...state,
        status: 'Success',
        change: 'deleted',
      };
    case DELETE_RECIPIENT_FAIL:
      return {
        ...state,
        status: 'Failed',
        error: action.payload,
      };
    case DELETE_RECIPIENT_RESOLVE:
      return {
        ...state,
        status: 'Resolved',
        change: '',
      };

    // Default
    default:
      return state;
  }
};
