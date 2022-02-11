import { trackPromise } from "react-promise-tracker";

export const loginAsync = ({ email, password }) => {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "demo@example.com" && password == "123@demo") {
        resolve({ name: "demoUser" });
      } else {
        reject({ email, password });
      }
    }, 1000);
  });
  return trackPromise(myPromise);
};
