import {CHANGE_STATUS_BAR} from '../actions/ui';
import theme from '../../theme';

const INITIAL_STATE = {
  statusBarColor: theme.background,
  statusBarStyle: 'dark-content',
};

const ui = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_STATUS_BAR:
      return {
        ...state,
        statusBarColor: action.color,
        statusBarStyle: action.contentStyle,
      };

    default:
      return state;
  }
};

export default ui;
