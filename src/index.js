import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Employees from "./employees/employees";

ReactDOM.render(<Employees />, document.getElementById("root"));

serviceWorker.unregister();
