import api from '../../services/api';

export const LOAD = 'TASKS_LOAD_ALL';
export const SET_LOADING = 'TASKS_SET_LOADING';

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
