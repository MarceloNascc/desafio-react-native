import React from 'react';
import {ThemeProvider} from 'styled-components/native';

import {StatusBar} from 'react-native';
import Router from './router';

import {AppSafeContainer} from './global.style';

import theme from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppSafeContainer>
        <StatusBar barStyle="dark-content" backgroundColor={theme.background} />
        <Router />
      </AppSafeContainer>
    </ThemeProvider>
  );
};

export default App;
