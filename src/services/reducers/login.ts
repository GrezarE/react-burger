import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, TLogin } from "../actions/login";
import { IAuthorizationBoolean } from '../../utils/types'


const loginInitState: IAuthorizationBoolean = {
  isRequest: false,
  isFail: false

}

export const loginReducer = (state = loginInitState, action: TLogin) => {
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
