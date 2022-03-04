import { LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAIL } from "../actions/logout";


const loginInitState = {
  isRequest: false,
  isFail: false

}

export const logoutReducer = (state = loginInitState, action) => {
  switch (action.type) {
    case LOGOUT_REQUEST: {
      return {
        ...state,
        isRequest: true
      }
    }
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        isRequest: false
      }
    }
    case LOGOUT_FAIL: {
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
