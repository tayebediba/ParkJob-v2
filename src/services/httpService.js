import axios from "axios";
import Cookies from "js-cookie";
import { createBrowserHistory } from "history";
import { clearCookies, setTokenCookies } from "../helper/cookies";
const history = createBrowserHistory();

axios.defaults.baseURL = "http://api.parkjob.ir/api/v1";

// Request Config ---------------------------------
axios.interceptors.request.use(
  (config) => {
    const token = Cookies.get("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
      config.headers["Access-Control-Allow-Origin"] = "*";
      return config;
    } else {
      return config;
    }
  },
  (error) => {
    Promise.reject(error);
  }
);

// Response Config -------------------------------
axios.interceptors.response.use(
  (res) => {
    return res;
  },
  // --------------- handling token Expired ---------------
  // {
  //   const expDate = new Date(Cookies.get("tokenExp"));
  //   const currentDate = new Date();
  //   const expTokenTime = expDate.getTime();
  //   const currentTime = currentDate.getTime();
  //   const isValidToken = expTokenTime > currentTime;
  //   const isToken = !!Cookies.get("token");
  //   const isLogin = Cookies.getJSON("isLogin");

  //   const originalRequest = res.config;

  //   if (isToken) {
  //     if (isValidToken) {
  //       if (isLogin) return res;
  //       // else Router.push("/login");
  //     } else {
  //       axios
  //         .post("/Account/RefreshToken", {
  //           accessToken: Cookies.get("token"),
  //           refreshToken: Cookies.get("refreshToken"),
  //         })
  //         .then((res) => {
  //           if (res.status === 201 || res.status === 200) {
  //             const tokenInfo = res.data;
  //             const tokenData = {
  //               token: tokenInfo.accessToken,
  //               tokenExp: tokenInfo.accessTokenExpirationTime,
  //               refreshToken: tokenInfo.refreshToken,
  //               refreshTokenExp: tokenInfo.refreshTokenExpirationTime,
  //             };
  //             setTokenCookies(tokenData);
  //             axios.defaults.headers.common[
  //               "Authorization"
  //             ] = `Bearer ${tokenInfo.accessToken}`;
  //             Cookies.set("isLogin", true);

  //             return res;
  //           } else {
  //             // Cookies.set("isLogin", false);
  //             history.replace("/login");
  //             // window.location.reload();
  //           }
  //           return axios(originalRequest);
  //         });
  //     }
  //   } else {
  //     history.replace("/login");
  //     return res;
  //   }

  //   return res;
  // },
  (error) => {
    // const originalRequest = error.config;

    // prevent infinite loop ---------------
    // if (
    //   error.response.status === 401 &&
    //   originalRequest.url === "/Account/RefreshToken"
    // ) {
    //   clearCookies();
    //   Cookies.set("login", false);
    //   history.replace("/login");
    //   window.location.reload();
    //   return Promise.reject(error);
    // }

    // handle refresh token ----------------------
    // if (error.response.status === 401 && !originalRequest._retry) {
    //   originalRequest._retry = true;

    //   return axios
    //     .post("/Account/RefreshToken", {
    //       accessToken: Cookies.get("token"),
    //       refreshToken: Cookies.get("refreshToken"),
    //     })
    //     .then((res) => {
    //       if (res.status === 200) {
    //         const tokenInfo = res.data.data;
    //         const tokenData = {
    //           token: tokenInfo.accessToken,
    //           tokenExp: tokenInfo.accessTokenExpirationTime,
    //           refreshToken: tokenInfo.refreshToken,
    //           refreshTokenExp: tokenInfo.refreshTokenExpirationTime,
    //         };
    //         setTokenCookies(tokenData);
    //         axios.defaults.headers.common[
    //           "Authorization"
    //         ] = `Bearer ${tokenInfo.accessToken}`;
    //         Cookies.set("login", true);
    //       } else {
    //         clearCookies();
    //         history.replace("/signUp");
    //         window.location.reload();
    //       }
    //       return axios(originalRequest);
    //     });
    // }

    // for usual Errors
    return Promise.reject(error);
  }
);

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
export default http;
