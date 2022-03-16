import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./components/app/app";
import { Provider } from "react-redux";
import { compose, createStore, applyMiddleware } from "redux";
import { rootReducer } from "./services/reducers";
import thunk from "redux-thunk";
import {
  WS_CONNECTION_START,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE,
  WS_SEND_MESSAGE,
  WS_CONNECTION_END,
  WS_CONNECTION_START_ORDER,
} from "./services/actions/ws-feed-actions";
import { socketMiddleware } from "./services/middleware/socketMiddleware";
import {
  BrowserRouter as Router,
} from "react-router-dom";

declare const window: any;

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const wsActions = {
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
const store = createStore(rootReducer, enhancer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
