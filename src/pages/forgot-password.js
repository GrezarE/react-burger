import React, { useEffect } from "react";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link,  Redirect, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { passwordForgot } from "../services/actions/password-reset";

export const ForgotPassword = () => {
  const { isAuthenticated } = useSelector(state => state.user)
  const { forgotSuccess } = useSelector(state => state.password)
  const dispatch = useDispatch()

  const [emailValue, setEmailValue] = React.useState("");
  const onChangeEmail = (e) => {
    setEmailValue(e.target.value);
  };
  const location = useLocation()

  useEffect(() => {
    console.log(forgotSuccess)

  }, [forgotSuccess])

  const forgotPasswordSubmit = (e) => {
    e.preventDefault()
    if (emailValue) {
      dispatch(passwordForgot(emailValue))
    }
  };

  if (!isAuthenticated && forgotSuccess) {
    return (
      <Redirect to={{ pathname: '/reset-password', state: { from: location } }} />
    )
  }

  if (isAuthenticated) {
    return (
      <Redirect to='/profile' />
    )
  }

  return (
    <>
      <section className="input__box">
        <form className="authorization__box" onSubmit={(e) => forgotPasswordSubmit(e)}>
          <h1 className="mb-6 text text_type_main-medium ">
            Восстановление пароля
          </h1>
          <Input
            type="email"
            onChange={onChangeEmail}
            value={emailValue}
            name={"email"}
            placeholder="Укажите e-mail"
          />
          <Button >Восстановить</Button>
          <div className="mt-20 input__text-line">
            <p className="text text_type_main-default">Вспомнили пароль?</p>
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
