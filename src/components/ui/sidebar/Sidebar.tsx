import React from "react";
import { HashLink } from "react-router-hash-link";

import { UilShareAlt } from "@iconscout/react-unicons";

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar" id="sidebar">
      <nav className="nav">
        <div className="nav__logo">
          <span className="nav__logo-text">A</span>
        </div>
        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <HashLink smooth to="/#home">
                Home
              </HashLink>
            </li>
            <li className="nav__item">
              <HashLink smooth to="#about">
                About
              </HashLink>
            </li>
            <li className="nav__item">
              <HashLink smooth to="#skills">
                Skills
              </HashLink>
            </li>
            <li className="nav__item">
              <HashLink smooth to="#portfolio">
                Portfolio
              </HashLink>
            </li>
            <li className="nav__item">
              <HashLink smooth to="#services">
                Services
              </HashLink>
            </li>
            <li className="nav__item">
              <HashLink smooth to="#contact">
                Contact
              </HashLink>
            </li>
          </ul>
        </div>
        <UilShareAlt className="nav__share" />
      </nav>
    </aside>
  );
};

export default Sidebar;
