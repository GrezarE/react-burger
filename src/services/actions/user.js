import { AUTH_URL } from "../../utils/auth-url"
import { getCookie, setCookie } from "../../utils/cookies"

export const USER_SET_DATA = 'USER_SET_DATA'
export const USER_LOGOUT = 'USER_LOGOUT'
export const USER_UPDATE = 'USER_UPDATE'
export const TOKEN_UPDATE_SUCCESS = 'TOKEN_UPDATE_SUCCESS'
export const TOKEN_UPDATE_REQUEST = 'TOKEN_UPDATE_REQUEST'
export const TOKEN_UPDATE_FAIL = 'TOKEN_UPDATE_FAIL'
export const USER_UPDATE_REQUEST = 'USER_UPDATE_REQUEST'
export const USER_UPDATE_SUCCESS = 'USER_UPDATE_SUCCESS'
export const USER_UPDATE_FAIL = 'USER_UPDATE_SUCCESS'

export const tokenUpdate = () => {
  return function (dispatch) {
    const refreshTokenNow = getCookie('refreshToken')
    dispatch({
      type: TOKEN_UPDATE_REQUEST,
    });
    fetch(`${AUTH_URL}/token`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: refreshTokenNow
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
            type: TOKEN_UPDATE_SUCCESS,
            token: res.accessToken
          })
          const refreshToken = res.refreshToken
          setCookie('refreshToken', refreshToken)
        } else {
          dispatch({
            type: TOKEN_UPDATE_FAIL,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: TOKEN_UPDATE_FAIL,
        });
      });
  };
}

export const userDataUpdate = (data, token) => {
  return function (dispatch) {
    dispatch({
      type: USER_UPDATE_REQUEST
    })
    fetch(`${AUTH_URL}/user`, {
      method: "POST",
      headers: { authorization: token, "Content-Type": "application/json" },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
        name: data.name
      }),
    }).then(function (res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.statusText}`);
    })
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: USER_UPDATE_SUCCESS,
            email: res.user.email,
            name: res.user.name,
          })

        } else {
          dispatch({
            type: USER_UPDATE_FAIL,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: USER_UPDATE_FAIL,
        });
      });
  }
}

