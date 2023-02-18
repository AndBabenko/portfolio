import React, { useEffect, useState } from "react";

import Sidebar from "./ui/Sidebar";
import Footer from "./ui/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Portfolio from "./pages/Portfolio";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("section[id]");
    function onSectionChange() {
      const scroll = window.pageYOffset;
      if (sections) {
        sections.forEach((section) => {
          const height = section.offsetHeight;
          const top = section.offsetTop - 50;
          const id = section.getAttribute("id");

          if (id && scroll > top && scroll <= top + height) {
            setCurrentSection(id);
          }
        });
      }
    }

    window.addEventListener("scroll", onSectionChange);
    return () => {
      window.removeEventListener("scroll", onSectionChange);
    };
  }, []);

  return (
    <>
      <Sidebar currentSection={currentSection} />
      <main>
        <Home />
        <About />
        <Skills />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default App;
