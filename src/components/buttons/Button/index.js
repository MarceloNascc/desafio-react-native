import React from 'react';

import {ActivityIndicator} from 'react-native';

import {ButtonContainer, ButtonText, LoadContainer} from './styles';
import theme from '../../../theme';

const Button = ({action, text, extraContainerStyle, loading}) => {
  return (
    <ButtonContainer style={extraContainerStyle} onPress={action}>
      <ButtonText>{text}</ButtonText>

      {loading ? (
        <LoadContainer>
          <ActivityIndicator size={20} color={theme.background} />
        </LoadContainer>
      ) : null}
    </ButtonContainer>
  );
};

export default Button;
