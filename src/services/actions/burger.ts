import { BASE_URL } from "../../utils/base-url";
import { checkResponse } from "../../utils/check-response";
import { AppDispatch, AppThunk } from "../types";

export const GET_INGREDIENTS_REQUEST: "GET_INGREDIENTS_REQUEST" =
  "GET_INGREDIENTS_REQUEST";
export const GET_INGREDIENTS_SUCCESS: "GET_INGREDIENTS_SUCCESS" =
  "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_FAIL: "GET_INGREDIENTS_FAIL" =
  "GET_INGREDIENTS_FAIL";

export interface IGetIngredientsSuccess {
  readonly type: typeof GET_INGREDIENTS_SUCCESS;
  readonly items: [];
}
export interface IGetIngredientsFail {
  readonly type: typeof GET_INGREDIENTS_FAIL;
}
export interface IGetIngredientsRequest {
  readonly type: typeof GET_INGREDIENTS_REQUEST;
}

export type TGetIngredients =
  | IGetIngredientsSuccess
  | IGetIngredientsFail
  | IGetIngredientsRequest;

export const getIngredient: AppThunk = () =>
  function (dispatch: AppDispatch) {
    dispatch({
      type: GET_INGREDIENTS_REQUEST,
    });
    fetch(`${BASE_URL}/ingredients`)
      .then(checkResponse)
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: GET_INGREDIENTS_SUCCESS,
            items: res.data,
          });
        } else {
          dispatch({
            type: GET_INGREDIENTS_FAIL,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: GET_INGREDIENTS_FAIL,
        });
      });
  };
