import { AUTH_URL } from "../../utils/auth-url";
import { USER_LOGOUT } from "./user";
import { deleteCookie } from "../../utils/cookies";

export const LOGOUT_REQUEST = "LOGIN_REQUEST";
export const LOGOUT_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT_FAIL = "LOGOUT_FAIL";

export function getLogout(token) {
  return function (dispatch) {
    dispatch({
      type: LOGOUT_REQUEST,
    });
    fetch(`${AUTH_URL}/logout`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: token
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
            type: LOGOUT_SUCCESS,
          })
          dispatch({
            type: USER_LOGOUT,
          })
          deleteCookie('refreshToken')
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
}
