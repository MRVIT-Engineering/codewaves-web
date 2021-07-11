import { ComponentType } from 'react';

import { PrivateRoute } from '../routes/PrivateRoute';
import { AppContainer } from '../containers/AppContainer';
import HomepageNav from '../navigation/HomepageNav';

export const withAuth = <P extends object>(Component: ComponentType<P>) => {
  return ({ ...props }) => (
    <PrivateRoute>
      <Component {...(props as P)} />
    </PrivateRoute>
  );
};

export const withAuthAndNavigation = <P extends object>(Component: ComponentType<P>) => {
  return ({ ...props }) => (
    <PrivateRoute>
      <HomepageNav appView />
      <AppContainer>
        <Component {...(props as P)} />
      </AppContainer>
    </PrivateRoute>
  );
};
