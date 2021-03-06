/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

enum ActionTypes {
  CHANGE_USERNAME = 'myapp/Login/CHANGE_USERNAME',
  CHANGE_PASSWORD = 'myapp/Login/CHANGE_PASSWORD',
  RESET = 'myapp/Login/RESET',
  LOGIN_USER = 'myapp/App/LOGIN_USER',
  LOGIN_USER_ERROR = 'myapp/App/LOGIN_USER_ERROR',
  LOGIN_USER_SUSSESS = 'myapp/App/LOGIN_USER_SUSSESS',
}


export default ActionTypes;
