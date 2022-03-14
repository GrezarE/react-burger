import { BASE_URL } from "../../utils/base-url";

import { deleteCookie, setCookie } from "../../utils/cookies"
import { checkResponse } from "../../utils/check-response";


export const USER_SET_DATA = 'USER_SET_DATA'
export const USER_LOGOUT = 'USER_LOGOUT'
export const USER_UPDATE = 'USER_UPDATE'
export const TOKEN_UPDATE_SUCCESS = 'TOKEN_UPDATE_SUCCESS'
export const TOKEN_UPDATE_REQUEST = 'TOKEN_UPDATE_REQUEST'
export const TOKEN_UPDATE_FAIL = 'TOKEN_UPDATE_FAIL'
export const USER_UPDATE_REQUEST = 'USER_UPDATE_REQUEST'
export const USER_UPDATE_SUCCESS = 'USER_UPDATE_SUCCESS'
export const USER_UPDATE_FAIL = 'USER_UPDATE_SUCCESS'
export const RESET_TOKEN = 'RESET_TOKEN'

const addUserUpdate = (data) => {
  return {
    type: USER_UPDATE_SUCCESS,
    email: data.user.email,
    name: data.user.name,
  }
}

export const tokenUpdate = (token) => {
  return function (dispatch) {
    dispatch({
      type: TOKEN_UPDATE_REQUEST,
    });
    fetch(`${BASE_URL}/auth/token`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: token
      }),
    })
      .then(checkResponse)
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: TOKEN_UPDATE_SUCCESS,
            token: res.accessToken
          })
          setTimeout(() => dispatch({ type: RESET_TOKEN }), [1000 * 1200])
          const refreshToken = res.refreshToken
          deleteCookie('refreshToken')
          setCookie('refreshToken', refreshToken, { path: '/' })
          setCookie('refreshToken', refreshToken, { path: '/profile', expires: -1 })
          setCookie('refreshToken', refreshToken, { path: '/feed', expires: -1 })
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
    fetch(`${BASE_URL}/auth/user`, {
      method: "PATCH",
      headers: { authorization: token, "Content-Type": "application/json" },
      body: JSON.stringify({
        email: data.email,
        name: data.name,
        password: data.password
      }),
    })
      .then(checkResponse)
      .then((res) => {
        if (res && res.success) {
          dispatch(addUserUpdate(res))
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

export const getUserData = (token) => {
  return function (dispatch) {
    dispatch({
      type: USER_UPDATE_REQUEST
    })
    fetch(`${BASE_URL}/auth/token`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: token
      }),
    })
      .then(checkResponse)
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: TOKEN_UPDATE_SUCCESS,
            token: res.accessToken
          })
          const refreshToken = res.refreshToken
          deleteCookie('refreshToken')
          setCookie('refreshToken', refreshToken, { path: '/' })
          setCookie('refreshToken', refreshToken, { path: '/profile', expires: -1 })
          setCookie('refreshToken', refreshToken, { path: '/feed', expires: -1 })
          setTimeout(() => dispatch({ type: RESET_TOKEN }), [1000 * 1200])
          return res
        }
      })
      .then((res) => {
        fetch(`${BASE_URL}/auth/user`, {
          headers: { authorization: res.accessToken, "Content-Type": "application/json" },
        })
          .then(checkResponse)
          .then((res) => {
            if (res && res.success) {
              dispatch(addUserUpdate(res))
            } else {
              dispatch({
                type: USER_UPDATE_FAIL,
              });
            }
          }).catch((err) => {
            dispatch({
              type: USER_UPDATE_FAIL,
            });
          })
      })
      .catch((err) => {
        dispatch({
          type: USER_UPDATE_FAIL,
        });
      });
  }
}

export const userDataUpdateWithoutToken = (data, token) => {
  return function (dispatch) {
    fetch(`${BASE_URL}/auth/token`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: token
      }),
    })
      .then(checkResponse)
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: TOKEN_UPDATE_SUCCESS,
            token: res.accessToken
          })
          const refreshToken = res.refreshToken
          deleteCookie('refreshToken')
          setCookie('refreshToken', refreshToken, { path: '/' })
          setCookie('refreshToken', refreshToken, { path: '/profile', expires: -1 })
          setCookie('refreshToken', refreshToken, { path: '/feed', expires: -1 })
          setTimeout(() => dispatch({ type: RESET_TOKEN }), [1000 * 1200])
          return res
        }
      }).then((res) => {
        fetch(`${BASE_URL}/auth/user`, {
          method: "PATCH",
          headers: { authorization: res.accessToken, "Content-Type": "application/json" },
          body: JSON.stringify({
            email: data.email,
            name: data.name
          }),
        })
          .then(checkResponse)
          .then((res) => {
            if (res && res.success) {
              dispatch(addUserUpdate(res))
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
      })
  }
}
