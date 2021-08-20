import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../services/api';

export const SIGN_IN = 'AUTH_SIGN_IN';
export const LOAD_APP = 'AUTH_LOAD_APP';
export const SET_SIGNED = 'AUTH_SET_SIGNED';
export const SET_LOADING = 'AUTH_SET_LOADING';

export function setSigned(signed) {
  return {
    type: SET_SIGNED,
    signed,
  };
}

export function setLoading(loading) {
  return {
    type: SET_LOADING,
    loading,
  };
}

export function loadApp() {
  return async dispatch => {
    const token = await AsyncStorage.getItem('@token');

    dispatch({
      type: LOAD_APP,
      signed: Boolean(token),
    });
  };
}

export function signIn(email, password) {
  return async dispatch => {
    dispatch(setLoading(true));

    try {
      const response = await api.post('/auth/', {
        username: email,
        password,
      });

      await AsyncStorage.setItem('@token', response.data.token);
      dispatch({
        type: SIGN_IN,
      });
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
  };
}
