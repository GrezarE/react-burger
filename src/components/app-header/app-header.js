import headerStyles from "./app-header.module.css";

import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ListIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { NavLink, Link } from "react-router-dom";
import {
  useHistory,
  useLocation,
  useRouteMatch,
  useParams,
} from "react-router-dom";
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

// const NaviText = (props) => {
//   return <p className="pl-2 text text_type_main-default"> {props.children}</p>;
// };

export const Header = () => {
  const history = useHistory();
  const location = useLocation();
  const { path } = useRouteMatch();
  const param = useParams();

  useEffect(() => {
    console.log(history);
    console.log(location);
    console.log(path);
    console.log(param);
  }, [history]);

  const onClickLogin = () => {
    history.replace({ pathname: "/login" });
  };
  const onClickMenu = () => {
    history.replace({ pathname: "/" });
  };
  const onClickProfile = () => {
    history.replace({ pathname: "/profile" });
  };

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
        <NavigationLink onClick={onClickProfile}>
          <ListIcon type={path === "/profile" ? "primary" : "secondary"} />
          <p
            className={
              path === "/profile"
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
        <ProfileIcon type={path === "/login" ? "primary" : "secondary"} />
        <p
          className={
            path === "/login"
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
