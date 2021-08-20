import styled from 'styled-components/native';

import {BaseText} from '../../../global.style';

export const ButtonContainer = styled.TouchableOpacity`
  width: 100%;
  padding: 16px 0px;
  background-color: ${props => props.theme.accent};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const ButtonText = styled(BaseText)`
  font-size: 13px;
  text-align: center;
  color: ${props => props.theme.lightText};
`;

export const LoadContainer = styled.View`
  height: 100%;
  padding: 0px 10px;
  position: absolute;
  right: 4px;
  border-left-width: 1px;
  border-left-color: ${props => props.theme.background};
`;
