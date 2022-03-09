import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useEffect } from "react";
import { FeedsList } from "../components/feeds-list/feeds-list";
import { Orders } from "../components/orders/orders";




export const FeedsPage = () => {
  return (
    <section className="feeds__page">
      <FeedsList />
      <Orders />
    </section>)
}
