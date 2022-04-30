import { BASE_URL } from "../../utils/base-url";

import { USER_SET_DATA, RESET_TOKEN } from "./user";
import { setCookie } from "../../utils/cookies";
import { checkResponse } from "../../utils/check-response";
import { AppThunk, AppDispatch } from "../types";
import { IUserAllData } from "../../utils/types";

export const REGISTRATION_REQUEST: "REGISTRATION_REQUEST" =
  "REGISTRATION_REQUEST";
export const REGISTRATION_SUCCESS: "REGISTRATION_SUCCESS" =
  "REGISTRATION_SUCCESS";
export const REGISTRATION_FAIL: "REGISTRATION_FAIL" = "REGISTRATION_FAIL";

export interface IRegistrationRequest {
  readonly type: typeof REGISTRATION_REQUEST;
}
export interface IRegistrationSuccess {
  readonly type: typeof REGISTRATION_SUCCESS;
}
export interface IRegistrationFail {
  readonly type: typeof REGISTRATION_FAIL;
}

export type TRegistration =
  | IRegistrationRequest
  | IRegistrationSuccess
  | IRegistrationFail;



export const getRegistration: AppThunk = (data: IUserAllData) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: REGISTRATION_REQUEST,
    });
    fetch(`${BASE_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
        name: data.name,
      }),
    })
      .then(checkResponse)
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: REGISTRATION_SUCCESS,
          });
          dispatch({
            type: USER_SET_DATA,
            email: res.user.email,
            name: res.user.name,
            token: res.accessToken,
          });
          setTimeout(() => dispatch({ type: RESET_TOKEN }), 1000 * 1200);
          const refreshToken = res.refreshToken;
          setCookie("refreshToken", refreshToken);
        } else {
          dispatch({
            type: REGISTRATION_FAIL,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: REGISTRATION_FAIL,
        });
      });
  };
};
