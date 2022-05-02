import { useEffect } from "react";
import { ProtectedRoute } from "../protected-route/protected-route";
import ErrorBoundary from "../error-boundary/error-boundary";
import { useSelector, useDispatch } from "../../services/hooks";
import { getIngredient } from "../../services/actions/burger";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  useHistory,
} from "react-router-dom";
import {
  Profile,
  ResetPassword,
  ForgotPassword,
  Registration,
  Login,
  MainPage,
  FeedsPage,
} from "../../pages/index";
import { getCookie } from "../../utils/cookies";
import { getUserData } from "../../services/actions/user";
import { Ingredient } from "../../pages/ingredient";
import { Header } from "../app-header/app-header";
import { Modal } from "../modal/modal";
import { CLOSE_FEED } from "../../services/actions/feed-view";
import { FeedDetails } from "../feed-details/feed-details";
import { FeedDetailsPage } from "../../pages/feed-details-page";
import { getOrdersTemporary } from "../../services/actions/feeds-list-temporary";

export const App = () => {
  let location = useLocation<any>();
  const dispatch = useDispatch();
  const history = useHistory();
  const { number } = useSelector((state) => state.feed);

  const background = location.state && location.state?.background;

  useEffect(() => {
    dispatch(getIngredient());
    dispatch(getOrdersTemporary());
  }, [dispatch]);

  useEffect(() => {
    const refreshToken = getCookie("refreshToken");
    if (refreshToken) {
      dispatch(getUserData(refreshToken));
    }
  }, []);

  const onClose = () => {
    history.goBack();
    dispatch({ type: CLOSE_FEED });
  };

  useEffect(() => {
    history.replace({ pathname: location.pathname, state: undefined });
  }, []);

  return (
    <ErrorBoundary>
      <Header />

      <Switch location={background || location}>
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
        <Route path="/feed" exact={true}>
          <FeedsPage />
        </Route>
        <ProtectedRoute path="/profile" exact={true}>
          <Profile />
        </ProtectedRoute>
        <ProtectedRoute path="/profile/orders" exact={true}>
          <Profile />
        </ProtectedRoute>
        <ProtectedRoute path="/profile/orders/:id" exact={true}>
          <FeedDetailsPage />
        </ProtectedRoute>
        <Route path="/ingredients/:id" exact={true}>
          <Ingredient />
        </Route>
        <Route path="/feed/:id" exact={true}>
          <FeedDetailsPage />
        </Route>
      </Switch>
      {background && (
        <ProtectedRoute path="/profile/orders/:id" exact={true}>
          <Modal onClose={onClose} header={`#${number}`}>
            <FeedDetails />
          </Modal>
        </ProtectedRoute>
      )}
      {background && (
        <Route
          path="/feed/:id"
          children={
            <Modal onClose={onClose} header={`#${number}`}>
              <FeedDetails />
            </Modal>
          }
        />
      )}
    </ErrorBoundary>
  );
};
