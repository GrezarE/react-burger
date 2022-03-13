
export const socketMiddleware = (wsUrl, wsActions) => {
  return store => {
    let socket = null;

    return next => action => {
      const { dispatch, getState } = store;
      const { type, payload } = action;
      const { wsInit, wsSendMessage, onOpen, onClose, onError, onMessage } = wsActions;
      const { token, isAuthenticated, email } = getState().user;
      // if (type === wsInit) {
      // console.log(token, isAuthenticated, email)
      if (type === wsInit && isAuthenticated) {
        // socket = new WebSocket(wsUrl);
        socket = new WebSocket(`${wsUrl}?token=${token.split('Bearer ')[1]}`);
        console.log(socket.readyState)
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
          console.log('onMessage', parsedData)
          // const { success, ...restParsedData } = parsedData;

          dispatch({ type: onMessage, payload: parsedData });
        };

        socket.onclose = event => {
          console.log('onclose', event)

          dispatch({ type: onClose, payload: event });
        };

        // if (type === wsSendMessage) {
        //   const message = { ...payload, token: token };
        //   socket.send(JSON.stringify(message));
        // }
      }

      next(action);
    };
  };
};
