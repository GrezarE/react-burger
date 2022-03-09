import headerStyles from "./app-header.module.css";

import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ListIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import {
  useHistory,
  useRouteMatch,
  Link,
  useLocation
} from "react-router-dom";
import { useSelector } from "react-redux";

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
  const { path, url } = useRouteMatch();
  const { pathname } = useLocation()
  const { forgotSuccess } = useSelector(state => state.password)
  // console.log(pathname)


  const onClickLogin = () => {
    history.replace({ pathname: `/profile` });
  };
  const onClickMenu = () => {
    history.replace({ pathname: "/" });
  };
  const onClickFeed = () => {
    history.replace({ pathname: `/feed` });

  };

  const authLinks = [
    '/login', '/forgot-password', '/register', '/profile', '/reset-password'
  ]

  return (
    <header className={headerStyles.header} style={{}}>
      <Navigation>
        <NavigationLink onClick={onClickMenu}>
          <BurgerIcon type={pathname === "/" ? "primary" : "secondary"} />
          <p
            className={
              pathname === "/"
                ? "pl-2 text text_type_main-default"
                : "pl-2 text text_type_main-default text_color_inactive"
            }
          >
            Конструктор
          </p>
        </NavigationLink>
        <NavigationLink onClick={onClickFeed}>
          <ListIcon type={pathname === "/feed" ? "primary" : "secondary"} />
          <p
            className={
              pathname === "/feed"
                ? "pl-2 text text_type_main-default"
                : "pl-2 text text_type_main-default text_color_inactive"
            }
          >
            Лента&nbsp;заказов
          </p>
        </NavigationLink>
      </Navigation>
      <Link to='/'>
        <Logo />
      </Link>
      <NavigationLink
        class={headerStyles.navigation__link_right}
        onClick={onClickLogin}
      >
        <ProfileIcon type={pathname === authLinks.find(item => item === pathname) ? "primary" : "secondary"} />
        <p
          className={
            pathname === authLinks.find(item => item === pathname)
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
