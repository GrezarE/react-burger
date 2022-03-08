import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useEffect, useState } from "react";
import { Header } from "../burger-ingredients/burger-ingredients";
import { Feed } from "../feed.js/feed";
import style from './feeds-list.module.css'

export const FeedsList = () => {
  const [data, setData] = useState([1,2,3,4])

  return (
    <section className="pl-2 pr-2">
      <Header>Лента заказов</Header>
      <ul className={style.feeds__list}>
        {data.map(item => <Feed key={item}/>)}
      </ul>

    </section>)
}




















