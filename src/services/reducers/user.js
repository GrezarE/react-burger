import { USER_LOGIN, USER_LOGOUT, USER_UPDATE } from "../actions/user";

const userInitState = {
  userName: null,
  email: null,
  isAuthenticated: false,
  token: null
};

export const userReducer = (state = userInitState, action) => {
  switch (action.type) {
    case USER_LOGIN: {
      return {
        userName: action.name,
        email: action.email,
        isAuthenticated: true,
        token: action.token
      };
    }
    case USER_LOGOUT: {
      return {
        userName: null,
        email: null,
        isAuthenticated: false,
        token: null
      };
    }
    case USER_UPDATE: {
      return {
        ...state,
        email: action.email,
        userName: action.name
      }
    }
    default: {
      return state;
    }
  }
};
