import {LOAD, SET_LOADING} from '../actions/tasks';

const INITIAL_STATE = {
  loading: false,
  tasks: [],
};

const tasks = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        tasks: action.tasks,
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

export default tasks;
