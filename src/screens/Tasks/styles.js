import styled from 'styled-components/native';

export const Image = styled.Image`
  height: 74px;
  width: 74px;
  border-radius: 40px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0px 60px;
  width: 100%;
  padding: 0px 16px;
`;

export const Content = styled.View`
  flex: 1;
  background-color: ${props => props.theme.background};
  padding: 40px 16px 0px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;
