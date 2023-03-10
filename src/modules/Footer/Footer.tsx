import React from "react";
import styles from "./Footer.module.scss";
import { HashLink } from "react-router-hash-link";

import SocialMedia from "components/SocialMedia";
import { sections } from "shared/libs";

const Footer: React.FC = React.memo(() => {
  return (
    <footer className={styles.footer}>
      <div>
        <div className={styles.content}>
          <h2>Andrey Babenko</h2>
          <p>Frontend Developer</p>
        </div>

        <div className={styles.links}>
          <HashLink smooth to={`/#${sections.home.id}`}>
            Home
          </HashLink>

          <HashLink smooth to={`/#${sections.about.id}`}>
            About Me
          </HashLink>

          <HashLink smooth to={`/#${sections.portfolio.id}`}>
            Portfolio
          </HashLink>
        </div>
        <div className={styles.social}>
          <SocialMedia rotate={false} />
        </div>
      </div>
      <p>&#169; Copyright. All rights reserved</p>
    </footer>
  );
});

export default Footer;
