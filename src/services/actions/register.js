import { AUTH_URL } from "../../utils/auth-url";
import { USER_SET_DATA } from "./user";
import { setCookie } from "../../utils/cookies";

export const REGISTRATION_REQUEST = "REGISTRATION_REQUEST";
export const REGISTRATION_SUCCESS = "LOGIN_SUCCESS";
export const REGISTRATION_FAIL = "LOGIN_FAIL";

export function getRegistration(data) {

  return function (dispatch) {
    dispatch({
      type: REGISTRATION_REQUEST,
    });
    fetch(`${AUTH_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
        name: data.name
      }),
    })
      .then(function (res) {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.statusText}`);
      })
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: REGISTRATION_SUCCESS,
          });
          dispatch({
            type: USER_SET_DATA,
            email: res.user.email,
            name: res.user.name,
            token: res.accessToken
          })
          const refreshToken = res.refreshToken
          setCookie('refreshToken', refreshToken)
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
}
