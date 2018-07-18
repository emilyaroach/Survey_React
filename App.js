import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Welcome_Component from './app/containers/Container'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import rootReducer from './app/reducers/index.js'

let store = createStore(rootReducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Welcome_Component/>
      </Provider>
    );
  }
}
