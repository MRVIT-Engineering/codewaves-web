import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

import App from "./App";
import "./index.css";

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Auth0Provider
        domain={process.env.REACT_APP_AUTH0_DOMAIN}
        clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
        redirectUri={"http://localhost:3000/admin/dashboard"}
      >
        <App />
      </Auth0Provider>
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);

reportWebVitals();
