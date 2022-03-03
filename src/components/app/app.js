import React from "react";
// import appStyle from "./app.module.css";
import { Header } from "../app-header/app-header";
import { BurgerIngredients } from "../burger-ingredients/burger-ingredients.js";
import { BurgerConstructor } from "../burger-constructor/burger-constructor";
import ErrorBoundary from "../error-boundary/error-boundary";
import { useDispatch, useSelector } from "react-redux";
import { getIngredient } from "../../services/actions/burger";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MainPage } from "../../pages/main";
import { Login } from "../../pages/login";
import { Registration } from "../../pages/register";
import { ForgotPassword } from "../../pages/forgot-password";
import { ResetPassword } from "../../pages/reset-password";
import { Profile } from "../../pages/profile";

export const App = () => {
  const dispatch = useDispatch();
  const { email, userName, isAuthenticated } = useSelector((state) => state.user);


  React.useEffect(() => {
    dispatch(getIngredient());
  }, [dispatch]);

  return (
    <ErrorBoundary>
      {/* <MainPage /> */}
      {/* <Header></Header> */}
      {/* <DndProvider backend={HTML5Backend}>
        <BurgerIngredients />
        <BurgerConstructor />
      </DndProvider> */}
      <Router>
        <Switch>
          <Route path="/" exact={true}>
            <MainPage />
            {/* <DndProvider backend={HTML5Backend}>
                <BurgerIngredients />
                <BurgerConstructor />
              </DndProvider> */}
          </Route>
          <Route path="/login" exact={true}>
            <Login />
          </Route>
          <Route path="/register" exact={true}>
            <Registration />
          </Route>
          <Route path="/forgot-password" exact={true}>
            <ForgotPassword />
          </Route>
          <Route path="/reset-password" exact={true}>
            <ResetPassword />
          </Route>
          <Route path="/profile" exact={true} component={isAuthenticated ? Profile : Login}>
            {/* <Profile /> */}
          </Route>
        </Switch>
      </Router>
    </ErrorBoundary>
  );
};
