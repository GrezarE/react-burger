import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAIL,
} from "../actions/burger";

const initialState = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFail: false,

};

export const burgerReducer = (state = initialState, action) => {
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
