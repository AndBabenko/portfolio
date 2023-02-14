import React, { useEffect, useRef } from "react";

import { UilTimes } from "@iconscout/react-unicons";

const PortfolioPopup = (props: any) => {
  const {
    id,
    shortName,
    longName,
    description,
    date,
    technologies,
    role,
    link,
    onClosePopup,
  } = props;
  const image = require(`../../../assets/imgs/work-${id}.webp`);

  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const _event = event as MouseEvent & {
        path: Node[];
      };

      const target = _event.target as HTMLTextAreaElement;
      if (
        popupRef.current &&
        target &&
        target.className !== "card__button" &&
        target.className !== "card__button-icon" &&
        !_event.composedPath().includes(popupRef.current)
      ) {
        onClosePopup();
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="popup">
        <div className="popup__inner" ref={popupRef}>
          <div className="popup__content">
            <UilTimes className="popup__close" onClick={() => onClosePopup()} />

            <img src={image} alt={longName} className="popup__img" />

            <div className="popup__main">
              <div className="popup__subtitle">{shortName}</div>
              <div className="popup__details">
                <h3 className="popup__title">{longName}</h3>
                <p className="popup__description">{description}</p>
                <ul className="popup__info">
                  <li>
                    Created: <span>{date}</span>
                  </li>
                  <li>
                    Technologies: <span>{technologies}</span>
                  </li>
                  <li>
                    Role: <span>{role}</span>
                  </li>
                  <li>
                    View:
                    <span>
                      <a target="_blank" href={link}>
                        {link}
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioPopup;
