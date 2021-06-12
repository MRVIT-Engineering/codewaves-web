import { observer } from "mobx-react-lite";
import { Switch, Route } from "react-router-dom";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css/animate.min.css";

import { useStore } from "./hooks/useStore";
import LoginView from "./views/auth/LoginView";
import Homepage from "./views/homepage/Homepage";
import RegisterView from "./views/auth/RegisterView";
import { CoursesView } from "./views/learning/CoursesView";
import HomepageNav from "./components/navigation/HomepageNav";
import { AppContainer } from "./components/containers/AppContainer";

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
          <HomepageNav appView />
          <AppContainer>
            <Switch>
              <Route path="/">
                <CoursesView />
              </Route>
            </Switch>
          </AppContainer>
        </Route>
      </Switch>
    </div>
  );
}

export default observer(App);
