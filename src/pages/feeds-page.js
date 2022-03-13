import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FeedsList } from "../components/feeds-list/feeds-list";
import { Orders } from "../components/orders/orders";
import { WS_CONNECTION_START, WS_GET_MESSAGE } from "../services/actions/ws-actions";

export const FeedsPage = () => {
  const dispatch = useDispatch();
  const { email, userName, token, isAuthenticated } = useSelector((state) => state.user);

  const { messages, wsConnected } = useSelector(state => state.websocket)

  useEffect(() => {
    if (isAuthenticated) {
      dispatch({ type: WS_CONNECTION_START });
    }
    console.log(token)
  }, [isAuthenticated])

  useEffect(() => {
    console.log('qwe', wsConnected)
  }, [wsConnected])

  useEffect(() => {
    console.log(messages)
  }, [messages])

  return (
    <section className="feeds__page">
      <FeedsList />
      <Orders />
    </section>)
}
