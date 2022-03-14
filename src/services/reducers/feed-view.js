import { OPEN_FEED, CLOSE_FEED } from "../actions/feed-view";

const feedInitState = {
  feedView: '',
  number: ''
}

export const feedReducer = (state = feedInitState, action) => {
  switch (action.type) {
    case OPEN_FEED: {
      return {
        feedView: action.view,
        number: action.number

      }
    }
    case CLOSE_FEED: {
      return {
        feedView: '',
        number: ''

      }
    }
    default: {
      return state
    }
  }
}
