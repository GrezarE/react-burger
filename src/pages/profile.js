import React, { useEffect } from "react";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./profile.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getLogout } from "../services/actions/logout";
import { getCookie } from "../utils/cookies";
import { userDataUpdate,  userDataUpdateWithoutToken } from "../services/actions/user";

export const Profile = () => {
  const dispatch = useDispatch()
  const { email, userName,  token } = useSelector((state) => state.user);

  const [emailValue, setEmailValue] = React.useState("");
  const [passwordValue, setPasswordValue] = React.useState('');
  const [nameInput, setNameInput] = React.useState("");
  const inputRef = React.useRef(null);

  useEffect(() => {
    setEmailValue(email);
    setNameInput(userName);
  }, []);

  const logoutOnClick = () => {
    const refreshToken = getCookie('refreshToken')
    dispatch(getLogout(refreshToken))
  }

  const userSaveDataOnClick = (e) => {
    e.preventDefault()
    console.log(e)

    const userData = {
      email: emailValue,
      name: nameInput,
      password: passwordValue
    }

    if (!token) {
      const refreshToken = getCookie('refreshToken')
      dispatch(userDataUpdateWithoutToken(userData, refreshToken))

    } else {
      dispatch(userDataUpdate(userData, token))
    }
  }

  const cancelButtonOnClick = (e) => {
    e.stopPropagation()
    e.preventDefault()
    console.log(e)
    setEmailValue(email);
    setNameInput(userName);
    setPasswordValue('')
  }

  return (
    <>
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
          <li className={style.box} onClick={logoutOnClick}>
            <p className={"text text_type_main-medium " + style.grey_text} >
              Выход
            </p>
          </li>
        </ul>
        <form className="authorization__box" onSubmit={(e) => userSaveDataOnClick(e)}>
          <Input
            type={"text"}
            placeholder={"Имя"}
            onChange={(e) => setNameInput(e.target.value)}
            value={nameInput}
            name={"name"}
            ref={inputRef}
            errorText={"Ошибка"}
            icon="EditIcon"
          ></Input>
          <Input
            type={"email"}
            placeholder={"Логин"}
            onChange={(e) => setEmailValue(e.target.value)}
            value={emailValue}
            name={"email"}
            errorText={"Ошибка"}
            icon="EditIcon"
          ></Input>
          <Input
            type={"password"}
            placeholder={"Пароль"}
            onChange={(e) => setPasswordValue(e.target.value)}
            value={passwordValue}
            name={"password"}
            errorText={"Ошибка"}
            icon="EditIcon"
          ></Input>
          <div className={style.button__box}>
            <Button type="primary">Сохранить</Button>
            <Button type="primary" onClick={(e) => cancelButtonOnClick(e)} >Отмена</Button>
          </div>
        </form>
      </section>
    </>
  );
};
