import "./index.html";
import "./types/types";

import React from "react";
import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./components/App";

const rootElement = document.getElementById("root") as HTMLDivElement;
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
