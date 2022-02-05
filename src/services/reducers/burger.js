import {
  ALL_INGREDIENTS,
  CONSTRUCTOR_INGREDIENTS,
  VIEW_INGREDIENTS,
  ORDER,
} from "../actions/burger";
import { components } from "../initData";

const initialState = {
  ingredients: [],

  constructor: components,

  view: {},

  order: null,
};

export const burgerReducer = (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};
