import React from 'react';

import { Route, Switch } from 'react-router-dom';

import { Routes } from '../constants/routes';

import { useStore } from '../hooks/useStore';
import { AdminScreen } from '../views/admin/AdminScreen';
import LoginView from '../views/auth/LoginView';
import Homepage from '../views/homepage/Homepage';
import RegisterView from '../views/auth/RegisterView';
import { CoursesView } from '../views/learning/CoursesView';
import PlaygroundScreen from '../views/playground/PlaygroundScreen';
import { AdminDashboardScreen } from '../views/admin/AdminDashboardScreen';
// authorization hoc
import { withAdmin } from '../components/hoc/withAdmin';
// import { withAuth } from '../components/hoc/withAuth';
import { withAuthAndNavigation } from '../components/hoc/withAuth';
import { withAdminNavigation } from '../components/hoc/withAdminNavigation';

export const AppRoutes = () => {
  const {
    authStore: { isLogInLoading, isRegistrationLoading },
  } = useStore();

  return (
    <Switch>
      <Route exact path={Routes.Homepage}>
        <Homepage />
      </Route>
      <Route exact path={Routes.Login}>
        <LoginView loading={isLogInLoading} />
      </Route>
      <Route exact path={Routes.Register}>
        <RegisterView loading={isRegistrationLoading} />
      </Route>

      {/* Admin navigation. */}
      <Route exact path={Routes.Admin} component={AdminScreen} />
      <Route exact path={Routes.AdminDashboard} component={withAdmin(withAdminNavigation(AdminDashboardScreen))} />

      {/* Navigation for the actual codewaves app. */}
      <Route exact path={Routes.CourseLibrary} component={withAuthAndNavigation(CoursesView)} />

      <Route exact path={Routes.Playground}>
        <PlaygroundScreen />
      </Route>
    </Switch>
  );
};
