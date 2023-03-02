import "./configs/normalize.scss";
import "./App.module.scss";

import withProviders from "./providers";

import MainPage from "pages/MainPage";

const App = () => {
  return <MainPage />;
};

export default withProviders(App);
