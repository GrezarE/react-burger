import { FC } from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "../../services/hooks";

export interface IProtectedRoute {
    // isAuthenticated?: boolean;
    // isAllowed?: boolean;
    // restrictedPath: string;
    // authenticationPath: string;
    path: string
    exact: boolean
}

export const ProtectedRoute: FC<IProtectedRoute> = ({ children, ...rest }) => {
  const { isAuthenticated } = useSelector((state) => state.user);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        )
      }
    />
  );
};
