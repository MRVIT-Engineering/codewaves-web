import { Route, RouteProps, Redirect } from 'react-router';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';

import { Routes } from '../../constants/routes';

import { Spinner } from '../spinner/Spinner';

const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PrivateAdminRoute = ({ children, ...routeProps }: RouteProps) => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading)
    return (
      <StyledContainer>
        <Spinner />
      </StyledContainer>
    );

  return isAuthenticated ? <Route {...routeProps}>{children}</Route> : <Redirect to={Routes.Admin} />;
};
