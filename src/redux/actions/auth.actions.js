import * as actions from "../action.constants";

export const requestLogin = (data, callback) => ({
  type: actions.REQUEST_LOGIN,
  payload: data,
  callback,
});

export const requestRegister = (data, callback) => ({
  // eslint-disable-next-line import/namespace
  type: actions.REQUEST_REGISTER,
  payload: data,
  callback,
});
