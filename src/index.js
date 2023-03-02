import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./router/Router";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Router />);
