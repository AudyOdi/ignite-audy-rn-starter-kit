// @flow
import React, {Component} from 'react';
import {BackHandler} from 'react-native';
import {Provider} from 'react-redux';

import MainRoute from './routes/MainRoute';

import createDataStore from './createDataStore';

const store = createDataStore();

export default class App extends Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this._onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this._onBackPress);
  }

  render() {
    return (
      <Provider store={store}>
        <MainRoute />
      </Provider>
    );
  }

  _onBackPress() {
    let {dispatch} = store;
    let {navigation} = store.getState();
    if (navigation.index > 0) {
      let {key} = navigation;
      dispatch({
        type: 'Navigation/BACK',
        key
      });
    } else {
      BackHandler.exitApp();
      return false;
    }
    return true;
  }
}
