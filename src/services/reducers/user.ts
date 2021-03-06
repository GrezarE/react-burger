import {
  USER_SET_DATA,
  USER_LOGOUT,
  USER_UPDATE_SUCCESS,
  TOKEN_UPDATE_SUCCESS,
  TOKEN_UPDATE_REQUEST,
  TOKEN_UPDATE_FAIL,
  USER_UPDATE_FAIL,
  USER_UPDATE_REQUEST,
  RESET_TOKEN,
  TUser,
} from "../actions/user";
import { IAuthorizationBoolean } from "../../utils/types";

interface IUserInitState {
  readonly userName: string;
  readonly email: string;
  readonly isAuthenticated: boolean;
  readonly token: string;
}

const userInitState: IUserInitState & IAuthorizationBoolean = {
  userName: "",
  email: "",
  isAuthenticated: false,
  token: "",

  isRequest: false,
  isFail: false,
};

export const userReducer = (state = userInitState, action: TUser) => {
  switch (action.type) {
    case USER_SET_DATA: {
      return {
        ...state,
        userName: action.name,
        email: action.email,
        isAuthenticated: true,
        token: action.token,
      };
    }
    case USER_LOGOUT: {
      return {
        ...state,
        userName: null,
        email: null,
        isAuthenticated: false,
        token: null,
      };
    }
    case USER_UPDATE_REQUEST: {
      return {
        ...state,
        isRequest: true,
      };
    }
    case USER_UPDATE_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        isRequest: false,
        email: action.email,
        userName: action.name,
      };
    }
    case USER_UPDATE_FAIL: {
      return {
        ...state,
        isRequest: false,
        isFail: true,
      };
    }
    case TOKEN_UPDATE_REQUEST: {
      return {
        ...state,
        isRequest: true,
        token: null,
      };
    }
    case TOKEN_UPDATE_SUCCESS: {
      return {
        ...state,
        isRequest: false,
        token: action.token,
      };
    }
    case TOKEN_UPDATE_FAIL: {
      return {
        ...state,
        token: null,
        isRequest: false,
        isFail: true,
      };
    }
    case RESET_TOKEN: {
      return {
        ...state,
        token: null,
      };
    }
    default: {
      return state;
    }
  }
};
