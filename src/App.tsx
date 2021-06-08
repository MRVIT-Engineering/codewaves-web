import { observer } from "mobx-react-lite";
import { useStore } from "./hooks/useStore";
import { Switch, Route } from "react-router-dom";

import LoginView from "./views/auth/LoginView";
import Homepage from "./views/homepage/Homepage";
import RegisterView from "./views/auth/RegisterView";
import { CoursesView } from "./views/learning/CoursesView";

import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css/animate.min.css";

function App() {
  const {
    authStore: { isLogInLoading, isRegistrationLoading },
  } = useStore();
  return (
    <div className="App">
      <ReactNotification />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/login">
          <LoginView loading={isLogInLoading} />
        </Route>
        <Route path="/register">
          <RegisterView loading={isRegistrationLoading} />
        </Route>
        <Route path="/learning">
          <CoursesView />
        </Route>
      </Switch>
    </div>
  );
}

export default observer(App);
