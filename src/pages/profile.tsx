import React, { useEffect } from "react";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./profile.module.css";
import { useSelector, useDispatch } from "../services/hooks";
import { getLogout } from "../services/actions/logout";
import { getCookie } from "../utils/cookies";
import {
  userDataUpdate,
  userDataUpdateWithoutToken,
} from "../services/actions/user";
import { useLocation, Link, useHistory } from "react-router-dom";
import { Feed } from "../components/feed.js/feed";
import { OPEN_FEED } from "../services/actions/feed-view";
import {
  WS_CONNECTION_START_ORDER,
  WS_CONNECTION_END,
} from "../services/actions/ws-feed-actions";
import { ILocationState, IOrder } from "../utils/types";


export const Profile = () => {
  const dispatch = useDispatch();
  const { email, userName, token } = useSelector((state) => state.user);
  const { orders } = useSelector((state) => state.websocket);

  const [emailValue, setEmailValue] = React.useState<string>("");
  const [passwordValue, setPasswordValue] = React.useState<string>("");
  const [nameInput, setNameInput] = React.useState<string>("");
  const inputRef = React.useRef<HTMLInputElement>(null);
  const location = useLocation<ILocationState>();
  const history = useHistory();

  useEffect(() => {
    if (location.pathname === "/profile/orders") {
      dispatch({ type: WS_CONNECTION_START_ORDER });
      return () => {
        dispatch({ type: WS_CONNECTION_END });
      };
    }
  }, [location.pathname]);

  useEffect(() => {
    setEmailValue(email);
    setNameInput(userName);
    setPasswordValue("");
  }, []);

  const logoutOnClick = () => {
    const refreshToken = getCookie("refreshToken");
    dispatch(getLogout(refreshToken));
  };

  const userSaveDataOnClick = (e: React.FormEvent) => {
    e.preventDefault();

    const userData = {
      email: emailValue,
      name: nameInput,
      password: passwordValue,
    };

    if (!token) {
      const refreshToken = getCookie("refreshToken");
      dispatch(userDataUpdateWithoutToken(userData, refreshToken));
    } else {
      dispatch(userDataUpdate(userData, token));
    }
  };

  const cancelButtonOnClick = (e: React.ChangeEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    setEmailValue(email);
    setNameInput(userName);
    setPasswordValue("");
  };

  const ordersClick = () => {
    history.replace({ pathname: `/profile/orders` });
  };
  const profileClick = () => {
    history.replace({ pathname: `/profile` });
  };

  const onClick = (item: IOrder) => {
    dispatch({ type: OPEN_FEED, view: item._id, number: item.number });
  };

  return (
    <>
      <section
        className={
          location.pathname === "/profile"
            ? style.profile
            : style.profile__orders
        }
      >
        <ul className={style.list}>
          <li className={style.box} onClick={profileClick}>
            <p
              className={
                "text text_type_main-medium " +
                (location.pathname === "/profile" ? "" : style.grey_text)
              }
            >
              Профиль
            </p>
          </li>
          <li className={style.box} onClick={ordersClick}>
            <p
              className={
                "text text_type_main-medium " +
                (location.pathname === "/profile" ? style.grey_text : "")
              }
            >
              История заказов
            </p>
          </li>
          <li className={style.box} onClick={logoutOnClick}>
            <p className={"text text_type_main-medium " + style.grey_text}>
              Выход
            </p>
          </li>
        </ul>
        {location.pathname === "/profile" && (
          <form
            className="authorization__box"
            onSubmit={(e) => userSaveDataOnClick(e)}
          >
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
              <Button type="primary" onClick={(e) => cancelButtonOnClick}>
                Отмена
              </Button>
            </div>
          </form>
        )}
        {location.pathname === "/profile/orders" && (
          <ul className={style.feeds__list}>
            {orders?.map((item) => (
              <Link
                key={item._id}
                className={style.link}
                to={{
                  pathname: `/profile/orders/${item._id}`,
                  state: { background: location },
                }}
                onClick={(e) => onClick(item)}
              >
                <Feed key={item._id} feed={item} place="orders" />
              </Link>
            ))}
          </ul>
        )}
      </section>
    </>
  );
};
