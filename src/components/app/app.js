import React, { useEffect } from "react";
// import appStyle from "./app.module.css";
import { Header } from "../app-header/app-header";
import { BurgerIngredients } from "../burger-ingredients/burger-ingredients.js";
import { BurgerConstructor } from "../burger-constructor/burger-constructor";
import { ProtectedRoute } from "../protected-route/protected-route";
import ErrorBoundary from "../error-boundary/error-boundary";
import { useDispatch, useSelector } from "react-redux";
import { getIngredient } from "../../services/actions/burger";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Profile, ResetPassword, ForgotPassword, Registration, Login, MainPage } from '../../pages/index'
import { getCookie } from "../../utils/cookies";
import { getUserData } from "../../services/actions/user";

export const App = () => {

  const dispatch = useDispatch();
  const { isAuthenticated, token } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getIngredient());
  }, [dispatch]);

  useEffect(() => {
    const refreshToken = getCookie('refreshToken')
    if (refreshToken) {
      dispatch(getUserData(refreshToken))
    }
  }, [])

  useEffect(() => {
    console.log(token)
    // if (!token) {

    // }
  }, [token])

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
          <ProtectedRoute path="/profile" exact={true}>
            <Profile />
          </ProtectedRoute>
        </Switch>
      </Router>
    </ErrorBoundary>
  );
};
