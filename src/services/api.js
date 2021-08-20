import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
axios.defaults.xsrfCookieName = 'csrftoken';

const api = axios.create({
  baseURL: 'https://wtpk-desafio-api.herokuapp.com/api',
});

api.interceptors.request.use(async config => {
  const token = await AsyncStorage.getItem('@token');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
