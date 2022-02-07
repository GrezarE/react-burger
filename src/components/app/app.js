import React from "react";
import appStyle from "./app.module.css";
import { Header } from "../app-header/app-header";
import { BurgerIngredients } from "../burger-ingredients/burger-ingredients.js";
import { BurgerConstructor } from "../burger-constructor/burger-constructor";
import ErrorBoundary from "../error-boundary/error-boundary";
import { BASE_URL } from "../../utils/base-url";
import { ComponentsDataContext } from "../../services/constructorContext";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getIngredient } from "../../services/actions/burger";

export const App = () => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(getIngredient())
  }, [dispatch])

  return (
    <ErrorBoundary>
      <Header></Header>
      <main className={appStyle.main}>
            <BurgerIngredients />
            <BurgerConstructor />
      </main>
    </ErrorBoundary>
  );
};
