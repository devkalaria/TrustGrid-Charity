import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { TransactionContextProvider } from "./context/TransactionContext";
import "./index.css";

ReactDOM.render(
  <TransactionContextProvider>
    <App />
  </TransactionContextProvider>,
  document.getElementById("root")
);
