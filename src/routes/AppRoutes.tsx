import { Route, Switch } from 'react-router-dom';

import { Routes } from '../constants/routes';

import AdminEditCourseScreen from '../screens/admin/AdminCourseEdit';
import PlaygroundScreen from '../screens/playground/PlaygroundScreen';
import PlaygroundsScreen from '../screens/playground/PlaygroundsScreen';
import CoursePreview from '../screens/admin/CoursePreview';
import LoginView from '../screens/auth/LoginView';
import Homepage from '../screens/homepage/Homepage';
import RegisterView from '../screens/auth/RegisterView';
import QuizzPreview from '../screens/admin/QuizzPreview';
import AddLectureScreen from '../screens/admin/AddLecture';
import AdminAlgosScreen from '../screens/admin/AlgosScreen';
import AlgoPreviewScreen from '../screens/admin/AlgoPreviewScreen';
import AddAlgoScreen from '../screens/admin/AddAlgoScreen';
import CompilerPlaygroundScreen from '../screens/playground/CompilerPlaygroundScreen';
import { useStore } from '../hooks/useStore';
import { AdminScreen } from '../screens/admin/AdminScreen';
import { CoursesList } from '../screens/admin/CoursesList';
import { CoursesView } from '../screens/learning/CoursesView';
import { AdminDashboardScreen } from '../screens/admin/AdminDashboardScreen';
import { AdminAddCourseScreen } from '../screens/admin/AdminAddCourse';
import { AdminQuizzesScreen } from '../screens/admin/AdminQuizzes';
import { AddQuizzScreen } from '../screens/admin/AddQuizz';
// authorization hoc
import { withAdmin } from '../components/hoc/withAdmin';
import { withAuthAndNavigation } from '../components/hoc/withAuth';
import { withAdminNavigation } from '../components/hoc/withAdminNavigation';
import TestScreen from '../screens/TestScreen';
import { NotFoundScreen } from '../screens/404';

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
      <Route
        exact
        path={Routes.AdminDashboard}
        component={withAdmin(withAdminNavigation(AdminDashboardScreen))}
      />
      <Route
        exact
        path={Routes.AdminAddCourse}
        component={withAdmin(withAdminNavigation(AdminAddCourseScreen))}
      />
      <Route exact path={Routes.AdminGetCourses} component={withAdmin(withAdminNavigation(CoursesList))} />
      <Route
        exact
        path={`${Routes.CoursePreview}/:id`}
        component={withAdmin(withAdminNavigation(CoursePreview))}
      />
      <Route
        exact
        path={`${Routes.CourseEdit}/:id`}
        component={withAdmin(withAdminNavigation(AdminEditCourseScreen))}
      />
      <Route
        exact
        path={`${Routes.AddLecture}/:id`}
        component={withAdmin(withAdminNavigation(AddLectureScreen))}
      />
      <Route
        exact
        path={Routes.AdminQuizzes}
        component={withAdmin(withAdminNavigation(AdminQuizzesScreen))}
      />
      <Route exact path={Routes.AddQuizz} component={withAdmin(withAdminNavigation(AddQuizzScreen))} />
      <Route
        exact
        path={`${Routes.QuizzPreview}/:id`}
        component={withAdmin(withAdminNavigation(QuizzPreview))}
      />
      <Route exact path={Routes.AdminAlgos} component={withAdmin(withAdminNavigation(AdminAlgosScreen))} />
      <Route exact path={Routes.AdminAddAlgo} component={withAdmin(withAdminNavigation(AddAlgoScreen))} />
      <Route
        exact
        path={`${Routes.AdminAlgoPreview}/:id`}
        component={withAdmin(withAdminNavigation(AlgoPreviewScreen))}
      />

      {/* Navigation for the actual codewaves app. */}
      <Route exact path={Routes.CourseLibrary} component={withAuthAndNavigation(CoursesView)} />
      <Route exact path={Routes.Playgrounds} component={withAuthAndNavigation(PlaygroundsScreen)} />

      <Route exact path={Routes.Playground} component={PlaygroundScreen} />
      <Route exact path={`${Routes.CompilerPlayground}/:id`} component={CompilerPlaygroundScreen} />
      <Route exact path={Routes.TestScreen} component={TestScreen} />

      {/* 404 Screen */}
      <Route component={NotFoundScreen} />
    </Switch>
  );
};
