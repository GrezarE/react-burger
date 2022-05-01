import { compose, createStore, applyMiddleware } from "redux";
import { rootReducer } from "../services/reducers";
import {
  WS_CONNECTION_START,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE,
  WS_SEND_MESSAGE,
  WS_CONNECTION_END,
  WS_CONNECTION_START_ORDER,
} from "../services/actions/ws-feed-actions";
import thunk from "redux-thunk";
import { socketMiddleware } from "../services/middleware/socketMiddleware";

declare const window: any;

export const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

export interface IWsActions {
  readonly wsInit: typeof WS_CONNECTION_START;
  readonly wsInitOrder: typeof WS_CONNECTION_START_ORDER;
  readonly wsSendMessage: typeof WS_SEND_MESSAGE;
  readonly onOpen: typeof WS_CONNECTION_SUCCESS;
  readonly onClose: typeof WS_CONNECTION_CLOSED;
  readonly onError: typeof WS_CONNECTION_ERROR;
  readonly onMessage: typeof WS_GET_MESSAGE;
  readonly wsClose: typeof WS_CONNECTION_END;
}

const wsActions: IWsActions = {
  wsInit: WS_CONNECTION_START,
  wsInitOrder: WS_CONNECTION_START_ORDER,
  wsSendMessage: WS_SEND_MESSAGE,
  onOpen: WS_CONNECTION_SUCCESS,
  onClose: WS_CONNECTION_CLOSED,
  onError: WS_CONNECTION_ERROR,
  onMessage: WS_GET_MESSAGE,
  wsClose: WS_CONNECTION_END,
};

const wsUrl = "wss://norma.nomoreparties.space/orders";

const enhancer = composeEnhancers(
  applyMiddleware(thunk, socketMiddleware(wsUrl, wsActions))
);
export const store = createStore(rootReducer, enhancer);
