import React from "react";
import styles from "./Qualification.module.scss";

import {
  UilCalendarAlt,
  UilGraduationCap,
  UilBriefcase,
} from "@iconscout/react-unicons";

import { sections } from "shared/libs";

const Qualification: React.FC = React.memo(() => {
  return (
    <section className={styles.qual} id={sections.history.id}>
      <h2 data-heading="My Journey">My History</h2>

      <div className={styles.qualContainer}>
        <div className={styles.qualSection}>
          <h3>
            <UilGraduationCap className={styles.icon} />
            Education
          </h3>

          <div className={styles.qualItem}>
            <h4>Self-study</h4>
            <p>JS, React</p>
            <span>
              <UilCalendarAlt className={styles.icon} />
              <span>2022 - present</span>
            </span>
          </div>

          <div className={styles.qualItem}>
            <h4>Kharkiv Polytechnic University</h4>
            <p>
              Telecommunitacions, Internet and Radio Engineering. Master's
              degree
            </p>
            <span>
              <UilCalendarAlt className={styles.icon} />
              <span>2018-2020</span>
            </span>
          </div>

          <div className={styles.qualItem}>
            <h4>Kharkiv Polytechnic University</h4>
            <p>
              Telecommunitacions, Internet and Radio Engineering. Bachelor's
              Degree
            </p>
            <span>
              <UilCalendarAlt className={styles.icon} />
              2014-2018
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
            <h4>Facebook Pages Owner</h4>
            <p>
              Creation, promotion, employee hiring, marketing and management
            </p>
            <span>
              <UilCalendarAlt className={styles.icon} />
              2018-2022
            </span>
          </div>
          <div className={styles.qualItem}>
            <h4>Ecommerce Shops Owner</h4>
            <p>Purchase, marketing, orders processing</p>
            <span>
              <UilCalendarAlt className={styles.icon} />
              2016-2018
            </span>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Qualification;
