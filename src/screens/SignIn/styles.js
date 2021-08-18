import styled from 'styled-components/native';
import {BaseText} from '../../global.style';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const Text = styled(BaseText)`
  font-size: 12px;
  align-self: center;
  color: ${props => props.theme.grayText};
`;

export const Icon = styled(AntDesign)`
  position: absolute;
  left: 11px;
  top: 15px;
`;
