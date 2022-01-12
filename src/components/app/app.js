import React from "react";
import appStyle from "./app.module.css";
import { Header } from "../appHeader/appHeader";
import { BurgerIngredients } from "../burgerIngredients/burgerIngredients.js";
import { BurgerConstructor } from "../burgerConstructor/burgerConstructor";
import  ErrorBoundary  from "../errorBoundary/ErrorBoundary";

const baseUrl = "https://norma.nomoreparties.space/api";

export const App = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const getData = () => {
      fetch(`${baseUrl}/ingredients`)
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
        <BurgerIngredients ingredients={data} />
        <BurgerConstructor data={data} />
      </main>
    </ErrorBoundary>
  );
};
