import { store } from "../store";
import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { TGetIngredients } from "../actions/burger";
import { TConstruct } from "../actions/construct";
import { TFeedView } from "../actions/feed-view";
import { TGetOrder } from "../actions/order";
import { TGetOrders } from "../actions/feeds-list-temporary";
import { TLogin } from "../actions/login";
import { TLogout } from "../actions/logout";
import { TPassword } from "../actions/password-reset";
import { TRegistration } from "../actions/register";
import { TUser } from "../actions/user";
import { TView } from "../actions/view";
import { TWsConnect } from "../actions/ws-feed-actions";

export type TAppActions =
  | TGetIngredients
  | TConstruct
  | TFeedView
  | TGetOrder
  | TGetOrders
  | TLogin
  | TLogout
  | TPassword
  | TRegistration
  | TUser
  | TView
  | TWsConnect;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<TReturn  = void> = ActionCreator<
  ThunkAction<TReturn , Action, RootState, TAppActions>
>;
