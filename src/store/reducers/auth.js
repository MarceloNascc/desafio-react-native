import {LOAD_APP, SET_SIGNED, SIGN_IN, SET_LOADING} from '../actions/auth';

const INITIAL_STATE = {
  signed: false,
  loading: false,
};

const auth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_APP:
    case SET_SIGNED:
      return {
        ...state,
        signed: action.signed,
      };

    case SIGN_IN:
      return {
        ...state,
        signed: true,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: action.loading,
      };

    default:
      return state;
  }
};

export default auth;
