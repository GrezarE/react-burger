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

export const Profile = () => {
  const dispatch = useDispatch()
  const { email, userName, isAuthenticated } = useSelector((state) => state.user);

  const [emailValue, setEmailValue] = React.useState("");
  const [passwordValue, setPasswordValue] = React.useState("********");
  const [nameInput, setNameInput] = React.useState("");
  const inputRef = React.useRef(null);
  // const onIconClick = () => {
  //   setTimeout(() => inputRef.current.focus(), 0);
  //   alert("Icon Click Callback");
  // };
  // const [visible, setVisible] = React.useState(true);

  useEffect(() => {
    setEmailValue(email);
    setNameInput(userName);
  }, [email, userName]);

  const logoutOnClick = () => {
    const token = getCookie('refreshToken')
    console.log(token)
    dispatch(getLogout(token))
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
          <li className={style.box}>
            <p className={"text text_type_main-medium " + style.grey_text} onClick={logoutOnClick}>
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
          // onIconClick={onIconClick}
          ></Input>
          <Input
            type={"email"}
            placeholder={"Логин"}
            onChange={(e) => setEmailValue(e.target.value)}
            value={emailValue}
            name={"email"}
            // ref={inputRef}
            errorText={"Ошибка"}
            icon="EditIcon"
          // onIconClick={onIconClick}
          ></Input>
          <Input
            type={"password"}
            placeholder={"Пароль"}
            onChange={(e) => setPasswordValue(e.target.value)}
            value={passwordValue}
            name={"password"}
            // ref={inputRef}
            errorText={"Ошибка"}
            icon="EditIcon"
          // onIconClick={onIconClick}
          ></Input>
          {/* <EmailInput
            onChange={onChangeEmail}
            value={emailValue}
            name={"email"}
            // className="input_size_large"
          />
          <PasswordInput
            onChange={onChangePassword}
            value={passwordValue}
            name={"password"}
            icon="EditIcon"
          /> */}
        </div>
      </section>
    </>
  );
};
