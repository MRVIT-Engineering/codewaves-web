import { Route, RouteProps, Redirect } from 'react-router';
import { Routes } from '../../constants/routes';
import { useState, useEffect } from 'react';
import { useStore } from '../../hooks/useStore';

export const PrivateRoute = ({ children, ...routeProps }: RouteProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const {
    appStateStore: { userApi },
  } = useStore();

  useEffect(() => {
    (async function () {
      const response = await userApi.checkIfLoggedIn();
      console.log(response);
      setIsAuthenticated(response);
    })();
  }, []);

  return isAuthenticated ? <Route {...routeProps}>{children}</Route> : <Redirect to={Routes.Login} />;
};
