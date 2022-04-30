import { LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAIL, TLogout } from "../actions/logout";
import { IAuthorizationBoolean } from '../../utils/types'



const loginInitState: IAuthorizationBoolean = {
  isRequest: false,
  isFail: false

}

export const logoutReducer = (state = loginInitState, action: TLogout) => {
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
