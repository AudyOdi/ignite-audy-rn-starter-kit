// @flow

import {Platform} from 'react-native';

export const statusBarHeight = Platform.OS === 'ios' ? 10 : 0;
