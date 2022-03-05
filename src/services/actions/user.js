import { AUTH_URL } from "../../utils/auth-url"
import { setCookie } from "../../utils/cookies"

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

export const tokenUpdate = (token) => {
  return function (dispatch) {
    dispatch({
      type: TOKEN_UPDATE_REQUEST,
    });
    fetch(`${AUTH_URL}/token`, {
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
            type: TOKEN_UPDATE_SUCCESS,
            token: res.accessToken
          })
          setTimeout(() => dispatch({ type: RESET_TOKEN }), [1000 * 1200])
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
      method: "PATCH",
      headers: { authorization: token, "Content-Type": "application/json" },
      body: JSON.stringify({
        email: data.email,
        name: data.name,
        password: data.password
      }),
    }).then(function (res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.statusText}`);
    })
      .then((res) => {
        console.log(res)
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

export const getUserData = (token) => {
  return function (dispatch) {
    dispatch({
      type: USER_UPDATE_REQUEST
    })
    fetch(`${AUTH_URL}/token`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: token
      }),
    }).then(function (res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.statusText}`);
    }).then((res) => {
      if (res && res.success) {
        dispatch({
          type: TOKEN_UPDATE_SUCCESS,
          token: res.accessToken
        })
        const refreshToken = res.refreshToken
        setCookie('refreshToken', refreshToken)
        setTimeout(() => dispatch({ type: RESET_TOKEN }), [1000 * 1200])
        return res
      }
    })
      .then((res) => {
        fetch(`${AUTH_URL}/user`, {
          headers: { authorization: res.accessToken, "Content-Type": "application/json" },
        }).then(function (res) {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(`Ошибка: ${res.statusText}`);
        }).then((res) => {
          console.log(res)
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
    fetch(`${AUTH_URL}/token`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: token
      }),
    }).then(function (res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.statusText}`);
    }).then((res) => {
      if (res && res.success) {
        dispatch({
          type: TOKEN_UPDATE_SUCCESS,
          token: res.accessToken
        })
        const refreshToken = res.refreshToken
        setCookie('refreshToken', refreshToken)
        setTimeout(() => dispatch({ type: RESET_TOKEN }), [1000 * 1200])
        return res
      }
    }).then((res) => {
      console.log(res)
      fetch(`${AUTH_URL}/user`, {
        method: "PATCH",
        headers: { authorization: res.accessToken, "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.email,
          name: data.name
        }),
      }).then(function (res) {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.statusText}`);
      })
        .then((res) => {
          console.log(res)
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
    })
  }
}
