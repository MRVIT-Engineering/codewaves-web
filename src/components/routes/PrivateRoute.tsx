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
      const { data, status } = await userApi.checkIfLoggedIn();
      if (status === 200) setIsAuthenticated(data);
    })();
  }, []);

  return isAuthenticated ? <Route {...routeProps}>{children}</Route> : <Redirect to={Routes.Login} />;
};
