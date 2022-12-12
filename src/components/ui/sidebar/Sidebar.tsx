import React from "react";

import icon from "../../../assets/svgs/tech.svg";

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar" id="sidebar">
      <nav className="nav">
        <div className="nav__logo">
          <a href="index.html" className="nav__text">
            A
          </a>
        </div>
        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item nav__item-active">
              <a href="#home">Home</a>
            </li>
            <li className="nav__item">
              <a href="#about">About</a>
            </li>
            <li className="nav__item">
              <a href="#skills">Skills</a>
            </li>
            <li className="nav__item">
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className="nav__item">
              <a href="#services">Services</a>
            </li>
            <li className="nav__item">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        {/* // TODO add SVG (15:03) */}
        <img className="icon" src={icon}></img>
      </nav>
    </aside>
  );
};

export default Sidebar;
