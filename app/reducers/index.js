import {combineReducers} from 'redux';
import counterReducer from './counterReducer';
import change_name_reducer from './change_name_reducer'

const rootReducer = combineReducers({
  counterReducer,
  change_name_reducer
});

export default rootReducer;
