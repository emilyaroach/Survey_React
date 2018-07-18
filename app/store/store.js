import {createStore} from 'redux'
import rootReducer from './app/reducers/index.js'

let store = createStore(rootReducer);
