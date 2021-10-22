export const TOGGLE_EDITING = 'TOGGLE_EDITING';
export const USER_SELECTED = 'USER_SELECTED';

export function toggleEditing(services) {
  return { type: 'TOGGLE_EDITING', payload: services };
}
//The action creator generates a new action once a click has been made.
export function selectUser(user) {
  return {
    type: 'USER_SELECTED',
    payload: user,
  };
}
