import { Route, RouteProps, Redirect } from 'react-router';
import { useAuth0 } from '@auth0/auth0-react';
import { Routes } from '../../constants/routes';
import { Spinner } from '../spinner/Spinner';

export const PrivateAdminRoute = ({ children, ...routeProps }: RouteProps) => {
  const { isAuthenticated, isLoading } = useAuth0();
  console.log('Is Auth0 tenant authenticated', isAuthenticated);

  if (isLoading) return <Spinner />;

  return isAuthenticated ? <Route {...routeProps}>{children}</Route> : <Redirect to={Routes.Admin} />;
};
