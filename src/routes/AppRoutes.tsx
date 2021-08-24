import React from 'react';

import { Route, Switch } from 'react-router-dom';

import { Routes } from '../constants/routes';

import AdminEditCourseScreen from '../views/admin/AdminCourseEdit';
import PlaygroundScreen from '../views/playground/PlaygroundScreen';
import CoursePreview from '../views/admin/CoursePreview';
import LoginView from '../views/auth/LoginView';
import Homepage from '../views/homepage/Homepage';
import RegisterView from '../views/auth/RegisterView';
import QuizzPreview from '../views/admin/QuizzPreview';
import AddLectureScreen from '../views/admin/AddLecture';
import AdminAlgosScreen from '../views/admin/AlgosScreen';
import AlgoPreviewScreen from '../views/admin/AlgoPreviewScreen';
import AddAlgoScreen from '../views/admin/AddAlgoScreen';
import { useStore } from '../hooks/useStore';
import { AdminScreen } from '../views/admin/AdminScreen';
import { CoursesList } from '../views/admin/CoursesList';
import { CoursesView } from '../views/learning/CoursesView';
import { AdminDashboardScreen } from '../views/admin/AdminDashboardScreen';
import { AdminAddCourseScreen } from '../views/admin/AdminAddCourse';
import { AdminQuizzesScreen } from '../views/admin/AdminQuizzes';
import { AddQuizzScreen } from '../views/admin/AddQuizz';
// authorization hoc
import { withAdmin } from '../components/hoc/withAdmin';
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
      <Route exact path={Routes.AdminAddCourse} component={withAdmin(withAdminNavigation(AdminAddCourseScreen))} />
      <Route exact path={Routes.AdminGetCourses} component={withAdmin(withAdminNavigation(CoursesList))} />
      <Route exact path={`${Routes.CoursePreview}/:id`} component={withAdmin(withAdminNavigation(CoursePreview))} />
      <Route
        exact
        path={`${Routes.CourseEdit}/:id`}
        component={withAdmin(withAdminNavigation(AdminEditCourseScreen))}
      />
      <Route exact path={`${Routes.AddLecture}/:id`} component={withAdmin(withAdminNavigation(AddLectureScreen))} />
      <Route exact path={Routes.AdminQuizzes} component={withAdmin(withAdminNavigation(AdminQuizzesScreen))} />
      <Route exact path={Routes.AddQuizz} component={withAdmin(withAdminNavigation(AddQuizzScreen))} />
      <Route exact path={`${Routes.QuizzPreview}/:id`} component={withAdmin(withAdminNavigation(QuizzPreview))} />
      <Route exact path={Routes.AdminAlgos} component={withAdmin(withAdminNavigation(AdminAlgosScreen))} />
      <Route exact path={Routes.AdminAddAlgo} component={withAdmin(withAdminNavigation(AddAlgoScreen))} />
      <Route
        exact
        path={`${Routes.AdminAlgoPreview}/:id`}
        component={withAdmin(withAdminNavigation(AlgoPreviewScreen))}
      />

      {/* Navigation for the actual codewaves app. */}
      <Route exact path={Routes.CourseLibrary} component={withAuthAndNavigation(CoursesView)} />

      <Route exact path={Routes.Playground}>
        <PlaygroundScreen />
      </Route>
    </Switch>
  );
};
