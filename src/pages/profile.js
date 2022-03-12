import React, { useEffect } from "react";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./profile.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getLogout } from "../services/actions/logout";
import { getCookie } from "../utils/cookies";
import { userDataUpdate, userDataUpdateWithoutToken } from "../services/actions/user";
import { useLocation, useParams, Link, useHistory, useRouteMatch } from "react-router-dom";
import { FeedDetails } from "../components/feed-details/feed-details";
import { Feed } from "../components/feed.js/feed";
import { OPEN_FEED } from "../services/actions/feed-view";

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

export const Profile = () => {
  const dispatch = useDispatch()
  const { email, userName, token } = useSelector((state) => state.user);

  const [emailValue, setEmailValue] = React.useState("");
  const [passwordValue, setPasswordValue] = React.useState('');
  const [nameInput, setNameInput] = React.useState("");
  const inputRef = React.useRef(null);
  const param = useParams()
  const location = useLocation()
  const history = useHistory()
  const match = useRouteMatch()



  useEffect(() => {
    setEmailValue(email);
    setNameInput(userName);
    setPasswordValue('')
  }, []);

  useEffect(() => {
    console.log(param)
    console.log(location)
    console.log(match)
    console.log(getCookie('refreshToken'))
  }, [param])

  const logoutOnClick = () => {
    const refreshToken = getCookie('refreshToken')
    dispatch(getLogout(refreshToken))
  }

  const userSaveDataOnClick = (e) => {
    e.preventDefault()

    const userData = {
      email: emailValue,
      name: nameInput,
      password: passwordValue
    }

    if (!token) {
      const refreshToken = getCookie('refreshToken')
      dispatch(userDataUpdateWithoutToken(userData, refreshToken))

    } else {
      dispatch(userDataUpdate(userData, token))
    }
  }

  const cancelButtonOnClick = (e) => {
    e.stopPropagation()
    e.preventDefault()
    setEmailValue(email);
    setNameInput(userName);
    setPasswordValue('')
  }

  const ordersClick = () => {
    history.replace({ pathname: `/profile/orders` });
  }
  const profileClick = () => {
    history.replace({ pathname: `/profile` });
  }

  const onClick = (item) => {
    dispatch({ type: OPEN_FEED, view: item })
  }

  return (
    <>
      <section className={location.pathname === '/profile' ? style.profile : style.profile__orders}>
        <ul className={style.list}>
          <li className={style.box} onClick={profileClick}>
            <p className={"text text_type_main-medium " + (location.pathname === '/profile' ? '' : style.grey_text)}>Профиль</p>
          </li>
          <li className={style.box} onClick={ordersClick}>
            <p className={"text text_type_main-medium " + (location.pathname === '/profile' ? style.grey_text : '')}>
              История заказов
            </p>
          </li>
          <li className={style.box} onClick={logoutOnClick}>
            <p className={"text text_type_main-medium " + style.grey_text} >
              Выход
            </p>
          </li>
        </ul>
        {location.pathname === '/profile' && <form className="authorization__box" onSubmit={(e) => userSaveDataOnClick(e)}>
          <Input
            type={"text"}
            placeholder={"Имя"}
            onChange={(e) => setNameInput(e.target.value)}
            value={nameInput}
            name={"name"}
            ref={inputRef}
            errorText={"Ошибка"}
            icon="EditIcon"
          ></Input>
          <Input
            type={"email"}
            placeholder={"Логин"}
            onChange={(e) => setEmailValue(e.target.value)}
            value={emailValue}
            name={"email"}
            errorText={"Ошибка"}
            icon="EditIcon"
          ></Input>
          <Input
            type={"password"}
            placeholder={"Пароль"}
            onChange={(e) => setPasswordValue(e.target.value)}
            value={passwordValue}
            name={"password"}
            errorText={"Ошибка"}
            icon="EditIcon"
          ></Input>
          <div className={style.button__box}>
            <Button type="primary">Сохранить</Button>
            <Button type="primary" onClick={(e) => cancelButtonOnClick(e)} >Отмена</Button>
          </div>
        </form>}
        {location.pathname === '/profile/orders' && <ul className={style.feeds__list}>
          {testFeed.orders.map(item =>
            <Link key={item._id} className={style.link} to={{ pathname: `/profile/orders/${item._id}`, state: { background: location } }} onClick={(e) => onClick(item._id)}>
              <Feed key={item._id} feed={item} />
            </Link>
          )}
        </ul>}
      </section>
    </>
  );
};
