import createHandler from './createHandler';
import {
  BaseGestureHandlerProps,
  baseGestureHandlerProps,
} from './gestureHandlerCommon';

export type TransformGestureHandlerPayload = {
  transform: {
    a: number;
    b: number;
    c: number;
    d: number;
    tx: number;
    ty: number;
  };
  transformFromLastChange: {
    a: number;
    b: number;
    c: number;
    d: number;
    tx: number;
    ty: number;
  };
};

export interface TransformGestureHandlerProps
  extends BaseGestureHandlerProps<TransformGestureHandlerPayload> {
  initialTransform?: {
    a: number;
    b: number;
    c: number;
    d: number;
    tx: number;
    ty: number;
  };
  maxYTranslation?: number;
}

export type TransformGestureHandler = typeof TransformGestureHandler;
export const TransformGestureHandler = createHandler<
  TransformGestureHandlerProps,
  TransformGestureHandlerPayload
>({
  name: 'TransformGestureHandler',
  allowedProps: [...baseGestureHandlerProps, 'initialTransform'] as const,
  config: {},
});

