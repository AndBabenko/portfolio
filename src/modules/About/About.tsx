import React from "react";
import { UilAward, UilSuitcase, UilHeadphones } from "@iconscout/react-unicons";
import styles from "./About.module.scss";

import aboutImg from "shared/assets/imgs/photos/about-img.jpg";
import Button from "shared/ui/Button";
import { sections } from "shared/libs";

const About: React.FC = () => {
  return (
    <section className={styles.about} id={sections.about.id}>
      <h2 data-heading="My Intro">About Me</h2>
      <div className={styles.aboutContainer}>
        <img src={aboutImg} alt="About-Image" className={styles.aboutImage} />

        <div className={styles.data}>
          <h3>Hi, I`m Andrey</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            placeat itaque vel dignissimos suscipit consequatur amet numquam
            quisquam hic, ut sunt accusantium minus in delectus facere, aliquam
            explicabo, assumenda quia.
          </p>

          <div className={styles.info}>
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
          </div>
          <Button bg="body" type="navigate" target={sections.contact.id}>
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
