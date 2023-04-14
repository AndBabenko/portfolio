import React, { useState } from "react";
import styles from "./Sidebar.module.scss";

import { HashLink } from "react-router-hash-link";
import { UilTimes, UilBars } from "@iconscout/react-unicons";

import { sections } from "shared/libs";
import logo from "shared/assets/imgs/logo.png";

interface ISidebarProps {
  currentSection: string;
  setSection: (arg0: string) => void;
}

const Sidebar: React.FC<ISidebarProps> = ({ currentSection, setSection }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  let serializedSections = Object.entries(sections);

  const onSectionClickHandler = (id: string) => {
    setSection(id);
    setMenuVisible(false);
  };

  const sectionsList = serializedSections.map((item) => {
    const section = item[1];
    return (
      <li
        onClick={() => onSectionClickHandler(section.id)}
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
        <nav className={styles.sidebarNavigation}>
          <div className={styles.logo}>
            <img src={logo} alt="Logo" />
          </div>
          <div className={styles.menu}>
            <ul>{sectionsList}</ul>
          </div>
          <div></div>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
