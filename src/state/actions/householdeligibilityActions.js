import { axiosWithAuth } from '../../utils/axiosWithAuth';

export const DISPLAY_ALL_LOCATION = 'DISPLAY_ALL_LOCATION';
export const DO_NOT_DISPLAY_ALL_LOCATION = 'DO_NOT_DISPLAY__ALL_LOCATION';

export const DISPLAY_PREVENTION_LOCATION = 'DISPLAY_PREVENTION_LOCATION';
export const DO_NOT_DISPLAY_PREVENTION_LOCATION =
  'DO_NOT_DISPLAY_PREVENTION_LOCATION';

export const DISPLAY_SHELTER_SUPPORT_LOCATION =
  'DISPLAY_SHELETER_SUPPORT_LOCATION';
export const DO_NOT_DISPLAY_SHELTER_SUPPORT_LOCATION =
  'DO_NOT_DISPLAY_SHELETER_SUPPORT_LOCATION';

export const DISPLAY_AFTER_CARE_LOCATION = 'DISPLAY_AFTER_CARE_LOCATION';
export const DO_NOT_DISPLAY_AFTER_CARE_LOCATION =
  'DO_NOT_DISPLAY_AFTER_CARE_LOCATION';

// each actions are contributing to a boolean statement for reducers.
export const displayLocation = display => {
  return { type: DISPLAY_ALL_LOCATION, payload: display };
};

export const displayPrevention = display => {
  return { type: DISPLAY_PREVENTION_LOCATION, payload: display };
};

export const displaySheltersupport = display => {
  return { type: DISPLAY_SHELTER_SUPPORT_LOCATION, payload: display };
};
export const displayAftercare = display => {
  return { type: DISPLAY_AFTER_CARE_LOCATION, payload: display };
};
