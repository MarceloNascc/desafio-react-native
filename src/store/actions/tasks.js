import api from '../../services/api';

export const LOAD = 'TASKS_LOAD_ALL';
export const SET_LOADING = 'TASKS_SET_LOADING';
export const ADD_TASK = 'TASKS_ADD_TASK';

export function setLoading(loading) {
  return {
    type: SET_LOADING,
    loading,
  };
}

export function loadTasks() {
  return async dispatch => {
    dispatch(setLoading(true));

    try {
      const response = await api.get('/v1/tasks/');

      dispatch({
        type: LOAD,
        tasks: response.data,
      });
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
  };
}

export function addTask(title, priority) {
  return async dispatch => {
    dispatch(setLoading(true));

    try {
      const response = await api.post('/v1/tasks/', {
        title,
        priority,
      });

      dispatch({
        type: ADD_TASK,
        task: response.data,
      });
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
  };
}
