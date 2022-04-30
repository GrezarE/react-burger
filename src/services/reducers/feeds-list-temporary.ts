import { GET_ORDERS_TEMPORARY, GET_ORDERS_TEMPORARY_REQUEST, GET_ORDERS_TEMPORARY_FAIL, TGetOrders } from "../actions/feeds-list-temporary";
import { IOrder } from "../../utils/types";

interface IInitStateTemp {
  readonly orders: Array<IOrder>
  readonly total: number
  readonly totalToday: number
  readonly request: boolean
}

const initStateTemp: IInitStateTemp = {
  orders: [],
  total: 0,
  totalToday: 0,
  request: false
}


export const ordersReducerTemporary = (state = initStateTemp, action: TGetOrders) => {
  switch (action.type) {
    case GET_ORDERS_TEMPORARY_REQUEST: {
      return {
        ...state,
        request: true
      }
    }
    case GET_ORDERS_TEMPORARY: {
      return {
        orders: action.orders,
        total: action.total,
        totalToday: action.today,
        request: false
      }
    }
    case GET_ORDERS_TEMPORARY_FAIL: {
      return {
        orders: [],
        total: 0,
        totalToday: 0,
        request: false
      }
    }
    default: {
      return state
    }
  }
}
