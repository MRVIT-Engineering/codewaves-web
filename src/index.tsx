import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8081";
axios.defaults.withCredentials = true;

axios.interceptors.response.use((response) => {
  if (response.status === 401) {
    console.log("[interceptors]: we need to redirect to the login page.");
    let history = useHistory();
    history.push("/login");
  }
  return response;
});

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
