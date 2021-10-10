import { axiosWithAuth } from '../../utils/axiosWithAuth';

export const TOGGLE_EDITING = 'TOGGLE_EDITING';

export function toggleEditing() {
  return { type: TOGGLE_EDITING };
}
