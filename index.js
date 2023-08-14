import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

let state = {};
window.setState = changes => {
  state = Object.assign({}, state, changes);

  ReactDOM.render(<App {...state} />, document.getElementById("root"));
};

/* eslint no-restricted-globals: 0*/

let initialState = {
  isLoggedIn: false,
  signup: function() {
    window.open(
      "https://auth0.com/signup?utm_source=stackblitz&utm_medium=devsponsor&utm_campaign=stackblitz-react",
      "_blank"
    );
  }
};

window.setState(initialState);
