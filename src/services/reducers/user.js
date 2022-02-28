import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "../actions/login";
import { USER_LOGIN, USER_LOGOUT } from "../actions/user";

const userInitState = {
  userName: null,
  email: null,
};

export const userReducer = (state = userInitState, action) => {
  switch (action.type) {
    case USER_LOGIN: {
      return {
        userName: action.name,
        email: action.email,
      };
    }
    case USER_LOGOUT: {
      return {
        userName: null,
        email: null,
      };
    }
    default: {
      return state;
    }
  }
};
