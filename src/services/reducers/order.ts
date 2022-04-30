import {
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAIL,
  ORDER_CLEAR,
  TGetOrder
} from "../actions/order";

interface IOrderInitialState {
  readonly order: number | null
  readonly orderRequest: boolean
  readonly orderFail: boolean
}

const orderInitialState: IOrderInitialState = {
  order: null,
  orderRequest: false,
  orderFail: false,
};

export const orderReducer = (state = orderInitialState, action: TGetOrder) => {
  switch (action.type) {
    case GET_ORDER_REQUEST: {
      return {
        ...state,
        orderRequest: true,
      };
    }
    case GET_ORDER_SUCCESS: {
      return {
        orderRequest: false,
        orderFail: false,
        order: action.order,
      };
    }
    case GET_ORDER_FAIL: {
      return {
        orderFail: true,
        orderRequest: false,
        order: null,
      };
    }
    case ORDER_CLEAR: {
      return {
        ...state,
        order: null,
      };
    }
    default: {
      return state;
    }
  }
};
