import {
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE,
  WS_CONNECTION_END,
  TWsConnect,
} from "../actions/ws-feed-actions";
import { IOrder } from "../../utils/types";


type TInitialState = {
  readonly wsConnected: boolean;
  readonly orders: Array<IOrder>;
  readonly total: number;
  readonly totalToday: number;
};

const initialState: TInitialState = {
  wsConnected: false,
  orders: [],
  total: 0,
  totalToday: 0,
};

export const wsReducer = (state = initialState, action: TWsConnect): TInitialState => {
  switch (action.type) {
    case WS_CONNECTION_SUCCESS:
      return {
        ...state,
        wsConnected: true,
      };
    case WS_CONNECTION_ERROR:
      return {
        ...state,
        wsConnected: false,
        orders: [],
        total: 0,
        totalToday: 0,
      };
    case WS_CONNECTION_CLOSED:
      return {
        ...state,
        wsConnected: false,
        orders: [],
        total: 0,
        totalToday: 0,
      };
    case WS_GET_MESSAGE:
      return {
        ...state,
        orders: action.payload.orders,
        total: action.payload.total,
        totalToday: action.payload.totalToday,
      };
    case WS_CONNECTION_END: {
      return {
        wsConnected: false,
        orders: [],
        total: 0,
        totalToday: 0,
      };
    }
    default:
      return state;
  }
};
