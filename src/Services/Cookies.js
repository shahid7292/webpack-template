import cookie from "react-cookies";

export default () => {
  return {
    elements: {
      ACCESS_TOKEN: "accessToken",
      REFRESH_TOKEN: "refreshToken",
    },

    options(expires) {
      return { path: "/", expires };
    },

    setAppToken(tokenObj) {
      cookie.save(this.elements.ACCESS_TOKEN, tokenObj.access, this.options());
      const expires = new Date();
      expires.setDate(Date.now() + 1000 * 60 * 60 * 6);
      cookie.save(
        this.elements.REFRESH_TOKEN,
        tokenObj.refresh,
        this.options(expires)
      );
    },

    getAccessToken() {
      return cookie.load(this.elements.ACCESS_TOKEN, this.options());
    },

    getRefreshToken() {
      return cookie.load(this.elements.REFRESH_TOKEN, this.options());
    },

    clearToken() {
      cookie.remove(this.elements.ACCESS_TOKEN, this.options());
      cookie.remove(this.elements.REFRESH_TOKEN, this.options());
    },

    isTokenAvailable() {
      return (
        this.getAccessToken() !== undefined ||
        this.getRefreshToken() !== undefined
      );
    },
  };
};
