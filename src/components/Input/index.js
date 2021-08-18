import React, {useRef} from 'react';

import {Animated} from 'react-native';
import {InputContainer, Label, TextInput} from './styles';

const Input = ({
  label,
  value,
  setValue,
  extraInputProps,
  extraComponent,
  error,
}) => {
  const labelPosition = useRef(new Animated.Value(0)).current;

  function handleFocus() {
    Animated.timing(labelPosition, {
      toValue: 100,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }

  function handleBlur() {
    if (value.length === 0) {
      Animated.timing(labelPosition, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  }

  return (
    <InputContainer error={error}>
      <Label
        error={error}
        style={{
          top: labelPosition.interpolate({
            inputRange: [0, 100],
            outputRange: [10, -15],
          }),
        }}>
        {label}
      </Label>

      <TextInput
        {...extraInputProps}
        value={value}
        onChangeText={text => setValue(text)}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />

      {extraComponent}
    </InputContainer>
  );
};

export default Input;
