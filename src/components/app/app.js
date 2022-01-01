import React from "react";
import appStyle from "./app.module.css";
import { Header } from "../appHeader/appHeader";
import { BurgerIngredients } from "../burgerIngredients/burgerIngredients.js";
import { BurgerConstructor } from "../burgerConstructor/burgerConstructor";

const apiUrl = "https://norma.nomoreparties.space/api/ingredients";

export const App = () => {
  const [api, setApi] = React.useState([]);

  // React.useEffect(() => {
  //   const getData = () => {
  //     fetch(apiUrl)
  //       .then(function (res) {
  //         if (res.ok) {
  //           return res.json();
  //         }
  //         return Promise.reject(`Ошибка: ${res.statusText}`);
  //       })
  //       .then((data) => setApi(data.data))
  //       .catch((err) => console.log(err));
  //   };
  //   getData();
  // }, []);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setApi(data.data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  React.useEffect(() => console.log(api), [api]);

  return (
    <div>
      <Header></Header>
      <main className={appStyle.main}>
        <BurgerIngredients />
        <BurgerConstructor />
      </main>
    </div>
  );
};
