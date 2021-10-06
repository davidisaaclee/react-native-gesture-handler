import React from 'react';
import { View } from 'react-native';
import Animated from 'react-native-reanimated';
import TransformGestureHandler from './TransformGestureHandler';
import {mat2d} from 'gl-matrix';

export default function NaturalTransform() {
  return <View style={{flex: 1}}>
    <TransformGestureHandler
      contentSize={[100, 100]}
      initialTransform={mat2d.create()}
      simultaneousHandlers={[]}
    >
      {transformStyle => (
        <Animated.View style={{flex: 1}}>
          <Animated.View style={[{ width: 100, height: 100, backgroundColor: 'lightblue' }, transformStyle]} />
        </Animated.View>
      )}
    </TransformGestureHandler>
  </View>
}
