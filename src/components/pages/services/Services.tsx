import React from "react";

import icon from "../../../assets/svgs/tech.svg";

// <img className="icon skills__icon" src={icon} />

const Services = () => {
  return (
    <>
      <section className="services section" id="services">
        <h2 className="section__title" data-heading="My Services">
          What I Offer
        </h2>

        <div className="services__container container">
          <div className="services__content">
            <div>
              <img className="icon services__icon" src={icon} />
              <h3 className="services__title">
                Frontend <br /> Developer
              </h3>
            </div>

            <span className="services__button">
              View more:
              <img className="icon services__button__icon" src={icon} />
            </span>

            <div className="services__modal">
              <div className="services__modal__content">
                <img className="icon services__modal__close" src={icon} />
                <h3 className="services__modal__title">FrontEnd Developer</h3>
                <p className="services__modal__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore, eius. Asperiores explicabo a quidem eligendi veniam
                  tempora, veritatis atque iusto!
                </p>
                <ul className="services__modal__services">
                  <li className="services__modal__service">
                    <img className="icon services__modal__icon" src={icon} />
                    <p className="services__modal__info">
                      Development web and mobile app
                    </p>
                  </li>
                  <li className="services__modal__service">
                    <img className="icon services__modal__icon" src={icon} />
                    <p className="services__modal__info">
                      Creating User Interface
                    </p>
                  </li>
                  <li className="services__modal__service">
                    <img className="icon services__modal__icon" src={icon} />
                    <p className="services__modal__info">Adaptive layouts</p>
                  </li>
                  <li className="services__modal__service">
                    <img className="icon services__modal__icon" src={icon} />
                    <p className="services__modal__info">
                      Big and small projects
                    </p>
                  </li>
                  <li className="services__modal__service">
                    <img className="icon services__modal__icon" src={icon} />
                    <p className="services__modal__info">Beautifull design</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <img className="icon services__icon" src={icon} />
              <h3 className="services__title">
                Backend <br /> Developer
              </h3>
            </div>

            <span className="services__button">
              View more:
              <img className="icon services__button__icon" src={icon} />
            </span>
          </div>

          <div className="services__content">
            <div>
              <img className="icon services__icon" src={icon} />
              <h3 className="services__title">
                Designer <br /> DeveloperLol
              </h3>
            </div>

            <span className="services__button">
              View more:
              <img className="icon services__button__icon" src={icon} />
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
