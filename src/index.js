import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import RefContext from "./Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RefContext>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </RefContext>
);
