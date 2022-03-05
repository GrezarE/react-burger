import React, { useEffect } from "react";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Header } from "../components/app-header/app-header";
import { Link, useHistory, Redirect, useLocation } from "react-router-dom";
import { BASE_URL } from "../utils/base-url";
import { useSelector } from "react-redux";

export const ResetPassword = () => {
  const history = useHistory();
  const { state } = useLocation()
  const { isAuthenticated } = useSelector(state => state.user)

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

  const resetPasswordClick = () => {
    const sendPost = () => {
      fetch(`${BASE_URL}/password-reset/reset`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          password: passwordValue,
          token: codeInput,
        }),
      })
        .then(function (res) {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(res);
        })
        .then((res) => {
          if (res && res.success) {
            history.replace({ pathname: "/login" });
          }
        })
        .catch((res) => {
          return res.json()
        }).then((res) => {
          console.log(res.message)
          alert(res.message)
        })
    };

    if (passwordValue && codeInput) {
      sendPost();
    }
  };

  if (isAuthenticated) {
    return (
      <Redirect to='/profile' />
    )
  }

  if (!isAuthenticated && state?.from.pathname !== '/forgot-password') {
    return (
      <Redirect to='/' />
    )
  }

  return (
    <>
      <Header />
      <section className="input__box">
        <div className="authorization__box">
          <h1 className="mb-6 text text_type_main-medium ">
            Восстановление пароля
          </h1>
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
          <Button onClick={resetPasswordClick}>Сохранить</Button>
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
