import { call, takeLatest } from "redux-saga/effects";
import { loginAsync } from "../asyncActions/auth.async";
import { toast } from "react-toastify";
import * as actions from "../action.constants";

function* loginRequest(action = {}) {
  const { payload = {}, callback = () => {}, fromRegister = false } = action;
  try {
    const response = yield call(loginAsync, payload);
    if (response) {
      if (!fromRegister) {
        toast.success("Logged in successfully");
      }
      callback(response.data);
    }
  } catch (e) {
    toast.error(e?.response?.data?.detail);
  }
}
export function* authSaga() {
  yield takeLatest(actions.REQUEST_LOGIN, loginRequest);
}
