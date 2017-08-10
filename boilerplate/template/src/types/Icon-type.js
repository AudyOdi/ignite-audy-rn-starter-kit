// @flow

import {StyleSheet} from 'react-native';

export type Icon = {
  name: string,
  color?: string,
  size?: number,
  type?:
    | 'material-community'
    | 'simple-line-icon'
    | 'zocial'
    | 'font-awesome'
    | 'octicon'
    | 'ionicon'
    | 'foundation'
    | 'evilicon'
    | 'entypo',
  style?: StyleType
};
