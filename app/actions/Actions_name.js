import * as actionType from './ActionType';

export const changeName = (name) => ({
  type: actionType.CHANGE_NAME,
  payload: name
});
