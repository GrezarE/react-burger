import { BASE_URL } from "../../utils/base-url";
import { USER_SET_DATA, RESET_TOKEN } from "./user";
import { setCookie } from "../../utils/cookies";
import { checkResponse } from "../../utils/check-response";


export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export function getLogin(data) {
  return function (dispatch) {
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
          })
          dispatch({
            type: USER_SET_DATA,
            email: res.user.email,
            name: res.user.name,
            token: res.accessToken
          })
          setTimeout(() => dispatch({ type: RESET_TOKEN }), [1000 * 1200])
          const refreshToken = res.refreshToken
          setCookie('refreshToken', refreshToken)
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
