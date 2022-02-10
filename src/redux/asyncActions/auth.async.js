import axios from "../../Services/axios";
import { trackPromise } from "react-promise-tracker";
import { getUrl } from "../urls";

export const loginAsync = (payload) => {
  return trackPromise(axios.post(getUrl("login"), payload));
};
