// @flow

import React from 'react';
import {View} from 'react-native';

type Props = {[key: string]: mixed};

export default function ViewComponent(props: Props) {
  return <View {...props} />;
}
