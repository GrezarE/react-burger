import { GET_ORDERS_TEMPORARY, GET_ORDERS_TEMPORARY_REQUEST, GET_ORDERS_TEMPORARY_FAIL } from "../actions/feeds-list-temporary";


const initStateTemp = {
  orders: [],
  total: 0,
  totalToday: 0,
  request: false
}


export const ordersReducerTemporary = (state = initStateTemp, action) => {
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
