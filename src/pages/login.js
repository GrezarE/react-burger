import React, { useEffect } from "react";
import {
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./login.module.css";
import { Header } from "../components/app-header/app-header";

export const Login = () => {
  return (
    <>
      <Header />
      <section className={style.login}>
        <div className={style.box}>
          <h1 className={"text text_type_digits-default " + style.header}>
            Вход
          </h1>
        </div>
      </section>
    </>
  );
};
