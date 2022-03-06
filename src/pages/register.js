import React from "react";
import {
  EmailInput,
  PasswordInput,
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link,  Redirect } from "react-router-dom";
import { useDispatch, useSelector, } from "react-redux";
import { getRegistration } from "../services/actions/register";

export const Registration = () => {
  const dispatch = useDispatch()
  const { isAuthenticated } = useSelector(state => state.user)

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

  const registerOnClick = (e) => {
    e.preventDefault()

    const registerData = {
      email: emailValue,
      password: passwordValue,
      name: nameInput
    }
    dispatch(getRegistration(registerData))
  }

  if (isAuthenticated) {
    return (
      <Redirect to='/' />
    )
  }

  return (
    <>
      <section className="input__box">
        <form className="authorization__box" onSubmit={(e) => registerOnClick(e)}>
          <h1 className="mb-6 text text_type_main-medium ">Регистрация</h1>
          <Input
            type={"text"}
            placeholder={"Имя"}
            onChange={(e) => setNameInput(e.target.value)}
            value={nameInput}
            name={"name"}
            ref={inputRef}
            errorText={"Ошибка"}
          ></Input>
          <EmailInput
            onChange={onChangeEmail}
            value={emailValue}
            name={"email"}
          />
          <PasswordInput
            onChange={onChangePassword}
            value={passwordValue}
            name={"password"}
          />
          <Button >Зарегистрироваться</Button>
          <div className="mt-20 input__text-line">
            <p className="text text_type_main-default">Уже зарегистрированы?</p>
            <Link
              className="text text_type_main-default input__link"
              to="/login"
            >
              Войти
            </Link>
          </div>
        </form>
      </section>
    </>
  );
};
