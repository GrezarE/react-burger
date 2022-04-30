import { BASE_URL } from "../../utils/base-url";
import { checkResponse } from "../../utils/check-response";

export const GET_ORDER_REQUEST: "GET_ORDER_REQUEST" = "GET_ORDER_REQUEST";
export const GET_ORDER_SUCCESS: "GET_ORDER_SUCCESS" = "GET_ORDER_SUCCESS";
export const GET_ORDER_FAIL: "GET_ORDER_FAIL" = "GET_ORDER_FAIL";
export const ORDER_CLEAR: "ORDER_CLEAR" = "ORDER_CLEAR";

export interface IGetOrderRequest {
  readonly type: typeof GET_ORDER_REQUEST;
}
export interface IGetOrderSuccess {
  readonly type: typeof GET_ORDER_SUCCESS;
  readonly order: number
}
export interface IGetOrderFail {
  readonly type: typeof GET_ORDER_FAIL;
}
export interface IOrderClear {
  readonly type: typeof ORDER_CLEAR;
}

export type TGetOrder = IGetOrderRequest | IGetOrderSuccess | IGetOrderFail | IOrderClear

export function getOrder(ingredients: any, token: string) {
  return function (dispatch: any) {
    dispatch({
      type: GET_ORDER_REQUEST,
    });
    fetch(`${BASE_URL}/orders`, {
      method: "POST",
      headers: { authorization: token, "Content-Type": "application/json" },
      body: JSON.stringify({
        ingredients: ingredients,
      }),
    })
      .then(checkResponse)
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: GET_ORDER_SUCCESS,
            order: res.order.number,
          });
        } else {
          dispatch({
            type: GET_ORDER_FAIL,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: GET_ORDER_FAIL,
        });
      });
  };
}
