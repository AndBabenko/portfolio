import React, { useEffect, useRef } from "react";

import icon from "../../../assets/svgs/tech.svg";

const Skills: React.FC = () => {
  return (
    <>
      <section className="skills section" id="skills">
        <h2 className="section__title" data-heading="My Abilities">
          My Experience
        </h2>

        <div className="skills__container container">
          <div className="skills__tabs">
            {/* Frontend Skills */}
            <div
              className="skills__header skills-active"
              data-target="#frontend"
            >
              <img className="icon skills__icon" src={icon} />
              <div>
                <div className="skills__title">Frontend Developer</div>
                <span className="skills__subtitle">Some monthes</span>
              </div>
              <img className="icon skills__arrow" src={icon} />
            </div>
            {/* Backend Skills */}
            <div className="skills__header" data-target="#backend">
              <img className="icon skills__icon" src={icon} />
              <div>
                <div className="skills__title">Backend Developer</div>
                <span className="skills__subtitle">Less then one month </span>
              </div>
              <img className="icon skills__arrow" src={icon} />
            </div>
            {/* Design Skills */}
            <div className="skills__header" data-target="#design">
              <img className="icon skills__icon" src={icon} />
              <div>
                <div className="skills__title">UI/UX design</div>
                <span className="skills__subtitle">A few days</span>
              </div>
              <img className="icon skills__arrow" src={icon} />
            </div>
          </div>

          <div className="skills__content">
            {/* Frontend Skills -- list */}
            <div
              className="skills__group skills-active"
              data-content
              id="frontend"
            >
              <div className="skills__list">
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">HTML</h3>
                    <span className="skills__number">90%</span>
                  </div>
                  <div className="skills__bar">
                    <span
                      className="skills__percentage"
                      style={{ width: "90%" }}
                    ></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">CSS</h3>
                    <span className="skills__number">80%</span>
                  </div>
                  <div className="skills__bar">
                    <span
                      className="skills__percentage"
                      style={{ width: "80%" }}
                    ></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">JavaScript</h3>
                    <span className="skills__number">85%</span>
                  </div>
                  <div className="skills__bar">
                    <span
                      className="skills__percentage"
                      style={{ width: "85%" }}
                    ></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">React</h3>
                    <span className="skills__number">78%</span>
                  </div>
                  <div className="skills__bar">
                    <span
                      className="skills__percentage"
                      style={{ width: "78%" }}
                    ></span>
                  </div>
                </div>
              </div>
            </div>
            {/* Backend Skills -- list */}
            <div className="skills__group" data-content id="backend">
              <div className="skills__list">
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">PHP</h3>
                    <span className="skills__number">0%</span>
                  </div>
                  <div className="skills__bar">
                    <span
                      className="skills__percentage"
                      style={{ width: "0%" }}
                    ></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">Python</h3>
                    <span className="skills__number">1%</span>
                  </div>
                  <div className="skills__bar">
                    <span
                      className="skills__percentage"
                      style={{ width: "1%" }}
                    ></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">MySQL</h3>
                    <span className="skills__number">2%</span>
                  </div>
                  <div className="skills__bar">
                    <span
                      className="skills__percentage"
                      style={{ width: "2%" }}
                    ></span>
                  </div>
                </div>
              </div>
            </div>
            {/* Design Skills -- list */}
            <div className="skills__group" data-content id="design">
              <div className="skills__list">
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">Figma</h3>
                    <span className="skills__number">90%</span>
                  </div>
                  <div className="skills__bar">
                    <span
                      className="skills__percentage"
                      style={{ width: "90%" }}
                    ></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">Scetch</h3>
                    <span className="skills__number">2%</span>
                  </div>
                  <div className="skills__bar">
                    <span
                      className="skills__percentage"
                      style={{ width: "2%" }}
                    ></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">Photoshop</h3>
                    <span className="skills__number">85%</span>
                  </div>
                  <div className="skills__bar">
                    <span
                      className="skills__percentage"
                      style={{ width: "85%" }}
                    ></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
