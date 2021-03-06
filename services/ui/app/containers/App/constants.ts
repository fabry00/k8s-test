
enum ActionTypes {

  LOGOUT = 'myapp/App/LOGOUT',
  SET_JWT = 'myapp/App/SET_JWT',

  DELETE_TODO = 'myapp/App/DELETE_TODO',
  DELETE_ALL_TODOS = 'myapp/App/DELETE_ALL_TODOS',
  LOAD_TODOS = 'myapp/App/LOAD_TODOS',
  LOAD_TODOS_SUSSESS = 'myapp/App/LOAD_TODOS_SUSSESS',
  LOAD_TODOS_ERROR = 'myapp/App/LOAD_TODOS_ERROR',

  SHOW_HEALTH = 'myapp/App/SHOW_HEALTH',
  CLOSE_HEALTH = 'myapp/App/CLOSE_HEALTH',
  FETCH_HEALTH = 'myapp/App/FETCH_HEALTH',
  FETCH_HEALTH_SUCCESS = 'myapp/App/FETCH_HEALTH_SUCCESS',
  FETCH_HEALTH_ERROR = 'myapp/App/FETCH_HEALTH_ERROR',

  SHOW_LOADING = 'myapp/App/SHOW_LOADING',
}

export default ActionTypes;
