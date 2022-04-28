import { CLOSE_CARD, OPEN_CARD, TViev } from "../actions/view";
import { IIngredientType } from "../../utils/type";

type TViewInitialState<T> = {
  readonly openCard: T | string;
};

const viewInitialState: TViewInitialState<IIngredientType> = {
  openCard: ''
};

export const viewReducer = (
  state = viewInitialState,
  action: TViev
): TViewInitialState<IIngredientType> => {
  switch (action.type) {
    case OPEN_CARD: {
      console.log(action.view);
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
