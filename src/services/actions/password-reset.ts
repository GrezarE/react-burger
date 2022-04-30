import { BASE_URL } from "../../utils/base-url";
import { checkResponse } from "../../utils/check-response";
import { AppThunk, AppDispatch } from "../types";

export const PASSWORD_FORGOT_REQUEST: "PASSWORD_FORGOT_REQUEST" =
  "PASSWORD_FORGOT_REQUEST";
export const PASSWORD_FORGOT_SUCCESS: "PASSWORD_FORGOT_SUCCESS" =
  "PASSWORD_FORGOT_SUCCESS";
export const PASSWORD_FORGOT_FAIL: "PASSWORD_FORGOT_FAIL" =
  "PASSWORD_FORGOT_FAIL";

export const PASSWORD_RESET_REQUEST: "PASSWORD_RESET_REQUEST" =
  "PASSWORD_RESET_REQUEST";
export const PASSWORD_RESET_SUCCESS: "PASSWORD_RESET_SUCCESS" =
  "PASSWORD_RESET_SUCCESS";
export const PASSWORD_RESET_FAIL: "PASSWORD_RESET_FAIL" = "PASSWORD_RESET_FAIL";

export interface IPasswordForgotRequest {
  readonly type: typeof PASSWORD_FORGOT_REQUEST;
}
export interface IPasswordForgotSuccess {
  readonly type: typeof PASSWORD_FORGOT_SUCCESS;
}
export interface IPasswordForgotFail {
  readonly type: typeof PASSWORD_FORGOT_FAIL;
}

export interface IPasswordResetRequest {
  readonly type: typeof PASSWORD_RESET_REQUEST;
}
export interface IPasswordResetSuccess {
  readonly type: typeof PASSWORD_RESET_SUCCESS;
}
export interface IPasswordResetFail {
  readonly type: typeof PASSWORD_RESET_FAIL;
}

export type TPassword =
  | IPasswordForgotRequest
  | IPasswordForgotSuccess
  | IPasswordForgotFail
  | IPasswordResetRequest
  | IPasswordResetSuccess
  | IPasswordResetFail;

export const getPasswordForgotRequest = (): IPasswordForgotRequest => ({
  type: PASSWORD_FORGOT_REQUEST,
});
export const getPasswordResetRequest = (): IPasswordResetRequest => ({
  type: PASSWORD_RESET_REQUEST,
});

export const passwordForgot: AppThunk = (emailValue: string) => {
  return function (dispatch: AppDispatch) {
    dispatch(getPasswordForgotRequest());
    fetch(`${BASE_URL}/password-reset`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: emailValue,
      }),
    })
      .then(checkResponse)
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: PASSWORD_FORGOT_SUCCESS,
          });
        } else {
          dispatch({
            type: PASSWORD_FORGOT_FAIL,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: PASSWORD_FORGOT_FAIL,
        });
      });
  };
};

interface IPasswordReserFC {
  readonly password: string;
  readonly code: string;
}

export const passwordReset: AppThunk =
  ({ password, code }: IPasswordReserFC) =>
  (dispatch: AppDispatch) => {
    dispatch(getPasswordResetRequest());
    fetch(`${BASE_URL}/password-reset/reset`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        password: password,
        token: code,
      }),
    })
      .then(function (res) {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res);
      })
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: PASSWORD_RESET_SUCCESS,
          });
        } else {
          dispatch({
            type: PASSWORD_RESET_FAIL,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: PASSWORD_RESET_FAIL,
        });
      });
  };
