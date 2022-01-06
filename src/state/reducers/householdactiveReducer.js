// this function contains the service object

export const activeService = (state = {}, action) => {
  switch (action.type) {
    case 'USER_SELECTED':
      return action.payload;
    default:
      return state;
  }
};
