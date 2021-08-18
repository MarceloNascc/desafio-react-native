import styled from 'styled-components/native';

export const AppSafeContainer = styled.SafeAreaView`
  background-color: ${props => props.theme.background};
  flex: 1;
`;

export const ScreenContainer = styled.View`
  background-color: ${props => props.theme.background};
  flex: 1;
  flex-grow: 1;
  padding: 6px ${props => (!props.withoutHorizontalPadding ? '16px' : '0px')}
    0px;
`;

const poppins = {
  bold: 'Poppins-Bold',
  light: 'Poppins-Light',
  regular: 'Poppins-Regular',
};

export const BaseText = styled.Text`
  font-family: ${({fontWeight = 'regular'}) => poppins[fontWeight]};
`;

export const Title = styled.Text`
  font-size: 25px;
  color: ${props =>
    !props.isWhite ? props.theme.darkText : props.theme.lightText};
  font-family: 'Poppins-Bold';
  text-align: center;
`;
