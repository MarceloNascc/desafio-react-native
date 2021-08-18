import React, {useRef, forwardRef, useEffect} from 'react';

import {
  TouchableWithoutFeedback,
  Animated,
  Dimensions,
  PanResponder,
} from 'react-native';

import {
  Backdrop,
  BottomSheetContainer,
  Sheet,
  DashTouchArea,
  Dash,
} from './styles';

const screenHeight = Dimensions.get('window').height;

const BaseBottomSheet = ({children}, sheetRef) => {
  const sheetAnimation = useRef(new Animated.Value(0)).current;
  const panResponderDash = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureSate) =>
        sheetAnimation.setValue(100 - gestureSate.dy * 0.1),
      onPanResponderRelease: (_, gestureSate) => {
        if (100 - gestureSate.dy * 0.1 <= 60) {
          sheetRef.current.hideSheet();
        } else {
          Animated.timing(sheetAnimation, {
            toValue: 100,
            useNativeDriver: true,
            duration: 800,
          }).start();
        }
      },
    }),
  ).current;

  useEffect(() => {
    if (sheetRef.current) {
      sheetRef.current.openSheet = openSheet;
      sheetRef.current.hideSheet = hideSheet;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sheetRef]);

  function openSheet() {
    Animated.timing(sheetAnimation, {
      toValue: 100,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }

  function hideSheet() {
    Animated.timing(sheetAnimation, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }

  return (
    <BottomSheetContainer
      ref={sheetRef}
      style={{
        transform: [
          {
            translateY: sheetAnimation.interpolate({
              inputRange: [0, 1],
              outputRange: [screenHeight, 0],
              extrapolate: 'clamp',
            }),
          },
        ],
      }}>
      <TouchableWithoutFeedback onPress={hideSheet}>
        <Backdrop
          style={{
            opacity: sheetAnimation.interpolate({
              inputRange: [0, 100],
              outputRange: [0, 1],
              extrapolate: 'clamp',
            }),
          }}
        />
      </TouchableWithoutFeedback>

      <Sheet
        style={{
          transform: [
            {
              translateY: sheetAnimation.interpolate({
                inputRange: [0, 100],
                outputRange: [screenHeight, 0],
                extrapolate: 'clamp',
              }),
            },
          ],
        }}>
        <DashTouchArea {...panResponderDash.panHandlers}>
          <Dash />
        </DashTouchArea>
        {children}
      </Sheet>
    </BottomSheetContainer>
  );
};

export default forwardRef(BaseBottomSheet);
