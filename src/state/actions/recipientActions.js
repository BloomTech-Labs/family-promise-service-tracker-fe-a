import { axiosWithAuth } from '../../utils/axiosWithAuth';

// RECIPIENT ACTION TYPES

export const GET_ALL_RECIPIENT_START = 'GET_ALL_RECIPIENT_START';
export const GET_ALL_RECIPIENT_SUCCESS = 'GET_ALL_RECIPIENT_SUCCESS';
export const GET_ALL_RECIPIENT_FAIL = 'GET_ALL_RECIPIENT_FAIL';
export const GET_ALL_RECIPIENT_RESOLVE = 'GET_ALL_RECIPIENT_RESOLVE';

export const GET_RECIPIENT_START = 'GET_RECIPIENT_START';
export const GET_RECIPIENT_SUCCESS = 'GET_RECIPIENT_SUCCESS';
export const GET_RECIPIENT_FAIL = 'GET_RECIPIENT_FAIL';
export const GET_RECIPIENT_RESOLVE = 'GET_RECIPIENT_RESOLVE';

export const ADD_RECIPIENT_START = 'ADD_RECIPIENT_START';
export const ADD_RECIPIENT_SUCCESS = 'ADD_RECIPIENT_SUCCESS';
export const ADD_RECIPIENT_FAIL = 'ADD_RECIPIENT_FAIL';
export const ADD_RECIPIENT_RESOLVE = 'ADD_RECIPIENT_RESOLVE';

export const EDIT_RECIPIENT_START = 'EDIT_RECIPIENT_START';
export const EDIT_RECIPIENT_SUCCESS = 'EDIT_RECIPIENT_SUCCESS';
export const EDIT_RECIPIENT_FAIL = 'EDIT_RECIPIENT_FAIL';
export const EDIT_RECIPIENT_RESOLVE = 'EDIT_RECIPIENT_RESOLVE';

export const DELETE_RECIPIENT_START = 'DELETE_RECIPIENT_START';
export const DELETE_RECIPIENT_SUCCESS = 'DELETE_RECIPIENT_SUCCESS';
export const DELETE_RECIPIENT_FAIL = 'DELETE_RECIPIENT_FAIL';
export const DELETE_RECIPIENT_RESOLVE = 'DELETE_RECIPIENT_RESOLVE';

// RECIPIENT ACTIONS

export const getAllRecipientAction = () => dispatch => {
  dispatch({ type: GET_ALL_RECIPIENT_START });

  axiosWithAuth()
    .get(`/api/recipients`)
    .then(res => {
      const data = res.data.map(recipient => {
        const index = recipient.recipient_date_of_birth.indexOf('T');
        console.log(recipient);
        const temp = recipient.recipient_date_of_birth.substring(0, index);
        return { ...recipient, recipient_date_of_birth: temp };
      });

      dispatch({ type: GET_ALL_RECIPIENT_SUCCESS, payload: data });
    })
    .catch(err => {
      dispatch({ type: GET_ALL_RECIPIENT_FAIL, payload: err.message });
    })
    .finally(() => {
      dispatch({ type: GET_ALL_RECIPIENT_RESOLVE });
    });
};

export const getRecipientByIdAction = recipientId => dispatch => {
  dispatch({ type: GET_RECIPIENT_START });

  axiosWithAuth()
    .get(`/api/recipients/${recipientId}`)
    .then(res => {
      dispatch({ type: GET_RECIPIENT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_RECIPIENT_FAIL, payload: err.message });
    })
    .finally(() => {
      dispatch({ type: GET_RECIPIENT_RESOLVE });
    });
};

export const addRecipientAction = recipientObj => dispatch => {
  dispatch({ type: ADD_RECIPIENT_START });

  axiosWithAuth()
    .post(`/api/recipients`, recipientObj)
    .then(res => {
      dispatch({ type: ADD_RECIPIENT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ADD_RECIPIENT_FAIL, payload: err.message });
    })
    .finally(() => {
      dispatch({ type: ADD_RECIPIENT_RESOLVE });
    });
};

export const editRecipientAction = (recipientId, recipientObj) => dispatch => {
  dispatch({ type: EDIT_RECIPIENT_START });

  axiosWithAuth()
    .put(`/api/recipients/${recipientId}`, recipientObj)
    .then(res => {
      dispatch({ type: EDIT_RECIPIENT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: EDIT_RECIPIENT_FAIL, payload: err.message });
    })
    .finally(() => {
      dispatch({ type: EDIT_RECIPIENT_RESOLVE });
    });
};

export const deleteRecipientAction = recipientId => dispatch => {
  dispatch({ type: DELETE_RECIPIENT_START });

  axiosWithAuth()
    .delete(`/api/recipients/${recipientId}`)
    .then(res => {
      dispatch({ type: DELETE_RECIPIENT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: DELETE_RECIPIENT_FAIL, payload: err.message });
    })
    .finally(() => {
      dispatch({ type: DELETE_RECIPIENT_RESOLVE });
    });
};
