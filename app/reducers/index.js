import {combineReducers} from 'redux';
import counterReducer from './counterReducer';
import intensity_toggle from './intensity_toggle_reducer'

const rootReducer = combineReducers({
  intensity_toggle,
  counterReducer
});

export default rootReducer;
