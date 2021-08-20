import styled from 'styled-components/native';
import {Animated} from 'react-native';

export const InputContainer = styled.View`
  height: 36px;
  width: 100%;
  margin: 20px 0px;
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: ${props =>
    !props.error ? props.theme.grayText : props.theme.danger};
`;

export const Label = styled(Animated.Text)`
  color: ${props => (!props.error ? props.theme.grayText : props.theme.danger)};
  font-family: 'Poppins-Bold';
  font-size: 12px;
  position: absolute;
`;

export const TextInput = styled.TextInput.attrs(props => ({
  selectionColor: props.theme.accent,
}))`
  flex: 1;
  font-family: 'Poppins-Regular';
  padding: 0px;
  color: ${props => props.theme.grayText};
`;
