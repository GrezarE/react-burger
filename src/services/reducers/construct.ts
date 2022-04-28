import {
  REMOVE_COMPONENT,
  ADD_COMPONENT,
  CHANGE_BUN,
  SORT_COMPONENT,
  CLEAR_COMPONENTS,
  TConstruct,
} from "../actions/construct";

type TComponents = {
  readonly id: string;
  readonly key: string;
};

type TConstructorInitialState<T> = {
  bun: string;
  components: Array<T>;
};

const constructorInitialState: TConstructorInitialState<TComponents> = {
  bun: "",
  components: [],
};

export const constructorReducer = (
  state = constructorInitialState,
  action: TConstruct
): TConstructorInitialState<TComponents> => {
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
