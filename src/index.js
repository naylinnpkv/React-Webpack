import React from "react";
import { render } from "react-dom";
import App from "./components/App";

const rootEl = document.getElementById("root");

render(<App />, rootEl);

// Are we in development mode?
if (module.hot) {
  // Whenever a new version of App.js is available
  module.hot.accept("./components/App", function () {
    // Require the new version and render it instead
    var NextApp = require("./components/App");
    ReactDOM.render(<NextApp />, rootEl);
  });
}
