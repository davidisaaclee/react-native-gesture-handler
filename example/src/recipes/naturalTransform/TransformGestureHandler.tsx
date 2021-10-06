/** NB: This only works on iOS. */
import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import * as Gestures from 'react-native-gesture-handler';
import {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
  runOnJS,
} from 'react-native-reanimated';
import { ReadonlyVec2, ReadonlyMat2d } from 'gl-matrix';

let __idCounter = 0;
function uniqueId(): string {
  return (__idCounter++).toString(10);
}

type SerializedTransform = {
  a: number;
  b: number;
  c: number;
  d: number;
  tx: number;
  ty: number;
};

interface TransformGestureHandlerEvent
  extends Gestures.GestureEvent<{
    transform: SerializedTransform;
  }> {}

function serializeMat2d(m: ReadonlyMat2d): SerializedTransform {
  return {
    a: m[0],
    b: m[1],
    c: m[2],
    d: m[3],
    tx: m[4],
    ty: m[5]
  };
}
function deserializeMat2d(m: SerializedTransform): ReadonlyMat2d {
  'worklet';
  return [m.a, m.b, m.c, m.d, m.tx, m.ty];
}

interface Props extends Omit<Gestures.TransformGestureHandlerProps, 'initialTransform'> {
  contentSize: ReadonlyVec2;
  initialTransform: ReadonlyMat2d;
  onTransformGestureEnded?: (transform: ReadonlyMat2d) => void;
  maxYTranslation?: number;
  children: (animatedTransformStyle: StyleProp<ViewStyle>) => JSX.Element;
}

interface Ref {
  getTransform(): ReadonlyMat2d;
  setTransform(mat2d: ReadonlyMat2d): void;
}

export default React.forwardRef<Ref, Props>(
  (
    {
      contentSize,
      initialTransform,
      maxYTranslation,
      onTransformGestureEnded = () => {},
      enabled = true,
      children,
      ...passedProps
    },
    forwardedRef,
  ) => {
    const [handlerId, setHandlerId] = React.useState(() => uniqueId());
    const transform = useSharedValue(serializeMat2d(initialTransform));

    const handler = useAnimatedGestureHandler<TransformGestureHandlerEvent>({
      onActive(event) {
        transform.value = event.transform;
      },
      onEnd() {
        runOnJS(onTransformGestureEnded)(deserializeMat2d(transform.value));
      },
    });

    React.useImperativeHandle(forwardedRef, () => ({
      getTransform() {
        return deserializeMat2d(transform.value);
      },
      setTransform(m: ReadonlyMat2d) {
        transform.value = serializeMat2d(m);
        setHandlerId(uniqueId());
      },
    }));

    const [contentWidth, contentHeight] = React.useMemo(
      () => [contentSize[0], contentSize[1]],
      [contentSize],
    );
    const animatedTransformStyle = useAnimatedStyle(() => {
      const m = transform.value;
      const ty =
        maxYTranslation != null && m.ty > maxYTranslation
          ? maxYTranslation
          : m.ty;
      return {
        transform: [
          { translateX: -contentWidth / 2 },
          { translateY: -contentHeight / 2 },
          {
            matrix: [
              m.a,
              m.b,
              0,
              0,
              m.c,
              m.d,
              0,
              0,
              0,
              0,
              1,
              0,
              m.tx,
              ty,
              0,
              1,
            ],
          },
          { translateX: contentWidth / 2 },
          { translateY: contentHeight / 2 },
        ],
      };
    }, [transform, contentWidth, contentHeight, maxYTranslation]);

    return (
      <Gestures.TransformGestureHandler
        enabled={enabled}
        id={handlerId}
        initialTransform={transform.value}
        onGestureEvent={handler}
        {...passedProps}
      >
        {children(animatedTransformStyle)}
      </Gestures.TransformGestureHandler>
    );
  },
);

