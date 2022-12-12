import React, { useEffect } from "react";
import mixitup from "mixitup";

import icon from "../../../assets/svgs/tech.svg";

import work1 from "../../../assets/imgs/work-1.webp";
import work2 from "../../../assets/imgs/work-2.webp";
import work3 from "../../../assets/imgs/work-3.webp";
import work4 from "../../../assets/imgs/work-4.webp";
import work5 from "../../../assets/imgs/work-5.webp";
import work6 from "../../../assets/imgs/work-6.webp";

import PortfolioPopup from "../../ui/portfolio-popup";

const Portfolio = () => {
  useEffect(() => {
    let mixerPortfolio = mixitup(".portfolio__container", {
      selectors: {
        target: ".portfolio__card",
      },
      animation: {
        duration: 300,
      },
    });
    const linkWork = document.querySelectorAll(".portfolio__item");

    const activeWork = function (this: any) {
      linkWork.forEach((item) => item.classList.remove("active"));
      this.classList.add("active");
    };

    linkWork.forEach((link) => link.addEventListener("click", activeWork));
  }, []);

  return (
    <>
      <section className="portfolio section" id="portfolio">
        <h2 className="section__title" data-heading="Recent Works">
          My Portfolio
        </h2>
        {/* //TODO Фильтр сделан на data-filter в меню, классе mix в списке фильтруемых элементов и классе, что соответствует data-filter. Ну и функции-конфигураторе что импортируется из npm install mixitup --save-dev. А ещё пришлось задекларировать модуль. А про код в юзЭффекте я молчу. Короче, перепишу */}
        <div className="portfolio__filters">
          <span className="portfolio__item active" data-filter="all">
            All
          </span>
          <span className="portfolio__item" data-filter=".web">
            Web
          </span>
          <span className="portfolio__item" data-filter=".app">
            App
          </span>
          <span className="portfolio__item" data-filter=".design">
            Design
          </span>
        </div>

        <div className="portfolio__container container">
          <div className="portfolio__card mix web">
            <img src={work1} alt="1" className="portfolio__img" />
            <h3 className="portfolio__title">Web Design</h3>
            <span className="portfolio__button">
              Demo <img className="icon skills__icon" src={icon} />
            </span>
            <div className="portfolio__details">
              <h3 className="portfolio__details__title">
                Special Service for designers
              </h3>
              <p className="portfolio__details__description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi,
                optio! Cum ullam quos veritatis porro placeat corporis quaerat
                possimus molestias.
              </p>
              <ul className="portfolio__details__info">
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
                    <a href="#">Text</a>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="portfolio__card mix app">
            <img src={work2} alt="1" className="portfolio__img" />
            <h3 className="portfolio__title">App Design</h3>
            <span className="portfolio__button">
              Demo <img className="icon skills__icon" src={icon} />
            </span>
            <div className="portfolio__details">
              <h3 className="portfolio__details__title">
                Mobile Landing App Design
              </h3>
              <p className="portfolio__details__description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi,
                optio! Cum ullam quos veritatis porro placeat corporis quaerat
                possimus molestias.
              </p>
              <ul className="portfolio__details__info">
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
                    <a href="#">Text</a>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="portfolio__card mix design">
            <img src={work3} alt="1" className="portfolio__img" />
            <h3 className="portfolio__title">Brand Design</h3>
            <span className="portfolio__button">
              Demo <img className="icon skills__icon" src={icon} />
            </span>
            <div className="portfolio__details">
              <h3 className="portfolio__details__title">
                Logo design for web and mobile app
              </h3>
              <p className="portfolio__details__description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi,
                optio! Cum ullam quos veritatis porro placeat corporis quaerat
                possimus molestias.
              </p>
              <ul className="portfolio__details__info">
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
                    <a href="#">Text</a>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="portfolio__card mix web">
            <img src={work4} alt="1" className="portfolio__img" />
            <h3 className="portfolio__title">App Design</h3>
            <span className="portfolio__button">
              Demo <img className="icon skills__icon" src={icon} />
            </span>
            <div className="portfolio__details">
              <h3 className="portfolio__details__title">Mobile App Landing</h3>
              <p className="portfolio__details__description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi,
                optio! Cum ullam quos veritatis porro placeat corporis quaerat
                possimus molestias.
              </p>
              <ul className="portfolio__details__info">
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
                    <a href="#">Text</a>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="portfolio__card mix app">
            <img src={work5} alt="1" className="portfolio__img" />
            <h3 className="portfolio__title">Brand Design</h3>
            <span className="portfolio__button">
              Demo <img className="icon skills__icon" src={icon} />
            </span>
            <div className="portfolio__details">
              <h3 className="portfolio__details__title">Design for services</h3>
              <p className="portfolio__details__description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi,
                optio! Cum ullam quos veritatis porro placeat corporis quaerat
                possimus molestias.
              </p>
              <ul className="portfolio__details__info">
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
                    <a href="#">Text</a>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="portfolio__card mix design">
            <img src={work6} alt="1" className="portfolio__img" />
            <h3 className="portfolio__title">Web Design</h3>
            <span className="portfolio__button">
              Demo <img className="icon skills__icon" src={icon} />
            </span>
            <div className="portfolio__details">
              <h3 className="portfolio__details__title">
                Something for health
              </h3>
              <p className="portfolio__details__description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi,
                optio! Cum ullam quos veritatis porro placeat corporis quaerat
                possimus molestias.
              </p>
              <ul className="portfolio__details__info">
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
                    <a href="#">Text</a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <PortfolioPopup />
    </>
  );
};

export default Portfolio;
