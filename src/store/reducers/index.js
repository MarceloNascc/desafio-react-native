import {combineReducers} from 'redux';
import auth from './auth';
import ui from './ui';
import tasks from './tasks';

export default combineReducers({
  auth,
  ui,
  tasks,
});
