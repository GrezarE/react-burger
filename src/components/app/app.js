import React from "react";
import appStyle from "./app.module.css";
import { Header } from "../app-header/app-header";
import { BurgerIngredients } from "../burger-ingredients/burger-ingredients.js";
import { BurgerConstructor } from "../burger-constructor/burger-constructor";
import ErrorBoundary from "../error-boundary/error-boundary";
import {
  IngredientsContext,
  IngredientsContextT,
} from "../../services/ingredientsContext";
import { BASE_URL } from "../../utils/base-url";
import { ConstructorContext } from "../../services/constructorContext";

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

  const [components] = React.useState([
    "60d3b41abdacab0026a733ca",
    "60d3b41abdacab0026a733ce",
    "60d3b41abdacab0026a733d2",
    "60d3b41abdacab0026a733d3",
    "60d3b41abdacab0026a733cd",
  ]);

const [buns] = React.useState(["60d3b41abdacab0026a733c7"])

  // React.useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const res = await fetch(apiUrl);
  //       const data = await res.json();
  //       setApi(data.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getData();
  // }, []);

  return (
    <ErrorBoundary>
      <Header></Header>
      <main className={appStyle.main}>
        <IngredientsContext.Provider value={data}>
          <ConstructorContext.Provider value={components}>
            <IngredientsContextT.Provider value={buns}>
              <BurgerIngredients />
              <BurgerConstructor />
            </IngredientsContextT.Provider>
          </ConstructorContext.Provider>
        </IngredientsContext.Provider>
      </main>
    </ErrorBoundary>
  );
};
