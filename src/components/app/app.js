import React from "react";
import appStyle from "./app.module.css";
import { Header } from "../app-header/app-header";
import { BurgerIngredients } from "../burger-ingredients/burger-ingredients.js";
import { BurgerConstructor } from "../burger-constructor/burger-constructor";
import ErrorBoundary from "../error-boundary/error-boundary";
import {
  IngredientsContext,
} from "../../services/ingredientsContext";
import { BASE_URL } from "../../utils/base-url";
import {
  ComponentsDataContext,
} from "../../services/constructorContext";

export const App = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const getData = () => {
      fetch(`${BASE_URL}/ingredients`)
        .then(function (res) {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(`Ошибка: ${res.statusText}`);
        })
        .then((data) => setData(data.data))
        .catch((err) => console.log(err));
    };
    getData();
  }, []);

  const [componentsData] = React.useState({
    buns: ["60d3b41abdacab0026a733c7"],
    components: [
      "60d3b41abdacab0026a733ca",
      "60d3b41abdacab0026a733ce",
      "60d3b41abdacab0026a733d2",
      "60d3b41abdacab0026a733d3",
      "60d3b41abdacab0026a733cd",
    ],
  });

  return (
    <ErrorBoundary>
      <Header></Header>
      <main className={appStyle.main}>
        <IngredientsContext.Provider value={data}>
          <ComponentsDataContext.Provider value={componentsData}>
            <BurgerIngredients />
            <BurgerConstructor />
          </ComponentsDataContext.Provider>
        </IngredientsContext.Provider>
      </main>
    </ErrorBoundary>
  );
};
