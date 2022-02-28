import headerStyles from "./app-header.module.css";

import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ListIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

const Navigation = (props) => {
  return <nav className={headerStyles.navigation}>{props.children}</nav>;
};

const NavigationLink = (props) => {
  return (
    <div
      className={
        "mt-4 mb-4 mr-2 pl-5 pr-5 " +
        [props.class || headerStyles.navigation__link]
      }
      onClick={() => props.onClick()}
    >
      {props.children}
    </div>
  );
};

const NaviText = (props) => {
  return <p className="pl-2 text text_type_main-default"> {props.children}</p>;
};

export const Header = () => {
  const history = useHistory();

  useEffect(() => {
    console.log(history);
  }, [history]);

  const onClickLogin = () => {
    console.log("qwe");
    history.replace({ pathname: "/login" });
  };
  const onClickMenu = () => {
    history.replace({ pathname: "/" });
  };

  return (
    <header className={headerStyles.header} style={{}}>
      <Navigation>
        <NavigationLink onClick={onClickMenu}>
          <BurgerIcon type="primary" />
          <NaviText>Конструктор</NaviText>
        </NavigationLink>
        <NavigationLink>
          <ListIcon type="primary" />
          <NaviText>Лента&nbsp;заказов</NaviText>
        </NavigationLink>
      </Navigation>
      <Logo />
      <NavigationLink
        class={headerStyles.navigation__link_right}
        onClick={onClickLogin}
      >
        <ProfileIcon type="primary" />
        <NaviText>Личный&nbsp;кабинет</NaviText>
      </NavigationLink>
    </header>
  );
};
