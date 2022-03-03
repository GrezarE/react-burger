import { AUTH_URL } from "../../utils/auth-url";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export function getLogin() {
  return function (dispatch) {
    dispatch({
      type: LOGIN_REQUEST,
    });
    fetch(`${AUTH_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: "",
        password: "",
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
            type: LOGIN_SUCCESS,
            user: {
              email: res.user.email,
              name: res.user.name,
            },
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
