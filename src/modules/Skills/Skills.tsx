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
  otherSkills,
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

const Skills: React.FC = React.memo(() => {
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
              <h3>Frontend Technologies</h3>
              <p>Can be helpful!</p>
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
              <h3>Backend Technologies</h3>
              <p>Also interestring!</p>
            </div>
            <UilAngleDown className={styles.arrow} />
          </div>

          <div
            className={`${styles.header} ${
              currentSkill === otherSkills ? styles.active : ""
            }`}
            onClick={() => setCurrentSkill(otherSkills)}
          >
            <UilSwatchbook className={styles.icon} />
            <div>
              <h3>Other</h3>
              <p>A few days</p>
            </div>
            <UilAngleDown className={styles.arrow} />
          </div>
        </div>

        <div className={styles.skillsSection}>{PercentsGroup}</div>
      </div>
    </section>
  );
});

export default Skills;
