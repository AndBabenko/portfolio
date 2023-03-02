import React, { useState } from "react";
import styles from "./Portfolio.module.scss";

import { UilArrowRight } from "@iconscout/react-unicons";

import { sections, projects } from "shared/libs";
import { projectType } from "shared/libs";

import PortfolioPopup from "components/PortfolioPopup";

const ProjectCard: React.FC<projectType> = (props) => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const { shortName, imageName } = props;
  const image = require(`../../shared/assets/imgs/portfolio/${imageName}`);

  const handlePopupOpen = (
    evt: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    evt.stopPropagation();
    setPopupVisible(true);
  };

  return (
    <div className={styles.card}>
      <img src={image} alt={shortName} />
      <h3>{shortName}</h3>
      <span onClick={handlePopupOpen}>
        Details
        <UilArrowRight className={styles.icon} />
      </span>

      {isPopupVisible && (
        <PortfolioPopup
          popupData={props}
          onClosePopup={() => setPopupVisible(false)}
        />
      )}
    </div>
  );
};

const Portfolio: React.FC = () => {
  const projectsList = projects.map((proj) => (
    <ProjectCard key={proj.id} {...proj} />
  ));

  return (
    <section className={styles.portfolio} id={sections.portfolio.id}>
      <h2 data-heading="Recent Works">My Portfolio</h2>

      <div className={styles.portfolioContainer}>{projectsList}</div>
    </section>
  );
};

export default Portfolio;
