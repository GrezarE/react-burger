import React from "react";
import headerStyles from "./appHeader.module.css";

import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ListIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";

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
    >
      {props.children}
    </div>
  );
};

const NaviText = (props) => {
  return <p className="pl-2 text text_type_main-default"> {props.children}</p>;
};

export const Header = () => {
  return (
    <header className={headerStyles.header} style={{}}>
      <Navigation>
        <NavigationLink>
          <BurgerIcon type="primary" />
          <NaviText>Конструктор</NaviText>
        </NavigationLink>
        <NavigationLink>
          <ListIcon type="primary" />
          <NaviText>Лента&nbsp;заказов</NaviText>
        </NavigationLink>
      </Navigation>
      <Logo />
      <NavigationLink class={headerStyles.navigation__link_right}>
        <ProfileIcon type="primary" />
        <NaviText>Личный&nbsp;кабинет</NaviText>
      </NavigationLink>
    </header>
  );
};

// export default class Header extends React.Component {
//   render() {
//     return (
//       <header className={headerStyles.header} style={{}}>
//         <Navigation>
//           <NavigationLink>
//             <BurgerIcon type="primary" />
//             <NaviText>Конструктор</NaviText>
//           </NavigationLink>
//           <NavigationLink>
//             <ListIcon type="primary" />
//             <NaviText>Лента&nbsp;заказов</NaviText>
//           </NavigationLink>
//         </Navigation>
//         <Logo />
//         <NavigationLink class={headerStyles.navigation__link_right}>
//           <ProfileIcon type="primary" />
//           <NaviText>Личный&nbsp;кабинет</NaviText>
//         </NavigationLink>
//       </header>
//     );
//   }
// }
