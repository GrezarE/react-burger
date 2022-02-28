import React, { useEffect } from "react";
import {
  EmailInput,
  PasswordInput,
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Header } from "../components/app-header/app-header";
import { Link } from "react-router-dom";

export const Registration = () => {
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
      <section className="input__box">
        <div className="authorization__box">
          <h1 className="mb-6 text text_type_main-medium ">Регистрация</h1>
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
          <Button>Зарегистрироваться</Button>
          <div className="mt-20 input__text-line">
            <p className="text text_type_main-default">Уже зарегистрированы?</p>
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
