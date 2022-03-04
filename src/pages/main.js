import React, { useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { getCookie } from "../utils/cookies";
// import { useHistory, useLocation, useRouteMatch } from "react-router-dom";

import { BurgerIngredients } from "../components/burger-ingredients/burger-ingredients";
import { BurgerConstructor } from "../components/burger-constructor/burger-constructor";
import { Header } from "../components/app-header/app-header";
import { useSelector } from "react-redux";

export const MainPage = () => {
  const { userName, email, token } = useSelector(state => state.user)

  // const qwe = getCookie('refreshToken')
  // console.log(qwe)

  // const location = useLocation();
  // const match = useRouteMatch();

  // const history = useHistory();
  // useEffect(() => {
  //   // console.log(history);
  //   // console.log(location);
  //   // console.log(match);
  // }, [history, location]);
  // console.log(userName, email, token)

  return (
    <>
      <Header />

      <DndProvider backend={HTML5Backend}>
        <section className="main__screen">
          <BurgerIngredients />
          <BurgerConstructor />
        </section>
      </DndProvider>
    </>
  );
};
