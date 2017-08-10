// @flow
import {StackNavigator} from 'react-navigation';

import ExampleScene from '../scenes/ExampleScene';

import type {NavigationState} from 'data/navigation/Navigation-type';
import type {Dispatch} from 'types/Dispatch';

type NavigationArgs = {
  dispatch: Dispatch,
  state: NavigationState,
  index: number,
  goBack: () => void
};

// all the navigation routes listed here
const MainNavigator = StackNavigator(
  {
    ExampleScene: {screen: ExampleScene}
  },
  {
    navigationOptions: {}
  }
);

export default MainNavigator;
