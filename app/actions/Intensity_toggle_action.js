import * as actionType from './ActionType';

export const intensity_toggle_on = () => ({
  type: actionType.INTENSITY_TOGGLE_ON,
  payload: true
});

export const intensity_toggle_off = () => ({
  type: actionType.INTENSITY_TOGGLE_OFF,
  payload: false
});
