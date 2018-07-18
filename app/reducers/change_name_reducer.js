import * as actionType from '../actions/ActionType';

const initialState = {
  user_name: 'No User'
}

const changeNameReducer = (state = initialState, action) => {
    let newState;
    switch(action.type){
      case actionType.CHANGE_NAME:
        return newState = {
          user_name: action.payload
        }
      default:
        return state
    }
}

export default changeNameReducer;
