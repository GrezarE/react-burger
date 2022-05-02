import React, { useEffect } from "react";
import { useDispatch } from "../services/hooks";
import { FeedsList } from "../components/feeds-list/feeds-list";
import { Orders } from "../components/orders/orders";
import {
  WS_CONNECTION_START,
  WS_CONNECTION_END,
} from "../services/actions/ws-feed-actions";

export const FeedsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: WS_CONNECTION_START });
    return () => {
      dispatch({ type: WS_CONNECTION_END });
    };
  }, []);

  return (
    <section className="feeds__page">
      <FeedsList />
      <Orders />
    </section>
  );
};
