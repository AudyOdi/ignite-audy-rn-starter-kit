// @flow

import React from 'react';
import {StatusBar} from 'react-native';
import {connect} from 'react-redux';
import {addNavigationHelpers} from 'react-navigation';

import {View} from 'components/coreUIList';
import MainRouteComponent from './components/MainRouteComponent';

import type {Dispatch} from 'types/Dispatch';
import type {RootState} from 'types/RootState';
import type {
  NavigationState,
  NavigationObject
} from 'data/navigation/Navigation-type';

type Props = {
  dispatch: Dispatch,
  navigation: NavigationState
};

export function MainRoute(props: Props) {
  let {navigation, dispatch} = props;

  let navigationObject: NavigationObject = addNavigationHelpers({
    dispatch,
    state: navigation,
    index: navigation.index
  });

  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle="light-content" />
      <MainRouteComponent navigation={navigationObject} />
    </View>
  );
}

function mapStateToProps(state: RootState) {
  return {
    navigation: state.navigation
  };
}

export default connect(mapStateToProps)(MainRoute);
