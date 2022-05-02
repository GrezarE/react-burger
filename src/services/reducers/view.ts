import { CLOSE_CARD, OPEN_CARD, TView } from "../actions/view";
import { IIngredientType } from "../../utils/types";

type TViewInitialState<T> = {
  readonly openCard: T | null;
};

const viewInitialState: TViewInitialState<IIngredientType> = {
  openCard: null
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
        openCard: null,
      };
    }
    default: {
      return state;
    }
  }
};
