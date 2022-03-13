import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useEffect, useState } from "react";
import { Header } from "../burger-ingredients/burger-ingredients";
import { Feed } from "../feed.js/feed";
import style from './feeds-list.module.css'
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { OPEN_FEED } from "../../services/actions/feed-view";

export const FeedsList = () => {
  const [data, setData] = useState([1, 2, 3, 4])
  const location = useLocation()
  const dispatch = useDispatch()

  const onClick = (item) => {
    dispatch({ type: OPEN_FEED, view: item })
    console.log(item)
  }

  const {orders, total, totalToday} = useSelector(state => state.temporaryOrder)

  useEffect(() => {
    console.log(orders)
  }, [orders])

  const testFeed = {
    "success": true,
    "orders": [
      {
        "ingredients": [
          "60d3b41abdacab0026a733c6",
          "60d3b41abdacab0026a733c9",
          "60d3b41abdacab0026a733ce",
          "60d3b41abdacab0026a733d1",
          "60d3b41abdacab0026a733d1",
          "60d3b41abdacab0026a733d1",
          "60d3b41abdacab0026a733d1",
          "60d3b41abdacab0026a733d1",
        ],
        "_id": "345",
        "status": "done",
        "number": 0,
        "createdAt": "2021-06-23T14:43:22.587Z",
        "updatedAt": "2021-06-23T14:43:22.603Z"
      },
      {
        "ingredients": [
          "60d3b41abdacab0026a733c6",
          "60d3b41abdacab0026a733c9",
          "60d3b41abdacab0026a733ce",
          "60d3b41abdacab0026a733d1",
          "60d3b41abdacab0026a733d1",
          "60d3b41abdacab0026a733d1",
          "60d3b41abdacab0026a733d1",
          "60d3b41abdacab0026a733d1",
        ],
        "_id": "346",
        "status": "done",
        "number": 0,
        "createdAt": "2021-06-23T14:43:22.587Z",
        "updatedAt": "2021-06-23T14:43:22.603Z"
      }
    ],
    "total": 1,
    "totalToday": 1
  }

  return (
    <section className="pl-2 pr-2">
      <Header>Лента заказов</Header>
      <ul className={style.feeds__list}>
        {orders?.map(item =>
          <Link key={item._id} className={style.link} to={{ pathname: `/feed/${item._id}`, state: { background: location } }} onClick={(e) => onClick(item._id)}>
            <Feed key={item._id} feed={item} />
          </Link>
        )}
        {/* {testFeed.orders.map(item =>
          <Link key={item._id} className={style.link} to={{ pathname: `/feed/${item._id}`, state: { background: location } }} onClick={(e) => onClick(item._id)}>
            <Feed key={item._id} feed={item} />
          </Link>
        )} */}
      </ul>

    </section>)
}




















