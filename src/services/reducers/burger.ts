import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAIL,
  TGetIngredients,
} from "../actions/burger";
import { IIngredientType } from "../../utils/types";


interface IInitialState {
  readonly ingredients: Array<IIngredientType>;
  readonly ingredientsRequest: boolean;
  readonly ingredientsFail: boolean;
}

const initialState: IInitialState = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFail: false,
};

export const burgerReducer = (
  state = initialState,
  action: TGetIngredients
) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return {
        ...state,
        ingredientsRequest: true,
      };
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ingredientsRequest: false,
        ingredientsFail: false,
        ingredients: action.items,
      };
    }
    case GET_INGREDIENTS_FAIL: {
      return {
        ingredientsRequest: false,
        ingredientsFail: true,
        ingredients: [],
      };
    }
    default: {
      return state;
    }
  }
};
