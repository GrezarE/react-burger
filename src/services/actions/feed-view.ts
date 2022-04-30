export const OPEN_FEED: "OPEN_FEED" = "OPEN_FEED";
export const CLOSE_FEED: "CLOSE_FEED" = "CLOSE_FEED";

export interface IOpenFeed {
  readonly type: typeof OPEN_FEED;
  readonly number: number;
  readonly view: string
}

export interface ICloseFeed {
  readonly type: typeof CLOSE_FEED
}

export type TFeedView = | IOpenFeed | ICloseFeed


