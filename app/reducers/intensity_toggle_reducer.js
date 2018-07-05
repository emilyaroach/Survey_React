import * as actionType from '../actions/ActionType';

const initialState = {
  toggle: true
}

const intensity_toggle = (state = initialState, action) => {
    let newState;
    switch(action.type){
      case actionType.INTENSITY_TOGGLE_ON:
        return newState = {
          ...state,
          toggle: action.payload
        };
      case actionType.INTENSITY_TOGGLE_OFF:
        return newState = {
          ...state,
          toggle: action.payload
        };
      default:
        return state
    }
}

export default intensity_toggle;
