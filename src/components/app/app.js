import React from "react";
import appStyle from "./app.module.css";
import { Header } from "../app-header/app-header";
import { BurgerIngredients } from "../burger-ingredients/burger-ingredients.js";
import { BurgerConstructor } from "../burger-constructor/burger-constructor";
import  ErrorBoundary  from "../error-boundary/error-boundary";
import { IngredientsContext } from "../../services/ingredientsContext";


const BASE_URL = "https://norma.nomoreparties.space/api";

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
        <BurgerIngredients/>
        <BurgerConstructor />
        </IngredientsContext.Provider>
      </main>
    </ErrorBoundary>
  );
};
