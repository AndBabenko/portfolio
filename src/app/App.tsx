import React from "react";

import "./styles/app.scss";
import Aside from "./components/Aside";

const App: React.FC = () => {
  return (
    <div className="app">
      <Aside />
    </div>
  );
};

export default App;
