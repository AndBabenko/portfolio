import React from "react";
import { HashLink } from "react-router-hash-link";

import { UilShareAlt, UilTimes, UilBars } from "@iconscout/react-unicons";

interface SidebarProps {
  currentSection: string;
}

const Sidebar: React.FC<SidebarProps> = ({ currentSection }) => {
  const sectionsArray = [
    "Home",
    "About",
    "Skills",
    "Portfolio",
    "Testimonials",
    "Contact",
  ];

  const sectionsList = sectionsArray.map((item) => {
    const sectionId = item.toLowerCase();
    return (
      <li
        key={sectionId}
        className={`nav__item ${currentSection == sectionId ? "active" : ""}`}
      >
        <HashLink smooth to={`/#${sectionId}`}>
          {item}
        </HashLink>
      </li>
    );
  });

  return (
    <>
      <UilBars className="nav__toggle" id="nav-toggle" />
      <aside className="sidebar sidebar__show" id="sidebar">
        <nav className="nav">
          <div className="nav__logo">
            <span className="nav__logo-text">A</span>
          </div>
          <div className="nav__menu">
            <ul className="nav__list">{sectionsList}</ul>
          </div>
          <UilShareAlt className="nav__share" />

          <UilTimes className="nav__close" id="nav-close" />
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
