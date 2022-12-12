import React from "react";

import icon from "../../../assets/svgs/tech.svg";

import work1 from "../../../assets/imgs/work-1.webp";

const PortfolioPopup = () => {
  return (
    <>
      <div className="portfolio-popup">
        <div className="portfolio-popup__inner">
          <div className="portfolio-popup__content">
            <span className="portfolio-popup__close">
              <img className="icon skills__icon" src={icon} />
            </span>
            <img src={work1} alt="1" className="portfolio-popup__img" />
            <div className="portfolio-popup__main">
              <div className="portfolio-popup__subtitle">Featured-design</div>
              <div className="portfolio-popup__details">
                <h3 className="portfolio-popup__details__title">
                  Special Service for designers
                </h3>
                <p className="portfolio-popup__details__description">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nisi, optio! Cum ullam quos veritatis porro placeat corporis
                  quaerat possimus molestias.
                </p>
                <ul className="portfolio-popup__details__info">
                  <li>
                    Created - <span>4dec 2020</span>
                  </li>
                  <li>
                    Technologies - <span>HTML and SCSS</span>
                  </li>
                  <li>
                    Role - <span>FrontEnd</span>
                  </li>
                  <li>
                    View -
                    <span>
                      <a href="#"> www.domain.com </a>
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
