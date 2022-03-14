import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FeedsList } from "../components/feeds-list/feeds-list";
import { Orders } from "../components/orders/orders";
import { WS_CONNECTION_START, WS_GET_MESSAGE, WS_CONNECTION_END } from "../services/actions/ws-feed-actions";

export const FeedsPage = () => {
  const dispatch = useDispatch();
  const { email, userName, token, isAuthenticated } = useSelector((state) => state.user);

  const { wsConnected, total, orders, totalToday } = useSelector(state => state.websocket)

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     dispatch({ type: WS_CONNECTION_START });
  //   }
  //   console.log(token)
  // }, [isAuthenticated])

  // useEffect(() => {
  //   console.log('qwe', wsConnected)
  // }, [wsConnected])

  useEffect(() => {
    console.log(total, totalToday)
    console.log(orders)
  }, [orders, total, totalToday])

  useEffect(() => {
    console.log('open page')
    dispatch({ type: WS_CONNECTION_START });

    return () => {
      console.log('close page')
      dispatch({ type: WS_CONNECTION_END });

    }
  }, [])

  return (
    <section className="feeds__page">
      <FeedsList />
      <Orders />
    </section>)
}
