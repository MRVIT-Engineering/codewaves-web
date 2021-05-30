import { Switch, Route } from "react-router-dom";
import Homepage from "./views/homepage/Homepage";
import { LoginView } from "./views/auth/LoginView";

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
      </Switch>
    </div>
  );
}

export default App;
