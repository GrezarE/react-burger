import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./components/app/app";
import { Provider } from "react-redux";
import { compose, createStore, applyMiddleware } from "redux";
import { rootReducer } from "./services/reducers";
import thunk from "redux-thunk";


declare const window: any;

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = createStore(rootReducer, enhancer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
