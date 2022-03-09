import { OPEN_FEED, CLOSE_FEED } from "../actions/feed-view";

const feedInitState = {
  feedView: ''
}

export const feedReducer = (state = feedInitState, action) => {
  switch (action.type) {
    case OPEN_FEED: {
      return {
        feedView: action.view
      }
    }
    case CLOSE_FEED: {
      return {
        feedView: ''
      }
    }
    default: {
      return state
    }
  }
}
