import React from "react";
import appStyle from "./app.module.css";
import { Header } from "../app-header/app-header";
import { BurgerIngredients } from "../burger-ingredients/burger-ingredients.js";
import { BurgerConstructor } from "../burger-constructor/burger-constructor";
import ErrorBoundary from "../error-boundary/error-boundary";
import { useDispatch } from "react-redux";
import { getIngredient } from "../../services/actions/burger";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

export const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getIngredient());
  }, [dispatch]);

  return (
    <ErrorBoundary>
      <Header></Header>
      <main className={appStyle.main}>
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients />
          <BurgerConstructor />
        </DndProvider>
      </main>
    </ErrorBoundary>
  );
};
