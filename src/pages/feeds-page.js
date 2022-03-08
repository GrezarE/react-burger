import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useEffect } from "react";
import { FeedsList } from "../components/feeds-list/feeds-list";




export const FeedsPage = () => {
  return (
    <section className="feeds__page">
      <FeedsList />
    </section>)
}
