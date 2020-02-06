/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Router from './Router';
import {name as appName} from './app.json';
import React from 'react';



//REDUX
import {Provider } from 'react-redux';
import configureStore from './Redux/store'
const store = configureStore()







  const Redux = () =>
  <Provider store={store}>
      <Router/>
  </Provider>
  

AppRegistry.registerComponent(appName, () => Redux);
 