import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import SignIn from './screens/SignIn';
import Tasks from './screens/Tasks';

import {loadApp} from './store/actions/auth';

function Router() {
  const dispatch = useDispatch();
  const {signed} = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(loadApp());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return signed ? <Tasks /> : <SignIn />;
}

export default Router;
