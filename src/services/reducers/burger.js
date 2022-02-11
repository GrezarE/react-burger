import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAIL,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAIL,
  ORDER_CLEAR,
  CLOSE_CARD,
  OPEN_CARD,
  REMOVE_COMPONENT,
  ADD_COMPONENT,
  CHANGE_BUN,
  SORT_COMPONENT,
} from "../actions/burger";
import { components } from "../initData";

const initialState = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFail: false,

  components: components,

  openCard: null,

  order: null,
  orderRequest: false,
  orderFail: false,

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
        ...state,
        ingredientsRequest: false,
        ingredientsFail: false,
        ingredients: action.items,
      };
    }
    case GET_INGREDIENTS_FAIL: {
      return {
        ...state,
        ingredientsRequest: false,
        ingredientsFail: true,
      };
    }
    case GET_ORDER_REQUEST: {
      return {
        ...state,
        orderRequest: true,
      };
    }
    case GET_ORDER_SUCCESS: {
      return {
        ...state,
        orderRequest: false,
        orderFail: false,
        order: action.order,
      };
    }
    case GET_ORDER_FAIL: {
      return {
        ...state,
        orderFail: true,
        orderRequest: false,
        order: "",
      };
    }
    case ORDER_CLEAR: {
      return {
        ...state,
        order: "",
      };
    }
    case OPEN_CARD: {
      return {
        ...state,
        openCard: action.view,
      };
    }
    case CLOSE_CARD: {
      return {
        ...state,
        openCard: "",
      };
    }
    case ADD_COMPONENT: {
      return {
        ...state,
        components: {
          ...state.components,
          component: [...state.components.component].concat(action.id),
        },
      };
    }
    case CHANGE_BUN: {
      return {
        ...state,
        components: {
          ...state.components,
          buns: action.id,
        },
      };
    }
    case REMOVE_COMPONENT: {
      return {
        ...state,
        components: {
          ...state.components,
          component: [...state.components.component].filter(
            (index) => index !== action.index
          ),
        },
      };
    }
    case SORT_COMPONENT: {
      return {
        ...state,
        components: {
          ...state.components,
          component: action.components,
        },
      };
    }
    default: {
      return state;
    }
  }
};
