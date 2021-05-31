import { Switch, Route } from "react-router-dom";
import { LoginView } from "./views/auth/LoginView";
import Homepage from "./views/homepage/Homepage";
import RegisterView from "./views/auth/RegisterView";

// Notifications animations.
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css/animate.min.css";

function App() {
  return (
    <div className="App">
      <ReactNotification />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/login">
          <LoginView />
        </Route>
        <Route path="/register">
          <RegisterView />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
