import { CLOSE_CARD, OPEN_CARD, TView } from "../actions/view";
import { IIngredientType } from "../../utils/types";

type TViewInitialState<T> = {
  readonly openCard: T | string;
};

const viewInitialState: TViewInitialState<IIngredientType> = {
  openCard: ''
};

export const viewReducer = (
  state = viewInitialState,
  action: TView
): TViewInitialState<IIngredientType> => {
  switch (action.type) {
    case OPEN_CARD: {
      return {
        openCard: action.view,
      };
    }
    case CLOSE_CARD: {
      return {
        openCard: "",
      };
    }
    default: {
      return state;
    }
  }
};
