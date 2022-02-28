import React, { useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";

import { BurgerIngredients } from "../components/burger-ingredients/burger-ingredients";
import { BurgerConstructor } from "../components/burger-constructor/burger-constructor";
import { Header } from "../components/app-header/app-header";

export const Main = () => {
  const location = useLocation();
  const match = useRouteMatch();

  const history = useHistory();
  useEffect(() => {
    console.log(history);
    console.log(location);
    console.log(match);
  }, [history, location]);

  return (
    <>
      <Header />

      <DndProvider backend={HTML5Backend}>
        <main className="main">
          <BurgerIngredients />
          <BurgerConstructor />
        </main>
      </DndProvider>
    </>
  );
};
