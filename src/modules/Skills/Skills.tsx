import React, { useState } from "react";
import styles from "./Skills.module.scss";

import {
  UilAngleDown,
  UilBracketsCurly,
  UilServers,
  UilSwatchbook,
} from "@iconscout/react-unicons";

import {
  frontendSkills,
  backendSkills,
  designSkills,
  sections,
} from "shared/libs";

type SkillItemType = {
  skill: string;
  level: number;
};

const SkillLine: React.FC<SkillItemType> = ({ skill, level }) => {
  return (
    <div>
      <div className={styles.skillTitle}>
        <h4>{skill}</h4>
        <span>{level}%</span>
      </div>
      <div className={styles.skillBar}>
        <span style={{ width: `${level}%` }}></span>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const [currentSkill, setCurrentSkill] = useState(frontendSkills);

  const PercentsGroup = currentSkill.map((item: SkillItemType) => (
    <SkillLine key={item.skill} {...item} />
  ));

  return (
    <section className={styles.skills} id={sections.skills.id}>
      <h2 data-heading="My Abilities">My Experience</h2>

      <div className={styles.skillsContainer}>
        <div className={styles.headersSection}>
          <div
            className={`${styles.header} ${
              currentSkill === frontendSkills ? styles.active : ""
            }`}
            onClick={() => setCurrentSkill(frontendSkills)}
          >
            <UilBracketsCurly className={styles.icon} />
            <div>
              <h3>Frontend Developer</h3>
              <p>Some months</p>
            </div>
            <UilAngleDown className={styles.arrow} />
          </div>

          <div
            className={`${styles.header} ${
              currentSkill === backendSkills ? styles.active : ""
            }`}
            onClick={() => setCurrentSkill(backendSkills)}
          >
            <UilServers className={styles.icon} />
            <div>
              <h3>Backend Developer</h3>
              <p>Less then one month </p>
            </div>
            <UilAngleDown className={styles.arrow} />
          </div>

          <div
            className={`${styles.header} ${
              currentSkill === designSkills ? styles.active : ""
            }`}
            onClick={() => setCurrentSkill(designSkills)}
          >
            <UilSwatchbook className={styles.icon} />
            <div>
              <h3>UI/UX design</h3>
              <p>A few days</p>
            </div>
            <UilAngleDown className={styles.arrow} />
          </div>
        </div>

        <div className={styles.skillsSection}>{PercentsGroup}</div>
      </div>
    </section>
  );
};

export default Skills;
