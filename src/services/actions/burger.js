import { BASE_URL } from "../../utils/base-url";
import { checkResponse } from "../../utils/check-response";

export const GET_INGREDIENTS_REQUEST = "GET_INGREDIENTS_REQUEST";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_FAIL = "GET_INGREDIENTS_FAIL";

export function getIngredient() {
  return function (dispatch) {
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
}
