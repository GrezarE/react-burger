import React, { useEffect } from "react";
import {
  EmailInput,
  PasswordInput,
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Header } from "../components/app-header/app-header";
import { Link, useHistory } from "react-router-dom";
import style from "./profile.module.css";

export const Profile = () => {
  const [emailValue, setEmailValue] = React.useState("");
  const onChangeEmail = (e) => {
    setEmailValue(e.target.value);
  };
  const [passwordValue, setPasswordValue] = React.useState("");
  const onChangePassword = (e) => {
    setPasswordValue(e.target.value);
  };
  const [nameInput, setNameInput] = React.useState("");
  const inputRef = React.useRef(null);
  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0);
    alert("Icon Click Callback");
  };
  

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
            <p className={"text text_type_main-medium " + style.grey_text}>
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
            onIconClick={onIconClick}
          ></Input>
          <EmailInput
            onChange={onChangeEmail}
            value={emailValue}
            name={"email"}
            // className="input_size_large"
          />
          <PasswordInput
            onChange={onChangePassword}
            value={passwordValue}
            name={"password"}
          />
        </div>
      </section>
    </>
  );
};
