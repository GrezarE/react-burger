import { useEffect } from "react";
import { ProtectedRoute } from "../protected-route/protected-route";
import ErrorBoundary from "../error-boundary/error-boundary";
import { useDispatch, useSelector } from "react-redux";
import { getIngredient } from "../../services/actions/burger";

import { BrowserRouter as Router, Switch, Route, useLocation, useHistory } from "react-router-dom";
import { Profile, ResetPassword, ForgotPassword, Registration, Login, MainPage, FeedsPage } from '../../pages/index'
import { getCookie } from "../../utils/cookies";
import { getUserData } from "../../services/actions/user";
import { Ingredient } from "../../pages/ingredient";
import { Header } from "../app-header/app-header";
import { Modal } from "../modal/modal";
import { CLOSE_FEED } from "../../services/actions/feed-view";
import { FeedDetails } from "../feed-details/feed-details";


export const App = () => {
  let location = useLocation()
  const dispatch = useDispatch();
  const history = useHistory()
  const feed = useSelector(state => state.feed.feedView)

  const background = location.state && location.state.background;

  // useEffect(() => {
  //   console.log(background)
  //   console.log(location)
  //   console.log(feed)
  // }, [background, feed])

  useEffect(() => {
    dispatch(getIngredient());
  }, [dispatch]);

  useEffect(() => {
    const refreshToken = getCookie('refreshToken')
    if (refreshToken) {
      dispatch(getUserData(refreshToken))
    }
  }, [])

  const onClose = (e) => {
    e.preventDefault()
    history.goBack()
    dispatch({ type: CLOSE_FEED })
  }

  return (
    <ErrorBoundary>

      {/* <Router> */}
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
        <Route path="/feed">
          <FeedsPage />
        </Route>
        <ProtectedRoute path="/profile" exact={true}>
          <Profile />
        </ProtectedRoute>
        <Route path="/ingredients/:id" exact={true}>
          <Ingredient />
        </Route>
        {/* <Route></Route> */}
      </Switch>
      {background && <Route path="/feed/:id" children={<Modal onClose={onClose} header={`#${feed}`} ><FeedDetails /></Modal>} />}

      {/* </Router> */}
    </ErrorBoundary>
  );
};
