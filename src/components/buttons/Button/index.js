import React from 'react';

import {ButtonContainer, ButtonText} from './styles';

const Button = ({action, text, extraContainerStyle}) => {
  return (
    <ButtonContainer style={extraContainerStyle} onPress={action}>
      <ButtonText>{text}</ButtonText>
    </ButtonContainer>
  );
};

export default Button;
