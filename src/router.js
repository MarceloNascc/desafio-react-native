import React from 'react';

import SignIn from './screens/SignIn';
import Tasks from './screens/Tasks';

function Router() {
  const isLoggedIn = true;

  return isLoggedIn ? <Tasks /> : <SignIn />;
}

export default Router;
