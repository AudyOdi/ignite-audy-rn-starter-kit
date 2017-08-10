// @flow
import {createStore, combineReducers, applyMiddleware} from 'redux';

import navigationReducer from 'data/navigation/navigationReducer';

let app = combineReducers({
  navigation: navigationReducer
});

let createDataStore = () => {
  let store = createStore(app);
  return store;
};

export default createDataStore;
