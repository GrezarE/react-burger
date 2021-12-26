import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Header from "./components/appHeader/appHeader";
import BurgerIngredients from "./components/burgerIngredients/burgerIngredients";
import BurgerConstructor from "./components/burgerConstructor/burgerConstructor";

ReactDOM.render(
  <React.StrictMode>
    <Header></Header>
    <main className="page">
      <BurgerIngredients />
      <BurgerConstructor />
    </main>
  </React.StrictMode>,
  document.getElementById("root")
);

