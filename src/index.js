import React from "react";
import { Provider } from "react-redux";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import WebVitals from "../src/utils/WebVitals";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import { store } from "./redux/store";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: WebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
WebVitals();
