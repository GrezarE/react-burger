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
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Main } from "../../pages/main";
import { Login } from "../../pages/login";

export const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getIngredient());
  }, [dispatch]);

  return (
    <ErrorBoundary>
      {/* <Header></Header> */}
      {/* <main className={appStyle.main}> */}
      <Router>
        <Switch>
          <Route path="/" exact={true}>
            <Main />
            {/* <DndProvider backend={HTML5Backend}>
                <BurgerIngredients />
                <BurgerConstructor />
              </DndProvider> */}
          </Route>
          <Route path="/login" exact={true}>
            <Login></Login>
          </Route>
        </Switch>
      </Router>
      {/* </main> */}
    </ErrorBoundary>
  );
};
