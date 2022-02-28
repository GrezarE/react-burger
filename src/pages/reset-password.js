import React, { useEffect } from "react";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Header } from "../components/app-header/app-header";
import { Link, useHistory } from "react-router-dom";

export const ResetPassword = () => {
  const [passwordValue, setPasswordValue] = React.useState("");
  const onChangePassword = (e) => {
    setPasswordValue(e.target.value);
  };
  const [codeInput, setCodeInput] = React.useState("");
  const inputRef = React.useRef(null);
  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0);
    alert("Icon Click Callback");
  };

  return (
    <>
      <Header />
      <section className="input__box">
        <div className="authorization__box">
          <h1 className="mb-6 text text_type_main-medium ">Регистрация</h1>
          <Input
            type="password"
            onChange={onChangePassword}
            value={passwordValue}
            name={"password"}
            placeholder="Введите новый пароль"
          />
          <Input
            type={"text"}
            placeholder={"Введите код из письма"}
            onChange={(e) => setCodeInput(e.target.value)}
            value={codeInput}
            name={"code"}
            ref={inputRef}
            errorText={"Ошибка"}
            onIconClick={onIconClick}
          ></Input>
          <Button>Сохранить</Button>
          <div className="mt-20 input__text-line">
            <p className="text text_type_main-default">Вспомнили пароль?</p>
            <Link
              className="text text_type_main-default input__link"
              to="/login"
            >
              Войти
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
