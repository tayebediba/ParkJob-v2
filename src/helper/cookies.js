import Cookies from "js-cookie";

export const setTokenCookies = (tokenData) => {
  const { token, tokenExp, refreshToken, refreshTokenExp } = tokenData;
  Cookies.set("token", token);
  Cookies.set("tokenExp", tokenExp);
  Cookies.set("refreshToken", refreshToken);
  Cookies.set("refreshTokenExp", refreshTokenExp);
  Cookies.set("login", true);
};

export const clearCookies = () => {
  Cookies.remove("token");
  Cookies.remove("tokenExp");
  Cookies.remove("refreshToken");
  Cookies.remove("refreshTokenExp");
  Cookies.remove("userInfo");
  Cookies.remove("login");
};

export const setUserInfoCookies = (role, type) => {
  const userInfo = {
    role,
    type,
  };
  Cookies.set("userInfo", userInfo);
};
