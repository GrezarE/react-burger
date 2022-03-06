import { PASSWORD_FORGOT_REQUEST, PASSWORD_FORGOT_SUCCESS, PASSWORD_FORGOT_FAIL, PASSWORD_RESET_REQUEST, PASSWORD_RESET_SUCCESS, PASSWORD_RESET_FAIL } from "../actions/password-reset"

const passwordResetInitState = {
  forgotRequest: false,
  forgotFail: false,
  forgotSuccess: false,

  resetRequest: false,
  resetFail: false,
  resetSuccess: false
}

export const passwordReserReducer = (state = passwordResetInitState, action) => {
  switch (action.type) {
    case PASSWORD_FORGOT_REQUEST: {
      return {
        ...state,
        forgotRequest: true,
      }
    }
    case PASSWORD_FORGOT_SUCCESS: {
      return {
        ...state,
        forgotRequest: false,
        forgotFail: false,
        forgotSuccess: true,
        resetSuccess: false
      }
    }
    case PASSWORD_FORGOT_FAIL: {
      return {
        ...state,
        forgotRequest: false,
        forgotFail: true,
        forgotSuccess: false,
        resetSuccess: false
      }
    }
    case PASSWORD_RESET_REQUEST: {
      return {
        ...state,
        resetRequest: true,
      }
    }
    case PASSWORD_RESET_SUCCESS: {
      return {
        ...state,
        resetSuccess: true,
        forgotSuccess: false,
        resetRequest: false,
        resetFail: false,
      }
    }
    case PASSWORD_RESET_FAIL: {
      return {
        ...state,
        resetRequest: false,
        resetFail: true,
        resetSuccess: false
      }
    }
    default: {
      return state
    }
  }
}
