import styled from 'styled-components/native';

import {BaseText} from '../../../global.style';

export const ButtonContainer = styled.TouchableOpacity`
  width: 100%;
  padding: 16px 0px;
  background-color: ${props => props.theme.accent};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled(BaseText)`
  font-size: 13px;
  text-align: center;
  color: ${props => props.theme.lightText};
`;
