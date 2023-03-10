import React, { useState } from "react";
import styles from "./Sidebar.module.scss";

import { HashLink } from "react-router-hash-link";
import { UilShareAlt, UilTimes, UilBars } from "@iconscout/react-unicons";

import { sections } from "shared/libs";

//TODO Перенести инициализацию на уровень страницы
// const currentSection = "Home";

interface ISidebarProps {
  currentSection: string;
  setSection: (arg0: string) => void;
}

const Sidebar: React.FC<ISidebarProps> = ({ currentSection, setSection }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  let serializedSections = Object.entries(sections);

  const sectionsList = serializedSections.map((item) => {
    const section = item[1];
    return (
      <li
        onClick={() => setSection(section.id)}
        key={section.id}
        className={`${styles.menuItem} ${
          currentSection == section.id ? styles.active : ""
        }`}
      >
        <HashLink smooth to={`/#${section.id}`}>
          {section.text}
        </HashLink>
      </li>
    );
  });

  const ToggleMenuButton = () => {
    return (
      <button
        className={styles.btnToggle}
        onClick={() => setMenuVisible(!menuVisible)}
      >
        {menuVisible ? <UilTimes /> : <UilBars />}
      </button>
    );
  };

  return (
    <>
      <ToggleMenuButton />
      <aside className={`${styles.sidebar} ${menuVisible ? styles.shown : ""}`}>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <span>A</span>
          </div>
          <div className={styles.menu}>
            <ul>{sectionsList}</ul>
          </div>
          <UilShareAlt className={styles.btnShare} />
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
