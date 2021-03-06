import { BASE_URL } from "../../utils/base-url";

import { USER_LOGOUT } from "./user";
import { deleteCookie } from "../../utils/cookies";
import { checkResponse } from "../../utils/check-response";
import { AppThunk, AppDispatch } from "../types";

export const LOGOUT_REQUEST = "LOGIN_REQUEST";
export const LOGOUT_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT_FAIL = "LOGOUT_FAIL";

export interface ILogoutRequest {
  readonly type: typeof LOGOUT_REQUEST;
}
export interface ILogoutSuccess {
  readonly type: typeof LOGOUT_SUCCESS;
}
export interface ILogoutFail {
  readonly type: typeof LOGOUT_FAIL;
}

export type TLogout = ILogoutRequest | ILogoutSuccess | ILogoutFail;

export const getLogout: AppThunk = (token: string) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: LOGOUT_REQUEST,
    });
    fetch(`${BASE_URL}/auth/logout`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: token,
      }),
    })
      .then(checkResponse)
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: LOGOUT_SUCCESS,
          });
          dispatch({
            type: USER_LOGOUT,
          });
          deleteCookie("refreshToken");
        } else {
          dispatch({
            type: LOGOUT_FAIL,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: LOGOUT_FAIL,
        });
      });
  };
};
