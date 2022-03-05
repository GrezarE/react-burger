import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

export function ProtectedRoute({ children, ...rest }) {

  const { isAuthenticated } = useSelector(state => state.user)

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (children) : (<Redirect to={{ pathname: '/login', state: { from: location } }} />)
      }
    />
  );
}
