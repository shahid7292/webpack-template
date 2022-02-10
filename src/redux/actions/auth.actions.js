import * as actions from "../action.constants";

export const requestLogin = (data, callback) => ({
  type: actions.REQUEST_LOGIN,
  payload: data,
  callback,
});
