import { BASE_URL } from "../../utils/base-url";
import { checkResponse } from "../../utils/check-response";
import { IOrder } from "../../utils/types";

export const GET_ORDERS_TEMPORARY: "GET_ORDERS_TEMPORARY" =
  "GET_ORDERS_TEMPORARY";
export const GET_ORDERS_TEMPORARY_REQUEST: "GET_ORDERS_TEMPORARY_REQUEST" =
  "GET_ORDERS_TEMPORARY_REQUEST";
export const GET_ORDERS_TEMPORARY_FAIL: "GET_ORDERS_TEMPORARY_FAIL" =
  "GET_ORDERS_TEMPORARY_FAIL";

export interface IGetOrders {
  readonly type: typeof GET_ORDERS_TEMPORARY;
  readonly orders: Array<IOrder>;
  readonly total: number;
  readonly today: number;
}
export interface IGetOrdersRequest {
  readonly type: typeof GET_ORDERS_TEMPORARY_REQUEST;
}
export interface IGetOrdersFail {
  readonly type: typeof GET_ORDERS_TEMPORARY_FAIL;
}

export type TGetOrders = IGetOrders | IGetOrdersRequest | IGetOrdersFail;

export function getOrdersTemporary() {
  return function (dispatch: any) {
    dispatch({ type: GET_ORDERS_TEMPORARY_REQUEST });

    fetch(`${BASE_URL}/orders/all`)
      .then(checkResponse)
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: GET_ORDERS_TEMPORARY,
            orders: res.orders,
            total: res.total,
            today: res.totalToday,
          });
        } else {
          dispatch({
            type: GET_ORDERS_TEMPORARY_FAIL,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: GET_ORDERS_TEMPORARY_FAIL,
        });
      });
  };
}
