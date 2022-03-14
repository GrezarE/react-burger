
import React, { useEffect } from "react";
import { Header } from "../burger-ingredients/burger-ingredients";
import { Feed } from "../feed.js/feed";
import style from './feeds-list.module.css'
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { OPEN_FEED } from "../../services/actions/feed-view";

export const FeedsList = () => {
  const location = useLocation()
  const dispatch = useDispatch()

  const onClick = (item) => {
    dispatch({ type: OPEN_FEED, view: item._id, number: item.number })
    console.log(item)
  }
  const { orders } = useSelector(state => state.websocket)

  return (
    <section className="pl-2 pr-2">
      <Header>Лента заказов</Header>
      <ul className={style.feeds__list}>
        {orders?.map(item =>
          <Link key={item._id} className={style.link} to={{ pathname: `/feed/${item._id}`, state: { background: location } }} onClick={(e) => onClick(item)}>
            <Feed key={item._id} feed={item} />
          </Link>
        )}
      </ul>

    </section>)
}




















