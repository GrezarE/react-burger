import { BASE_URL } from "../../utils/base-url";
import { USER_SET_DATA, RESET_TOKEN } from "./user";
import { setCookie, deleteCookie } from "../../utils/cookies";
import { checkResponse } from "../../utils/check-response";
import { AppThunk, AppDispatch } from "../types";
import { IUserAllData } from "../../utils/types";



export const LOGIN_REQUEST: "LOGIN_REQUEST" = "LOGIN_REQUEST";
export const LOGIN_SUCCESS: "LOGIN_SUCCESS" = "LOGIN_SUCCESS";
export const LOGIN_FAIL: "LOGIN_FAIL" = "LOGIN_FAIL";

export interface ILoginRequest {
  readonly type: typeof LOGIN_REQUEST;
}
export interface ILoginSuccess {
  readonly type: typeof LOGIN_SUCCESS;
}
export interface ILoginFail {
  readonly type: typeof LOGIN_FAIL;
}

export type TLogin = ILoginRequest | ILoginSuccess | ILoginFail

export const getLogin: AppThunk = (data: IUserAllData) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: LOGIN_REQUEST,
    });
    fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    })
      .then(checkResponse)
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: LOGIN_SUCCESS,
          });
          dispatch({
            type: USER_SET_DATA,
            email: res.user.email,
            name: res.user.name,
            token: res.accessToken,
          });
          setTimeout(() => dispatch({ type: RESET_TOKEN }), 1000 * 1200);
          const refreshToken = res.refreshToken;
          deleteCookie("refreshToken");
          setCookie("refreshToken", refreshToken, { path: "/" });
          setCookie("refreshToken", refreshToken, {
            path: "/profile",
            expires: -1,
          });
          setCookie("refreshToken", refreshToken, {
            path: "/feed",
            expires: -1,
          });
        } else {
          dispatch({
            type: LOGIN_FAIL,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: LOGIN_FAIL,
        });
      });
  };
}
