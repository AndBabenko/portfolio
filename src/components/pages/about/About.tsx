import React from "react";

import icon from "../../../assets/svgs/tech.svg";
import aboutImg from "../../../assets/imgs/about-img.jpg";

const About: React.FC = () => {
  return (
    <>
      <section className="about section" id="about">
        <h2 data-heading="My Intro" className="section__title">
          About Me
        </h2>
        <div className="container about__container">
          <img src={aboutImg} alt="About-Image" className="about__img" />

          <div className="about__data">
            <h3 className="about__header">Lorem ipsum dolor sit amet.</h3>
            <p className="about__description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus,
              rem assumenda! Voluptates earum vel dolorum.
            </p>

            <div className="about__info">
              <div className="about__info__box">
                <img src={icon} className="icon" />
                <h3 className="about__info__title">Experience</h3>
                <span className="about__info__subtitle">1+ year</span>
              </div>

              <div className="about__info__box">
                <img src={icon} className="icon" />
                <h3 className="about__info__title">Completed</h3>
                <span className="about__info__subtitle">3 projects</span>
              </div>

              <div className="about__info__box">
                <img src={icon} className="icon" />
                <h3 className="about__info__title">Support</h3>
                <span className="about__info__subtitle">Online 24/7</span>
              </div>
            </div>
            <a href="#contact" className="button">
              <img src={icon} className="icon" />
              Contact Me
            </a>
          </div>
        </div>
      </section>

      <section className="qualification section">
        <h2 data-heading="My Journey" className="section__title">
          Qualification
        </h2>

        <div className="qualification__container container">
          <div className="education">
            <h3 className="qualification__title">
              <img src={icon} className="icon" />
              Education
            </h3>

            <div className="timeline">
              <div className="timeline__item">
                <h3 className="timeline__title">Education</h3>
                <p className="timeline__text">Master of something</p>
                <span className="timeline__date">
                  <img src={icon} className="icon" />
                  <span>2010-2015</span>
                </span>
              </div>
              <div className="timeline__item">
                <h3 className="timeline__title">Some School</h3>
                <p className="timeline__text">Expert of something</p>
                <span className="timeline__date">
                  <img src={icon} className="icon" /> 2015-2020
                </span>
              </div>
              <div className="timeline__item">
                <h3 className="timeline__title">Some School</h3>
                <p className="timeline__text">Expert of something</p>
                <span className="timeline__date">
                  <img src={icon} className="icon" /> 2020-present
                </span>
              </div>
            </div>
          </div>

          <div className="experience">
            <h3 className="qualification__title">
              <img src={icon} className="icon" />
              Experience
            </h3>

            <div className="timeline">
              <div className="timeline__item">
                <h3 className="timeline__title">Some Company</h3>
                <p className="timeline__text">Manager</p>
                <span className="timeline__date">
                  <img src={icon} className="icon" /> 2010-2015
                </span>
              </div>
              <div className="timeline__item">
                <h3 className="timeline__title">Some Company</h3>
                <p className="timeline__text">Manager</p>
                <span className="timeline__date">
                  <img src={icon} className="icon" /> 2015-2020
                </span>
              </div>
              <div className="timeline__item">
                <h3 className="timeline__title">Some Company</h3>
                <p className="timeline__text">Manager</p>
                <span className="timeline__date">
                  <img src={icon} className="icon" /> 2020-present
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
