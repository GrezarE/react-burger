import { REGISTRATION_FAIL, REGISTRATION_SUCCESS, REGISTRATION_REQUEST } from "../actions/register";


const registrationInitState = {
  isRequest: false,
  isFail: false
  
}

export const registrationReducer = (state = registrationInitState, action) => {
  switch (action.type) {
    case REGISTRATION_REQUEST: {
      return {
        ...state,
        isRequest: true
      }
    }
    case REGISTRATION_SUCCESS: {
      return {
        ...state,
        isRequest: false
      }
    }
    case REGISTRATION_FAIL: {
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

