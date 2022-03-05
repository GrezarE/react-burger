import { useEffect } from "react";
import { ProtectedRoute } from "../protected-route/protected-route";
import ErrorBoundary from "../error-boundary/error-boundary";
import { useDispatch } from "react-redux";
import { getIngredient } from "../../services/actions/burger";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Profile, ResetPassword, ForgotPassword, Registration, Login, MainPage } from '../../pages/index'
import { getCookie } from "../../utils/cookies";
import { getUserData } from "../../services/actions/user";
import { Ingredient } from "../../pages/ingredient";

export const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredient());
  }, [dispatch]);

  useEffect(() => {
    const refreshToken = getCookie('refreshToken')
    if (refreshToken) {
      dispatch(getUserData(refreshToken))
    }
  }, [])

  return (
    <ErrorBoundary>
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
          <Route path={`/ingredients/:id`} exact={true}>
            <Ingredient />
          </Route>
        </Switch>
      </Router>
    </ErrorBoundary>
  );
};
