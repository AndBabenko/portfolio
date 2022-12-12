import React from "react";

import Sidebar from "./ui/sidebar";

import Home from "./pages/home";
import About from "./pages/about";
import Skills from "./pages/skills";
import Portfolio from "./pages/portfolio";
import Services from "./pages/services";
import Testimonials from "./pages/testimonials";
import Contact from "./pages/contact";

const App = () => {
  return (
    <>
      <Sidebar />
      <main>
        <Home />
        <About />
        <Skills />
        <Portfolio />
        <Services />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
};

export default App;
