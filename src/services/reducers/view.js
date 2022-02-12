import { CLOSE_CARD, OPEN_CARD } from "../actions/view";

const viewInitialState = {
  openCard: null,
};

export const viewReducer = (state = viewInitialState, action) => {
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
