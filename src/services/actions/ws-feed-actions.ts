import { IOrder } from "../../utils/types";

export const WS_CONNECTION_START: "WS_CONNECTION_START" = "WS_CONNECTION_START";
export const WS_CONNECTION_START_ORDER: "WS_CONNECTION_START_ORDER" =
  "WS_CONNECTION_START_ORDER";
export const WS_CONNECTION_SUCCESS: "WS_CONNECTION_SUCCESS" =
  "WS_CONNECTION_SUCCESS";
export const WS_CONNECTION_ERROR: "WS_CONNECTION_ERROR" = "WS_CONNECTION_ERROR";
export const WS_CONNECTION_CLOSED: "WS_CONNECTION_CLOSED" =
  "WS_CONNECTION_CLOSED";
export const WS_GET_MESSAGE: "WS_GET_MESSAGE" = "WS_GET_MESSAGE";
export const WS_SEND_MESSAGE: "WS_SEND_MESSAGE" = "WS_SEND_MESSAGE";
export const WS_CONNECTION_END: "WS_CONNECTION_END" = "WS_CONNECTION_END";

export interface IConnectStart {
  readonly type: typeof WS_CONNECTION_START;
}
export interface IConnectStartOrder {
  readonly type: typeof WS_CONNECTION_START_ORDER;
}
export interface IConnectSuccess {
  readonly type: typeof WS_CONNECTION_SUCCESS;
}

export interface IConnectError {
  readonly type: typeof WS_CONNECTION_ERROR;
}

export interface IConnectClose {
  readonly type: typeof WS_CONNECTION_CLOSED;
}

export interface IPayload<I> {
  readonly orders: Array<I> ;
  readonly total: number;
  readonly totalToday: number;
}

export interface IGetMessage<I> {
  readonly type: typeof WS_GET_MESSAGE;
  payload: I;
}

export interface ISendMessage {
  readonly type: typeof WS_SEND_MESSAGE;
}

export interface IConnectEnd {
  readonly type: typeof WS_CONNECTION_END;
}

export type TWsConnect =
  | IConnectStart
  | IConnectStartOrder
  | IConnectSuccess
  | IConnectError
  | IConnectClose
  | IGetMessage<IPayload<IOrder>>
  | ISendMessage
  | IConnectEnd;
