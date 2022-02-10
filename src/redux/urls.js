const BASEURL = {
  baseURL: "http://localhost:8000/",
};
const allURLs = {
  ...BASEURL,
};
export const getUrl = (key) => {
  return allURLs[key];
};
