
export const socketMiddleware = (wsUrl, wsActions) => {
  return store => {
    let socket = null;

    return next => action => {
      const { dispatch, getState } = store;
      const { type, payload } = action;
      const { wsInit, wsInitOrder, wsSendMessage, onOpen, onClose, onError, onMessage, wsClose } = wsActions;
      const { token } = getState().user;
      if (type === wsInit) {
        socket = new WebSocket(`${wsUrl}/all`);
        console.log(socket.readyState)
      } else if (type === wsInitOrder && token) {
        socket = new WebSocket(`${wsUrl}?token=${token.split('Bearer ')[1]}`);
      }
      if (type === wsClose && socket) {
        socket.close(1000, 'Закрытие страницы')
      }
      if (socket) {
        socket.onopen = event => {
          console.log(socket.readyState)

          console.log('onopen', event)

          dispatch({ type: onOpen, payload: event });
        };

        socket.onerror = event => {
          console.log('onerror')

          dispatch({ type: onError, payload: event });
        };

        socket.onmessage = event => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          const { success, ...restParsedData } = parsedData;
          console.log('onMessage', restParsedData)

          dispatch({ type: onMessage, payload: parsedData });
        };

        socket.onclose = event => {
          console.log('onclose', event)

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
