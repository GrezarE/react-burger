import React, { useEffect } from "react";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, Redirect, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "../services/hooks";
import { passwordReset } from "../services/actions/password-reset";
import { ILocationState } from "../utils/types";

export const ResetPassword = () => {
  const { state } = useLocation<ILocationState>();
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.user);
  const { resetSuccess } = useSelector((state) => state.password);

  const [passwordValue, setPasswordValue] = React.useState<string>("");
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.target.value);
  };
  const [codeInput, setCodeInput] = React.useState<string>("");
  const inputRef = React.useRef<HTMLInputElement>(null);

  const resetPasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordValue && codeInput) {
      const data = {
        password: passwordValue,
        code: codeInput,
      };
      dispatch(passwordReset(data));
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/profile" />;
  }

  if (resetSuccess && !isAuthenticated) {
    return <Redirect to="/login" />;
  }

  if (!isAuthenticated && state?.from.pathname !== "/forgot-password") {
    return <Redirect to="/" />;
  }

  return (
    <>
      <section className="input__box">
        <form
          className="authorization__box"
          onSubmit={() => resetPasswordSubmit}
        >
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
          ></Input>
          <Button onClick={() => resetPasswordSubmit}>Сохранить</Button>
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
