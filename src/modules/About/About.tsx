import React from "react";
import styles from "./About.module.scss";

import aboutImg from "shared/assets/imgs/photos/about-img.jpg";
import Button from "shared/ui/Button";
import { sections } from "shared/libs";

const About: React.FC = React.memo(() => {
  return (
    <section className={styles.about} id={sections.about.id}>
      <h2 data-heading="My Intro">About Me</h2>
      <div className={styles.aboutContainer}>
        <img src={aboutImg} alt="About-Image" className={styles.aboutImage} />

        <div className={styles.data}>
          <h3>Summary</h3>
          <p>
            I have experience in HTML and CSS, JS/TS and React.js. I'm doing my
            best in building performant and accessible UI that will be easy to
            maintain in the future and will meet development standards.
          </p>
          <p>
            I'm excited to learn new technologies and would like to be part of a
            friendly and professional team where I can bring maximum profit to
            the business.
          </p>

          {/* <div className={styles.info}>
            <div>
              <UilAward className={styles.icon} />
              <h4>Experience</h4>
              <span>1+ year</span>
            </div>

            <div>
              <UilSuitcase className={styles.icon} />
              <h4>Completed</h4>
              <span>3 projects</span>
            </div>

            <div>
              <UilHeadphones className={styles.icon} />
              <h4>Support</h4>
              <span>Online 24/7</span>
            </div>
          </div> */}
          <Button bg="body" type="navigate" target={sections.contact.id}>
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
});

export default About;
