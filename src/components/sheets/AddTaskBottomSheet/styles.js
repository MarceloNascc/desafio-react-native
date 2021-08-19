import styled from 'styled-components/native';
import {BaseText} from '../../../global.style';

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const PickerContainer = styled.View`
  margin: 20px 0px;
  border-bottom-width: 1px;
  border-bottom-color: ${props => props.theme.grayText};
`;

export const Label = styled(BaseText)`
  color: ${props => props.theme.grayText};
  font-size: 12px;
`;
