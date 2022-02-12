import {
  REMOVE_COMPONENT,
  ADD_COMPONENT,
  CHANGE_BUN,
  SORT_COMPONENT,
  CLEAR_COMPONENTS,
} from "../actions/construct";

const constructorInitialState = {
  components: { buns: "60d3b41abdacab0026a733c7", component: [] },
};

export const constructorReducer = (state = constructorInitialState, action) => {
  switch (action.type) {
    case ADD_COMPONENT: {
      return {
        components: {
          ...state.components,
          component: [...state.components.component].concat(action.id),
        },
      };
    }
    case CHANGE_BUN: {
      console.log(state, action);
      return {
        components: {
          ...state.components,
          buns: action.id,
        },
      };
    }
    case REMOVE_COMPONENT: {
      return {
        components: {
          ...state.components,
          component: [...state.components.component].filter(
            (item, index) => index !== action.index
          ),
        },
      };
    }
    case SORT_COMPONENT: {
      return {
        components: {
          ...state.components,
          component: action.components,
        },
      };
    }
    case CLEAR_COMPONENTS: {
      return {
        components: {
          buns: "60d3b41abdacab0026a733c7",
          component: [],
        },
      };
    }
    default: {
      return state;
    }
  }
};
