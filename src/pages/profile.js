import React, { useEffect, useState } from "react";
import {
  EmailInput,
  PasswordInput,
  Button,
  Input,
  EditIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Header } from "../components/app-header/app-header";
import { Link, useHistory } from "react-router-dom";
import style from "./profile.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getLogout } from "../services/actions/logout";
import { getCookie } from "../utils/cookies";
import { userDataUpdate, tokenUpdate, userDataUpdateWithoutToken } from "../services/actions/user";

export const Profile = () => {
  const dispatch = useDispatch()
  const { email, userName, isAuthenticated, token } = useSelector((state) => state.user);

  const [emailValue, setEmailValue] = React.useState("");
  const [passwordValue, setPasswordValue] = React.useState('');
  const [nameInput, setNameInput] = React.useState("");
  const inputRef = React.useRef(null);

  useEffect(() => {
    setEmailValue(email);
    setNameInput(userName);
  }, []);

  const logoutOnClick = () => {
    const refreshToken = getCookie('refreshToken')
    dispatch(getLogout(refreshToken))
  }

  const userSaveDataOnClick = () => {
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

  const cancelButtonOnClick = () => {
    setEmailValue(email);
    setNameInput(userName);
    setPasswordValue('')
  }

  return (
    <>
      <Header />
      <section className={style.profile}>
        <ul className={style.list}>
          <li className={style.box}>
            <p className="text text_type_main-medium">Профиль</p>
          </li>
          <li className={style.box}>
            <p className={"text text_type_main-medium " + style.grey_text}>
              История заказов
            </p>
          </li>
          <li className={style.box} onClick={logoutOnClick}>
            <p className={"text text_type_main-medium " + style.grey_text} >
              Выход
            </p>
          </li>
        </ul>
        <div className="authorization__box">
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
            <Button onClick={cancelButtonOnClick}>Отмена</Button>
            <Button onClick={userSaveDataOnClick}>Сохранить</Button>
          </div>
        </div>
      </section>
    </>
  );
};
