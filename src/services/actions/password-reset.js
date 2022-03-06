import { BASE_URL } from "../../utils/base-url";
import { checkResponse } from "../../utils/check-response";

export const PASSWORD_FORGOT_REQUEST = 'PASSWORD_FORGOT_REQUEST'
export const PASSWORD_FORGOT_SUCCESS = 'PASSWORD_FORGOT_SUCCESS'
export const PASSWORD_FORGOT_FAIL = 'PASSWORD_FORGOT_FAIL'

export const PASSWORD_RESET_REQUEST = 'PASSWORD_RESET_REQUEST'
export const PASSWORD_RESET_SUCCESS = 'PASSWORD_RESET_SUCCESS'
export const PASSWORD_RESET_FAIL = 'PASSWORD_RESET_FAIL'

export const passwordForgot = (emailValue) => {
  return function (dispatch) {
    dispatch({
      type: PASSWORD_FORGOT_REQUEST
    })
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
            type: PASSWORD_FORGOT_SUCCESS
          })
        } else {
          dispatch({
            type: PASSWORD_FORGOT_FAIL
          })
        }
      })
      .catch((err) => {
        dispatch({
          type: PASSWORD_FORGOT_FAIL
        })
      })
  }
}

export const passwordReset = ({ password, code }) => {
  return function (dispatch) {
    dispatch({
      type: PASSWORD_RESET_REQUEST
    })
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
            type: PASSWORD_RESET_SUCCESS
          })
        } else {
          dispatch({
            type: PASSWORD_RESET_FAIL
          })
        }
      })
      .catch((err) => {
        dispatch({
          type: PASSWORD_RESET_FAIL
        })
      })
  }
}
