export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT = 'LOGOUT';

export const loginSuccess = (userId) => ({
  type: LOGIN_SUCCESS,
  userId: userId,
});

export const loginFail = () => ({
  type: LOGIN_FAIL,
});

export const logout = () => ({
  type: LOGOUT,
});
