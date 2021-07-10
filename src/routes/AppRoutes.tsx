import React from "react";

import { Route, Switch } from "react-router-dom";

import { Routes } from "../constants/routes";

import { useStore } from "../hooks/useStore";
import { AdminNavHoc } from "../components/hoc/AdminNavHoc";
import { PrivateAdminRoute } from "../components/routes/ProtectedAdminRoute";
import { AppContainer } from "../components/containers/AppContainer";
import { AdminScreen } from "../views/admin/AdminScreen";
import LoginView from "../views/auth/LoginView";
import Homepage from "../views/homepage/Homepage";
import RegisterView from "../views/auth/RegisterView";
import HomepageNav from "../components/navigation/HomepageNav";
import { CoursesView } from "../views/learning/CoursesView";
import PlaygroundScreen from "../views/playground/PlaygroundScreen";
// authorization hoc
import { withAdmin } from "../components/hoc/withAdmin";
import { AdminDashboardScreen } from "../views/admin/AdminDashboardScreen";

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
      <Route exact path={Routes.Admin} component={withAdmin(AdminScreen)} />
      <Route
        exact
        path={Routes.AdminDashboard}
        component={withAdmin(AdminDashboardScreen)}
      />
      {/* <Route exact path={Routes.Admin}>
        <AdminScreen />
      </Route>
      <PrivateAdminRoute exact path={Routes.AdminDashboard}>
        <AdminNavHoc>General codewaves.io stats</AdminNavHoc>
      </PrivateAdminRoute>
      <PrivateAdminRoute exact path={Routes.AdminCourses}>
        <AdminNavHoc>Codewaves.io courses</AdminNavHoc>
      </PrivateAdminRoute>
      <PrivateAdminRoute exact path={Routes.AdminAddCourse}>
        <AdminNavHoc>Add new codewaves.io course</AdminNavHoc>
      </PrivateAdminRoute>
      <PrivateAdminRoute exact path={Routes.AdminAlgos}>
        <AdminNavHoc>Codewaves.io algo list</AdminNavHoc>
      </PrivateAdminRoute>
      <PrivateAdminRoute exact path={Routes.AdminAddAlgo}>
        <AdminNavHoc>Add new algo.</AdminNavHoc>
      </PrivateAdminRoute>
      <PrivateAdminRoute exact path={Routes.AdminProblems}>
        <AdminNavHoc>Codewaves algo problems.</AdminNavHoc>
      </PrivateAdminRoute>
      <PrivateAdminRoute exact path={Routes.AdminAddProblem}>
        <AdminNavHoc>Add codewaves.io problem</AdminNavHoc>
      </PrivateAdminRoute> */}

      {/* Navigation for the actual codewaves app. */}
      <Route path={Routes.CourseLibrary}>
        <HomepageNav appView />
        <AppContainer>
          <Route exact path={Routes.CourseLibrary}>
            <CoursesView />
          </Route>
        </AppContainer>
      </Route>
      <Route exact path={Routes.Playground}>
        <PlaygroundScreen />
      </Route>
    </Switch>
  );
};
