import { Switch, Route } from "react-router-dom";

import Homepage from "./views/homepage/homepage";
import LoginPage from "./views/loginpage/loginpage";
import classes from "./assets/css/Loginpage.module.css";
function App() {
  return (
    <div className="App"  >
      <Switch>
        <Route path="/" exact>        
        </Route>
        <Route path="/login">
          <div className={classes.LoginPage}>
          <LoginPage  />
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
