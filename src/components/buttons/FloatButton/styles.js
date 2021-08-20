import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity`
  height: 60px;
  width: 60px;
  border-radius: 30px;
  position: absolute;
  bottom: 80px;
  right: 16px;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.accent};
`;
