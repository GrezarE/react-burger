import { Middleware } from "redux";
import { IWsActions } from "../store";

export const socketMiddleware = (
  wsUrl: string,
  wsActions: IWsActions
): Middleware => {
  return (store) => {
    let socket: WebSocket | null = null;

    return (next) => (action) => {
      const { dispatch, getState } = store;
      const { type, payload } = action;
      const {
        wsInit,
        wsInitOrder,
        wsSendMessage,
        onOpen,
        onClose,
        onError,
        onMessage,
        wsClose,
      } = wsActions;
      const { token } = getState().user;
      if (type === wsInit) {
        socket = new WebSocket(`${wsUrl}/all`);
      } else if (type === wsInitOrder && token) {
        socket = new WebSocket(`${wsUrl}?token=${token.split("Bearer ")[1]}`);
      }
      if (type === wsClose && socket) {
        socket.close(1000, "Закрытие страницы");
      }
      if (socket) {
        socket.onopen = (event) => {
          dispatch({ type: onOpen, payload: event });
        };
        socket.onerror = (event) => {
          dispatch({ type: onError, payload: event });
        };
        socket.onmessage = (event) => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          const { success, ...restParsedData } = parsedData;
          dispatch({ type: onMessage, payload: restParsedData });
        };
        socket.onclose = (event) => {
          dispatch({ type: onClose, payload: event });
        };

        if (type === wsSendMessage) {
          const message = { ...payload, token: token };
          socket.send(JSON.stringify(message));
        }
      }

      next(action);
    };
  };
};
