import {Animated} from 'react-native';
import styled from 'styled-components/native';

export const BottomSheetContainer = styled(Animated.View)`
  width: 100%;
  height: 100%;
  position: absolute;
  justify-content: flex-end;
`;

export const Backdrop = styled(Animated.View)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #0f0f0f60;
`;

export const Sheet = styled(Animated.View)`
  width: 100%;
  height: 80%;
  padding: 16px 16px 0px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: ${props => props.theme.background};
`;

export const Dash = styled.View`
  height: 4px;
  width: 90px;
  border-radius: 2px;
  background-color: #c6cdce;
`;

export const DashTouchArea = styled.View`
  height: 50px;
  width: 120px;
  align-self: center;
  align-items: center;
  justify-content: center;
  margin-top: -16px;
`;
