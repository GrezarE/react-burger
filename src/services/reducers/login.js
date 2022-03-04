import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL } from "../actions/login";


const loginInitState = {
  isRequest: false,
  isFail: false

}

export const loginReducer = (state = loginInitState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        isRequest: true
      }
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isRequest: false
      }
    }
    case LOGIN_FAIL: {
      return {
        isFail: true,
        isRequest: false
      }
    }
    default: {
      return state
    }
  }
}
