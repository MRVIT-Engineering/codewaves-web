import { Switch, Route } from "react-router-dom";
import Homepage from "./views/homepage/Homepage";
import { LoginView } from "./views/auth/LoginView";
import { RegisterView } from "./views/auth/RegisterView";

function App() {
  return (
    <div className="App">
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
