import React from "react";
import styles from "./Qualification.module.scss";

import {
  UilCalendarAlt,
  UilGraduationCap,
  UilBriefcase,
} from "@iconscout/react-unicons";

import { sections } from "shared/libs";

const Qualification: React.FC = () => {
  return (
    <section className={styles.qual} id={sections.qualification.id}>
      <h2 data-heading="My Journey">Qualification</h2>

      <div className={styles.qualContainer}>
        <div className={styles.qualSection}>
          <h3>
            <UilGraduationCap className={styles.icon} />
            Education
          </h3>

          <div className={styles.qualItem}>
            <h4>Education</h4>
            <p>Master of something</p>
            <span>
              <UilCalendarAlt className={styles.icon} />
              <span>2010-2015</span>
            </span>
          </div>
          <div className={styles.qualItem}>
            <h4>Some School</h4>
            <p>Expert of something</p>
            <span>
              <UilCalendarAlt className={styles.icon} />
              2015-2020
            </span>
          </div>
          <div className={styles.qualItem}>
            <h4>Some School</h4>
            <p>Expert of something</p>
            <span>
              <UilCalendarAlt className={styles.icon} />
              2020-present
            </span>
          </div>
        </div>

        <div className={styles.qualSection}>
          <h3>
            <span>
              <UilBriefcase className={styles.icon} />
            </span>
            Experience
          </h3>

          <div className={styles.qualItem}>
            <h4>Some Company</h4>
            <p>Manager</p>
            <span>
              <UilCalendarAlt className={styles.icon} />
              2010-2015
            </span>
          </div>
          <div className={styles.qualItem}>
            <h4>Some Company</h4>
            <p>Manager</p>
            <span>
              <UilCalendarAlt className={styles.icon} />
              2015-2020
            </span>
          </div>
          <div className={styles.qualItem}>
            <h4>Some Company</h4>
            <p>Manager</p>
            <span>
              <UilCalendarAlt className={styles.icon} />
              2020-present
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
