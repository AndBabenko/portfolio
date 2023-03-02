import React from "react";
import styles from "./MainPage.module.scss";

import Sidebar from "modules/Sidebar";
import Home from "modules/Home";
import About from "modules/About";
import Qualification from "modules/Qualification";
import Skills from "modules/Skills";
import Portfolio from "modules/Portfolio";
import Testimonials from "modules/Testimonials";
import Contact from "modules/Contact";
import Footer from "modules/Footer";

const MainPage: React.FC = () => {
  return (
    <div className={styles.mainPage}>
      <Sidebar />
      <Home />
      <About />
      <Qualification />
      <Skills />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default MainPage;
