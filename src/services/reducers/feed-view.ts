import { OPEN_FEED, CLOSE_FEED, TFeedView } from "../actions/feed-view";

type TFeedInitState = {
  feedView: string;
  number: string;
};

const feedInitState: TFeedInitState = {
  feedView: "",
  number: "",
};

export const feedReducer = (state = feedInitState, action: TFeedView): TFeedInitState => {
  switch (action.type) {
    case OPEN_FEED: {
      return {
        feedView: action.view,
        number: action.number,
      };
    }
    case CLOSE_FEED: {
      return {
        feedView: "",
        number: "",
      };
    }
    default: {
      return state;
    }
  }
};
