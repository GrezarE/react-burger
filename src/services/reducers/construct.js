import {
  REMOVE_COMPONENT,
  ADD_COMPONENT,
  CHANGE_BUN,
  SORT_COMPONENT,
  CLEAR_COMPONENTS,
} from "../actions/construct";

const constructorInitialState = {
  bun: "",
  components: [],
};

export const constructorReducer = (state = constructorInitialState, action) => {
  switch (action.type) {
    case ADD_COMPONENT: {
      return {
        ...state,
        components: [...state.components].concat({
          id: action.id,
          key: action.key,
        }),
      };
    }
    case CHANGE_BUN: {
      return {
        ...state,
        bun: action.id,
      };
    }
    case REMOVE_COMPONENT: {
      return {
        ...state,
        components: [...state.components].filter(
          (item) => item.key !== action.key
        ),
      };
    }
    case SORT_COMPONENT: {
      return {
        ...state,
        components: action.components,
      };
    }
    case CLEAR_COMPONENTS: {
      return {
        bun: "",
        components: [],
      };
    }
    default: {
      return state;
    }
  }
};
