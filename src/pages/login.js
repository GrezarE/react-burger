import React, { useEffect } from "react";
import {
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Header } from "../components/app-header/app-header";
import { Link, useHistory, Redirect, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getLogin } from "../services/actions/login";

export const Login = () => {
  const { state } = useLocation()
  const { isAuthenticated } = useSelector(state => state.user)

  const dispatch = useDispatch()
  const [emailValue, setEmailValue] = React.useState("");
  const onChangeEmail = (e) => {
    setEmailValue(e.target.value);
  };
  const [passwordValue, setPasswordValue] = React.useState("");
  const onChangePassword = (e) => {
    setPasswordValue(e.target.value);
  };

  const loginOnClick = () => {
    const loginData = {
      email: emailValue,
      password: passwordValue
    }
    dispatch(getLogin(loginData))
  }


  if (isAuthenticated) {
    return (
      <Redirect to={state?.from || '/'} />
    )
  }

  return (
    <>
      <Header />
      <section className="input__box">
        <div className='authorization__box'>
          <h1 className="mb-6 text text_type_main-medium " >
            Вход
          </h1>
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
          <Button onClick={loginOnClick}>Войти</Button>
          <div className="mt-20 input__text-line">
            <p className="text text_type_main-default">
              Вы - новый пользователь?
            </p>
            <Link className="text text_type_main-default input__link" to="/register">
              Зарегистрироваться
            </Link>
          </div>
          <div className="mt-4 input__text-line">
            <p className="text text_type_main-default">Забыли пароль?</p>
            <Link className="text text_type_main-default input__link" to="/forgot-password">
              Восстановить пароль
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
