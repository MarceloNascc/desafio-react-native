import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {useSelector} from 'react-redux';

import {StatusBar} from 'react-native';
import Router from './router';

import {AppSafeContainer} from './global.style';

import theme from './theme';

const App = () => {
  const {statusBarColor, statusBarStyle} = useSelector(state => state.ui);

  return (
    <ThemeProvider theme={theme}>
      <AppSafeContainer>
        <StatusBar barStyle={statusBarStyle} backgroundColor={statusBarColor} />
        <Router />
      </AppSafeContainer>
    </ThemeProvider>
  );
};

export default App;
