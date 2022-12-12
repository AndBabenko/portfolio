import React from "react";
import ReactDOM from "react-dom/client";

import App from "./app/App";

const rootElement = document.getElementById("root");
// Может в хук? Точно в хук!
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
