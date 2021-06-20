import { observer } from "mobx-react-lite";
import { Switch, Route } from "react-router-dom";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css/animate.min.css";

import { Routes } from "./constants/routes";

import { useStore } from "./hooks/useStore";
import LoginView from "./views/auth/LoginView";
import Homepage from "./views/homepage/Homepage";
import RegisterView from "./views/auth/RegisterView";
import { CoursesView } from "./views/learning/CoursesView";
import HomepageNav from "./components/navigation/HomepageNav";
import { AppContainer } from "./components/containers/AppContainer";
import { AdminScreen } from "./views/admin/AdminScreen";
import { AdminNavHoc } from "./components/hoc/AdminNavHoc";
function App() {
  const {
    authStore: { isLogInLoading, isRegistrationLoading },
  } = useStore();

  return (
    <div className="App">
      <ReactNotification />
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
        <Route exact path={Routes.Admin}>
          <AdminScreen />
        </Route>
        <Route exact path={Routes.AdminDashboard}>
          <AdminNavHoc>General codewaves.io stats</AdminNavHoc>
        </Route>
        <Route exact path={Routes.AdminCourses}>
          <AdminNavHoc>Codewaves.io courses</AdminNavHoc>
        </Route>
        <Route exact path={Routes.AdminAddCourse}>
          <AdminNavHoc>Add new codewaves.io course</AdminNavHoc>
        </Route>
        <Route exact path={Routes.AdminAlgos}>
          <AdminNavHoc>Codewaves.io algo list</AdminNavHoc>
        </Route>
        <Route exact path={Routes.AdminAddAlgo}>
          <AdminNavHoc>Add new algo.</AdminNavHoc>
        </Route>
        <Route exact path={Routes.AdminProblems}>
          <AdminNavHoc>Codewaves algo problems.</AdminNavHoc>
        </Route>
        <Route exact path={Routes.AdminAddProblem}>
          <AdminNavHoc>Add codewaves.io problem</AdminNavHoc>
        </Route>

        {/* Navigation for the actual codewaves app. */}
        <Route path={Routes.CourseLibrary}>
          <HomepageNav appView />
          <AppContainer>
            <Route exact path={Routes.CourseLibrary}>
              <CoursesView />
            </Route>
          </AppContainer>
        </Route>
      </Switch>
    </div>
  );
}

export default observer(App);
