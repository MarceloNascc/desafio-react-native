import {LOAD, SET_LOADING, ADD_TASK} from '../actions/tasks';

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

    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.task],
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
