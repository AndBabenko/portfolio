import React, { useState } from "react";

import SkillsData from "../../ui/skills-data";

import {
  UilAngleDown,
  UilBracketsCurly,
  UilServers,
  UilSwatchbook,
} from "@iconscout/react-unicons";

const frontendSkills = [
  {
    skill: "HTML",
    level: 90,
  },
  {
    skill: "CSS",
    level: 80,
  },
  {
    skill: "JS",
    level: 85,
  },
  {
    skill: "React",
    level: 78,
  },
];
const backendSkills = [
  {
    skill: "PHP",
    level: 90,
  },
  {
    skill: "Python",
    level: 20,
  },
  {
    skill: "MySQL",
    level: 20,
  },
];
const designSkills = [
  {
    skill: "Figma",
    level: 90,
  },
  {
    skill: "Scatch",
    level: 80,
  },
  {
    skill: "Photoshop",
    level: 85,
  },
];

const Skills: React.FC = () => {
  const [currentSkill, setCurrentSkill] = useState<any>(frontendSkills);

  const setSkills = (skillsCategory: string) => {
    switch (skillsCategory) {
      case "frontend":
        setCurrentSkill(frontendSkills);
        break;
      case "backend":
        setCurrentSkill(backendSkills);
        break;
      case "design":
        setCurrentSkill(designSkills);
        break;
    }

    const allTabs = document.querySelectorAll(".skills__header");

    allTabs.forEach((tab) => {
      const attr = tab.getAttribute("data-target");

      if (attr !== skillsCategory) {
        tab.classList.remove("active");
      } else {
        tab.classList.add("active");
      }
    });
  };

  return (
    <>
      <section className="skills section" id="skills">
        <h2 className="section__title" data-heading="My Abilities">
          My Experience
        </h2>

        <div className="skills__container container">
          <div className="skills__tabs">
            <div
              className="skills__header active"
              data-target="frontend"
              onClick={() => setSkills("frontend")}
            >
              <UilBracketsCurly className="skills__icon" />
              <div>
                <div className="skills__title">Frontend Developer</div>
                <span className="skills__subtitle">Some months</span>
              </div>
              <UilAngleDown className="skills__arrow" />
            </div>

            <div
              className="skills__header "
              data-target="backend"
              onClick={() => setSkills("backend")}
            >
              <UilServers className="skills__icon" />
              <div>
                <div className="skills__title">Backend Developer</div>
                <span className="skills__subtitle">Less then one month </span>
              </div>
              <UilAngleDown className="skills__arrow" />
            </div>

            <div
              className="skills__header"
              data-target="design"
              onClick={() => setSkills("design")}
            >
              <UilSwatchbook className=" skills__icon" />
              <div>
                <div className="skills__title">UI/UX design</div>
                <span className="skills__subtitle">A few days</span>
              </div>
              <UilAngleDown className="skills__arrow" />
            </div>
          </div>

          <div className="skills__content">
            <div className="skills__group active">
              <SkillsData skill={currentSkill} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
