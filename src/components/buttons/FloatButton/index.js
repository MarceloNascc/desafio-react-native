import React from 'react';

import {ButtonContainer} from './styles';

const FloatButton = ({action, children, extraContainerStyle}) => {
  return (
    <ButtonContainer style={extraContainerStyle} onPress={action}>
      {children}
    </ButtonContainer>
  );
};

export default FloatButton;
