import React from 'react';

import {ButtonContainer} from './styles';

const FloatButton = ({disabled, action, children, extraContainerStyle}) => {
  return (
    <ButtonContainer
      disabled={disabled}
      style={extraContainerStyle}
      onPress={action}>
      {children}
    </ButtonContainer>
  );
};

export default FloatButton;
