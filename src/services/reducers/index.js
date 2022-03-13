import { combineReducers } from "redux";
import { burgerReducer } from "./burger";
import { viewReducer } from "./view";
import { constructorReducer } from "./construct";
import { orderReducer } from "./order";
import { userReducer } from "./user";
import { registrationReducer } from "./register";
import { loginReducer } from "./login";
import { logoutReducer } from "./logout";
import { passwordReserReducer } from "./password-reset";
import { feedReducer } from "./feed-view";
import { wsReducer } from "./ws-reducer";

export const rootReducer = combineReducers({
  burger: burgerReducer,
  view: viewReducer,
  construct: constructorReducer,
  order: orderReducer,
  user: userReducer,
  register: registrationReducer,
  login: loginReducer,
  logout: logoutReducer,
  password: passwordReserReducer,
  feed: feedReducer,
  websocket: wsReducer
});
