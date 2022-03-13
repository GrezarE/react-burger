import { BASE_URL } from "../../utils/base-url"
import { checkResponse } from "../../utils/check-response"

export const GET_ORDERS_TEMPORARY = 'GET_ORDERS_TEMPORARY'
export const GET_ORDERS_TEMPORARY_REQUEST = 'GET_ORDERS_TEMPORARY_REQUEST'

export function getOrdersTemporary() {
  return function (dispatch) {
    dispatch({ type: GET_ORDERS_TEMPORARY_REQUEST })

    fetch(`${BASE_URL}/orders/all`)
      .then(checkResponse)
      .then((res) => {
        console.log(res)
        if (res && res.success) {
          console.log(res)
          dispatch({
            type: GET_ORDERS_TEMPORARY,
            orders: res.orders,
            total: res.total,
            today: res.totalToday
          })
        }
      })
  }
}
