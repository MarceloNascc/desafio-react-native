import styled from 'styled-components/native';
import {BaseText} from '../../global.style';

export const TaskContainer = styled.View`
  margin: 13px 0px;
`;

export const TaskTitle = styled(BaseText)`
  font-size: 15px;
`;

const priorityToThemeColor = {
  Alta: 'danger',
  Baixa: 'blue',
  Normal: 'yellow',
};

export const PriorityContainer = styled.View`
  align-items: center;
  justify-content: center;
  height: 24px;
  width: 94px;
  background-color: ${props =>
    props.theme[priorityToThemeColor[props.priority]]};
  border-radius: 18px;
`;

export const PriorityText = styled(BaseText)`
  font-size: 12px;
  color: ${props => props.theme.lightText};
`;
