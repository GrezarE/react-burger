import headerStyles from "./app-header.module.css";

import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ListIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import {
  useHistory,
  useRouteMatch,
} from "react-router-dom";

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

export const Header = () => {

  const history = useHistory();
  const { path } = useRouteMatch();

  const onClickLogin = () => {
    history.replace({ pathname: `/profile` });
  };
  const onClickMenu = () => {
    history.replace({ pathname: "/" });
  };
  const onClickFeed = () => {
    window.history.pushState({path: '/lock'}, '', '/lock')
  };

  const authLinks = [
    '/login', '/forgot-password', '/register', '/profile', '/reset-password'
  ]

  return (
    <header className={headerStyles.header} style={{}}>
      <Navigation>
        <NavigationLink onClick={onClickMenu}>
          <BurgerIcon type={path === "/" ? "primary" : "secondary"} />
          <p
            className={
              path === "/"
                ? "pl-2 text text_type_main-default"
                : "pl-2 text text_type_main-default text_color_inactive"
            }
          >
            Конструктор
          </p>
        </NavigationLink>
        <NavigationLink onClick={onClickFeed}>
          <ListIcon type={path === "/feed " ? "primary" : "secondary"} />
          <p
            className={
              path === "/feed"
                ? "pl-2 text text_type_main-default"
                : "pl-2 text text_type_main-default text_color_inactive"
            }
          >
            Лента&nbsp;заказов
          </p>
        </NavigationLink>
      </Navigation>
      <Logo />
      <NavigationLink
        class={headerStyles.navigation__link_right}
        onClick={onClickLogin}
      >
        <ProfileIcon type={path === authLinks.find(item => item === path) ? "primary" : "secondary"} />
        <p
          className={
            path === authLinks.find(item => item === path)
              ? "pl-2 text text_type_main-default"
              : "pl-2 text text_type_main-default text_color_inactive"
          }
        >
          Личный&nbsp;кабинет
        </p>
      </NavigationLink>
    </header>
  );
};