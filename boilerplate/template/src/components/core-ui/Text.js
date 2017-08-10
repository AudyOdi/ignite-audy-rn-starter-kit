// @flow

import React from 'react';
import {Text} from 'react-native';

type Props = {[key: string]: mixed};

export default function TextComponent(props: Props) {
  return <Text {...props} />;
}
