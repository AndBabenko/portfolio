import React, { useRef, useEffect } from "react";
import styles from "./PortfolioPopup.module.scss";
import { UilTimes } from "@iconscout/react-unicons";

import { projectType } from "shared/libs";

type PopupPropsType = {
  popupData: projectType;
  onClosePopup: (value: React.SetStateAction<boolean>) => void;
};

const PortfolioPopup: React.FC<PopupPropsType> = ({
  popupData,
  onClosePopup,
}) => {
  const popupRef = useRef(null);
  const {
    imageName,
    longName,
    description,
    date,
    technologies,
    role,
    link,
    github,
  } = popupData;

  const image = require(`../../shared/assets/imgs/portfolio/${imageName}`);

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event: MouseEvent) => {
    if (event.target instanceof HTMLSpanElement) {
      return;
    }
    if (popupRef.current && !event.composedPath().includes(popupRef.current)) {
      onClosePopup(false);
    }
  };

  return (
    <div className={styles.popup}>
      <div className={styles.inner} ref={popupRef}>
        <div className={styles.container}>
          <UilTimes
            className={styles.closeIcon}
            onClick={() => onClosePopup(false)}
          />

          <img src={image} alt={longName} />

          <div className={styles.content}>
            <h3>{longName}</h3>
            <p>{description}</p>
            <ul className={styles.details}>
              <li>
                Finished: <span>{date}</span>
              </li>
              <li>
                Technologies: <span>{technologies}</span>
              </li>
              <li>
                Role: <span>{role}</span>
              </li>
              <li>
                Github:
                <span>
                  <a target="_blank" href={github}>
                    Click here for details
                  </a>
                </span>
              </li>
              <li>
                View:
                <span>
                  <a target="_blank" href={link}>
                    Click me!
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPopup;
