import React, { useEffect, useState } from "react";
import styles from "./MainPage.module.scss";

import Sidebar from "modules/Sidebar";
import Home from "modules/Home";
import About from "modules/About";
import Qualification from "modules/Qualification";
import Skills from "modules/Skills";
import Portfolio from "modules/Portfolio";
// import Testimonials from "modules/Testimonials";
import Contact from "modules/Contact";
import Footer from "modules/Footer";

const MainPage: React.FC = () => {
  const [currentSection, setCurrentSection] = useState("home");

  const setSection = (section: string) => {
    setCurrentSection(section);
    history.replaceState(null, "", `#${section}`);
  };

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("section");

    let timeoutId: number | undefined;

    const handleScroll = () => {
      let newCurrentSection: string = "";

      sections.forEach((section: HTMLElement) => {
        const top: number = section.offsetTop;
        const height: number = section.clientHeight;
        const id = section.getAttribute("id") || "";

        if (window.pageYOffset >= top - height / 3) {
          newCurrentSection = id;
        }
      });

      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }

      timeoutId = window.setTimeout(() => {
        setSection(newCurrentSection);
      }, 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      const section = document.getElementById(hash);
      if (section) {
        section.scrollIntoView();
        setSection(hash);
      }
    }
  }, []);

  return (
    <div className={styles.mainPage}>
      <Sidebar setSection={setSection} currentSection={currentSection} />
      <Home />
      <About />
      <Qualification />
      <Skills />
      <Portfolio />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default MainPage;
